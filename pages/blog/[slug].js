import fs from 'fs';
import React from "react";
import matter from 'gray-matter';
import Markdoc from "@markdoc/markdoc";
import moment from 'moment';
import Head from 'next/head';

export async function getStaticPaths() {
  const files = fs.readdirSync('content/blog');
  
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`content/blog/${slug}.md`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}

const formatDate = (value) => {
  return moment(value).format('DD MMM, YYYY')
}


export default function PostPage({ frontmatter, content }) {
  const ast = Markdoc.parse(content);
  const page = Markdoc.transform(ast);
  return (
    <div className='p-4'>
      <Head>
        <title>{frontmatter.title} | Elliot Forbes</title>
        <meta name="description" content={`${frontmatter.metaDesc}`}/>
        <meta property="og:title" content={`${frontmatter.title} | Elliot Forbes`} />
        <meta property="og:description" content={`${frontmatter.metaDesc}`}/>
        <meta property="og:url" content="https://elliotf.dev/"/>
        <meta property="og:type" content="website"/>
        <meta property="og:image" content={`${frontmatter.image}`} key="ogimage" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="@elliot_f" key="twhandle" />
      </Head>
      <article className="container prose mx-auto">
        {frontmatter.image !== undefined ?
        <div className="w-full">
          <img src={frontmatter.image} alt={frontmatter.title} className="mx-auto" />
        </div> : <></>}
        <div className="border-b border-gray-200 mb-8">
          <h1 className="text-center">{frontmatter.title}</h1>
          <p className="text-center text-gray-700 text-sm mb-8">{formatDate(frontmatter.date)}</p>
        </div>
        <div>
          {Markdoc.renderers.react(page, React)}
        </div>
      </article>
    </div>
  );
}