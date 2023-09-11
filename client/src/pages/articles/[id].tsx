import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import type { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

import { cmsApiClient } from '../../api'
import { AnotherArticlesSlider } from '../../components/pages/article/AnotherArticlesSlider'
import { BreadCrumbs } from '../../components/common/BreadCrumbs'
import { ROUTES } from '../../utils/const'
import { IArticleRes } from '../../api/types'

interface IArticleProps {
  article: IArticleRes
  others: IArticleRes[]
  MdxBody: MDXRemoteSerializeResult<Record<string, unknown>, Record<string, unknown>>
}

const Article: NextPage<IArticleProps> = ({ article, MdxBody, others }) => {
  const { Title, MetaTitle, MetaDescription } = article
  const breadCrumbs = [
    { id: 1, link: ROUTES.HOME, text: 'Главная' },
    { id: 2, link: ROUTES.ARTICLES, text: 'Статьи' },
    { id: 3, link: '', text: Title },
  ]

  return (
    <>
      <Head>
        <meta name="description" content={MetaDescription} />
        <title>{MetaTitle}</title>
      </Head>

      <BreadCrumbs items={breadCrumbs} />

      <section className="article-top">
        <div className="container">
          <h1 className="article-top__heading">{Title}</h1>
          <div className="article-top__images flex jcsb"></div>
          <div className="article__markdown mt-40">
            <MDXRemote {...MdxBody} />
          </div>
        </div>
      </section>

      {others.length ? <AnotherArticlesSlider items={others} /> : null}

      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1538.59309082283!2d37.5659100109784!3d55.57353554252417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414aada349fa0335%3A0x664f1a375fe7ab8a!2z0JrRg9C70LjQutC-0LLRgdC60LDRjyDRg9C7Liwg0JzQvtGB0LrQstCw!5e0!3m2!1sru!2sru!4v1630922368972!5m2!1sru!2sru"
          width="100%"
          height="548"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </>
  )
}

export default Article

type PType = { params: { id: string } }

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await cmsApiClient.getArticles()

  return {
    paths: data.reduce((accum: PType[], next) => [...accum, { params: { id: next.Slug } }], []),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<IArticleProps> = async ({ params }) => {
  const { id } = params || {}
  if (typeof id !== 'string') {
    return {
      notFound: true,
    }
  }

  const articles = await cmsApiClient.getArticles()
  const current = articles.find((a) => a.Slug === id)

  if (!current) {
    return {
      notFound: true,
    }
  }

  const MdxBody = await serialize(current.Body)

  return {
    props: {
      article: current,
      others: articles.filter((a) => a.Slug !== id),
      MdxBody: MdxBody,
    },
  }
}
