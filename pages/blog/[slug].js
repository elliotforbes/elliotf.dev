import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';
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


export default function PostPage({ frontmatter, content }) {
  return (
    <div className='p-4'>
      <Head>
        <title>{frontmatter.title} | MyEpitaph.com</title>
        <meta name="description" content={`${frontmatter.metaDesc}`}/>
        <meta property="og:title" content="Profile | MyEpitaph.com"/>
        <meta property="og:description" content={`${frontmatter.metaDesc}`}/>
        <meta property="og:url" content="https://myepitaph.com/"/>
        <meta property="og:type" content="website"/>
      </Head>
      <article className="container prose mx-auto">
        <div className="w-full h-auto">
          <img src={frontmatter.image} alt={frontmatter.title} className="mx-auto" />
        </div>
        <div className="border-b border-gray-200 mb-8">
          <h1 className="text-center text-5xl font-extrabold mb-8 mt-8">{frontmatter.title}</h1>
          <p className="text-center text-gray-700 text-sm mb-8">{frontmatter.date}</p>
        </div>
        <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
      </article>
    </div>
  );
}