import Head from "next/head";
import fs from "fs";
import Link from "next/link";
import matter from "gray-matter";
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

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Elliot Forbes | Personal Blog</title>
        <meta name="description" content="Elliot Forbes personal blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="prose md:mx-auto">
        <div className="md:container mx-auto p-4 md:p-0">
          {posts.map(({ slug, frontmatter }) => (
            <div key={slug} className="pb-8 mb-4 border-b border-gray-200">
              <Link href={`/blog/${slug}`}>
                <a className="no-underline hover:underline">
                {frontmatter.image !== undefined ?
                  <div className="half-width mb-8">
                    <img src={frontmatter.image} alt={frontmatter.title} />
                  </div> : <></>}
                  <div className="p-4 pt-0">
                    <h1 className="text-xl font-extrabold mb-4">
                      {frontmatter.title}
                    </h1>
                    <p className="text-sm text-gray-800 mb-4">
                      {frontmatter.date}
                    </p>
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
