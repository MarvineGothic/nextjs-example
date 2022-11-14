import React from 'react'
import atricleStyles from '../styles/Article.module.css'
import ArticleItem from './ArticleItem'

const ArticleList = ({ articles }: any) => {
  return (
    <div className={atricleStyles.grid}>
      {articles.map((article: any) => (
        <ArticleItem article={article} key={article.id} />
      ))}
    </div>
  )
}

export default ArticleList