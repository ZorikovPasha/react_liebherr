import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import Head from 'next/head'

import { cmsApiClient } from '../../api'
import { BreadCrumbs } from '../../components/common/BreadCrumbs'
import { ArticleCard } from '../../components/pages/blog/ArticleCard'
import { ROUTES } from '../../utils/const'
import { IArticlesRes } from '../../api/types'

interface IBlogProps {
  items: IArticlesRes
}

const Blog: NextPage<IBlogProps> = ({ items }) => {
  const breadCrumbs = [
    { id: 1, link: ROUTES.HOME, text: 'Главная' },
    { id: 2, link: '', text: 'Статьи' },
  ]

  const [articlesToShow, setArticlesToShow] = React.useState(3)

  const onLoadMore = async () => {
    setArticlesToShow((prev) => prev + 3)
  }

  return (
    <>
      <Head>
        <meta name="description" content="Строительная компания Liebherr" />
        <title>Блог</title>
      </Head>

      <BreadCrumbs items={breadCrumbs} />
      <section className="blog">
        <div className="container">
          <h1 className="blog__title">СТАТЬИ О СПЕЦТЕХНИКЕ</h1>
          <div className="blog__items rel">
            {items.slice(0, articlesToShow).map(({ id, Title, Text, Preview, Slug }) => (
              <ArticleCard key={id} slug={Slug} title={Title} subtitle={Text} preview={Preview?.url} />
            ))}
          </div>

          {items.length > articlesToShow ? (
            <div className="blog__btn-wrapper">
              <button className="blog__btn" onClick={onLoadMore}>
                Загрузить ещё
              </button>
            </div>
          ) : null}
        </div>
      </section>
    </>
  )
}

export default Blog

export const getStaticProps: GetStaticProps<IBlogProps> = async () => {
  try {
    const dto = await cmsApiClient.getArticles()

    return { props: { items: dto } }
  } catch (error) {
    console.error(error)

    return {
      props: {
        items: [],
      },
    }
  }
}
