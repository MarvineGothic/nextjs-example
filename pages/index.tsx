import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import config from '../common/config'
import ArticleList from '../components/ArticleList'
import styles from '../styles/Home.module.css'

export function Home({ articles }: any) {
  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  )
}


export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(`${config.server}/api/articles`);
  const articles = await res.json();

  return {
    props: {
      articles
    }
  }
}

// export const getStaticProps = async () => {
//   const res = await fetch(`${config.exampleApiUrl}/posts?_limit=6`);
//   const articles = await res.json();

//   return {
//     props: {
//       articles
//     }
//   }
// }

export default Home
