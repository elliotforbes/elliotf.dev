import Head from "next/head";
import fs from "fs";
import Link from "next/link";
import matter from "gray-matter";
import moment from 'moment';
import styles from "../styles/Home.module.css";
import { DateTime } from 'luxon'


export async function getStaticProps() {
  const files = fs.readdirSync("content/blog");

  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`content/blog/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });

  const postDataSortByDate = posts.sort((a, b) => {
    const beforeDate = DateTime.fromFormat(a.frontmatter.date, 'yyyy-mm-dd')
    const afterDate = DateTime.fromFormat(b.frontmatter.date, 'yyyy-mm-dd')
    return afterDate - beforeDate
  })

  return {
    props: {
      posts: postDataSortByDate.splice(0, 10),
    },
  };
}

const formatDate = (value) => {
  return moment(value).format('DD MMM, YYYY')
}


export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Elliot Forbes | Personal Blog</title>
        <meta name="description" content="Elliot Forbes personal blog" />
        <link rel="icon" href="/favicon.ico" />

        <meta name="description" content="My personal mini-adventure photography blog - absolutely no tech content whatsoever sorry"/>
        <meta property="og:title" content="Elliot Forbes Photography" />
        <meta property="og:description" content="My personal mini-adventure photography blog" />
        <meta property="og:url" content="https://elliotf.dev/"/>
        <meta property="og:type" content="website"/>
        <meta property="og:image" content="https://media.elliotf.dev/2022/05/29/DSC00117.jpg" key="ogimage" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="@elliot_f" key="twhandle" />

      </Head>

      <main className="prose md:mx-auto">
        <div className="md:container mx:mx-auto p-2 md:p-0">
          {posts.map(({ slug, frontmatter }) => (
            <div key={slug} className="pb-8 mb-4 border-b border-gray-200">
              <Link href={`/blog/${slug}`}>
                <a className="no-underline hover:underline">
                {frontmatter.image !== undefined ?
                  <div className="half-width mb-8">
                    <img src={frontmatter.image} alt={frontmatter.title} />
                  </div> : <></>}
                  <div className="md:p-4 pt-0">
                    <h1>{frontmatter.title}</h1>
                    <p className="date">{formatDate(frontmatter.date)}</p>
                    <p className="text-md text-gray-700">
                      {frontmatter.metaDesc}
                    </p>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
