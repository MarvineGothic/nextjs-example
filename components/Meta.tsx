import Head from 'next/head'
import React from 'react'

const Meta = ({ title, keywords, description }: any) => {
  return (
    <Head>
      <meta name="viewport"
        content="width=device-width,initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: "NestJs Example",
  keywords: "nestjs,dev,learn",
  description: "Get the latest news in web dev"
}

export default Meta