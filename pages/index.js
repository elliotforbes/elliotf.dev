import Head from "next/head";
import fs from "fs";
import Link from "next/link";
import Image from "next/image";
import matter from "gray-matter";
import styles from "../styles/Home.module.css";

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

  return {
    props: {
      posts,
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

      <main className="prose mx-auto">
        <h2 className="font-extrabold text-3xl mb-8 text-center">
          All Articles
        </h2>
        <div className="container mx-auto p-4 md:p-0">
          {posts.map(({ slug, frontmatter }) => (
            <div key={slug} className="p-8 ">
              <Link href={`/blog/${slug}`}>
                <a className="no-underline hover:underline">
                  <div className="w-full h-auto relative">
                    <img src={frontmatter.image} alt={frontmatter.title} />
                  </div>
                  <h1 className="text-xl font-extrabold mb-4">
                    {frontmatter.title}
                  </h1>
                  <p className="text-sm text-gray-800 mb-4">
                    {frontmatter.date}
                  </p>
                  <p className="text-md text-gray-700">
                    {frontmatter.metaDesc}
                  </p>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
