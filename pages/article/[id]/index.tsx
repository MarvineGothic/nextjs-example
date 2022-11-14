import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react'
import config from '../../../common/config';
import Meta from '../../../components/Meta';

const article = ({ article }: any) => {
  // const router = useRouter();
  // const { id } = router.query;
  return (
    <>
      <Meta title={article.title} />
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go Back</Link>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context: any) => {
  // const res = await fetch(`${config.exampleApiUrl}/posts/${context.params.id}`);
  const res = await fetch(`${config.server}/api/articles/${context.params.id}`)
  const article = await res.json();

  return {
    props: {
      article
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  // const res = await fetch(`${config.exampleApiUrl}/posts/`);
  const res = await fetch(`${config.server}/api/articles`)
  const articles = await res.json();
  const ids = articles.map((article: { id: any; }) => article.id);
  const paths = ids.map((id: { toString: () => any; }) => ({ params: { id: id.toString() } }))

  return {
    paths,
    fallback: false
  }
}

export default article