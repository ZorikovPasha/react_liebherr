import Image from 'next/image'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { publicApi } from '../../api'

import { AnotherArticlesSlider } from '../../components/pages/article/AnotherArticlesSlider'
import { BreadCrumbs } from '../../components/common/BreadCrumbs'
import { ArticleType } from '../../types/dataTypes'
import { ROUTES } from '../../utils/const'
import Head from 'next/head'

interface IArticleProps {
  article: ArticleType
}

const Article: NextPage<IArticleProps> = ({ article }) => {
  const { title, images, sections, subtitles } = article
  const breadCrumbs = [
    { id: 1, link: ROUTES.HOME, text: 'Главная' },
    { id: 2, link: ROUTES.ARTICLES, text: 'Блог' },
    { id: 3, link: '', text: title },
  ]

  return (
    <>
      <Head>
        <meta name="description" content="Строительная компания Liebherr" />
        <title>{title}</title>
      </Head>

      <BreadCrumbs items={breadCrumbs} />

      <section className="article-top">
        <div className="container">
          <h1 className="article-top__heading">{title}</h1>
          <div className="article-top__images flex jcsb">
            {images?.map((src) => (
              <div className="article-top__img" key={src}>
                <Image src={src} layout="fill" objectFit="cover" alt="Строительный кран" />
              </div>
            ))}
          </div>
          {sections?.map((section, index) => (
            <div key={index}>
              <h2 className="article-top__title" key={index}>
                {subtitles[index]}
              </h2>
              {section.map(({ text, isListItem }, idx) =>
                isListItem ? (
                  <li className="article-top__list-item rel after" key={idx}>
                    {text}
                  </li>
                ) : (
                  <p className="article-top__text" key={idx}>
                    {text}
                  </p>
                ),
              )}
            </div>
          ))}
        </div>
      </section>

      <AnotherArticlesSlider currentArticle={article.id} />

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
  const data = await publicApi.getArticles(1)

  return {
    paths: data.items.reduce((accum: PType[], next) => [...accum, { params: { id: next.toString() } }], []),
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
  const article = await publicApi.getSingleArticle(id)

  return { props: { article } }
}
