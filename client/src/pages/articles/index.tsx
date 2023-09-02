import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import { useDispatch } from 'react-redux'
import Head from 'next/head'

import { publicApi } from '../../api'
import { BreadCrumbs } from '../../components/common/BreadCrumbs'
import ArticleCard from '../../components/pages/blog/ArticleCard'
import { Error } from '../../components/common/Error'
import { ArticleType } from '../../types/dataTypes'
import { toggleLoader } from '../../redux/slices/loaderSilce'
import { ROUTES } from '../../utils/const'

interface IBlogProps {
  items: ArticleType[]
  hasMore: boolean
}

const Blog: NextPage<IBlogProps> = ({ items, hasMore }) => {
  const dispatch = useDispatch()

  const activeChunkIdx = React.useRef(1)
  const showMoreRef = React.useRef(hasMore)
  const breadCrumbs = [
    { id: 1, link: ROUTES.HOME, text: 'Главная' },
    { id: 2, link: '', text: 'Статьи' },
  ]

  const [_, setArticles] = React.useState(items)
  const [isError, setError] = React.useState(false)

  const onLoadMore = async () => {
    dispatch(toggleLoader(true))

    try {
      const data = await publicApi.getArticles(activeChunkIdx.current + 1)
      activeChunkIdx.current += 1
      showMoreRef.current = data.hasMore
      setArticles(data.items)
      setError(false)
      dispatch(toggleLoader(false))
    } catch (error) {
      setError(true)
    }
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
          {isError ? (
            <Error />
          ) : (
            <div className="blog__items rel">
              {_?.map(({ id, title, subtitle, preview }) => (
                <ArticleCard key={id} id={id} title={title} subtitle={subtitle} preview={preview} />
              ))}
            </div>
          )}
          {showMoreRef.current && (
            <div className="blog__btn-wrapper">
              <button className="blog__btn" onClick={onLoadMore}>
                Загрузить ещё
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default Blog

export const getStaticProps: GetStaticProps<IBlogProps> = async () => {
  try {
  } catch (error) {}

  const articlesInfo = await publicApi.getArticles(1)
  return { props: { items: articlesInfo.items, hasMore: articlesInfo.hasMore } }
}
