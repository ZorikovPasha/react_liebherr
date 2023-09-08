import { ConstructionType, MachineryType } from '../types/dataTypes'

interface IConstruction {
  _id: string
  id: number
  title: string
  text: string
  images: string[]
  preview: string
  location: string
  anotherConstructions: number[]
}

export interface IConstructionsRes {
  constructions: IConstruction[]
}

export interface IMachineryRes {
  items: MachineryType[]
  total: number
}

export interface ISingleConstructionRes {
  item: ConstructionType
  similarOnes: ConstructionType[]
}

export interface ISingleMachineryRes {
  item: MachineryType
  similarOnes: MachineryType[]
}

interface IImageFormat {
  name: string
  hash: string
  ext: '.jpg' | '.png' | '.webp' | '.svg' | string
  mime: string
  path: string | null
  width: number
  height: number
  size: number
  url: string
}

export interface IImage {
  id: number
  name: string
  alternativeText: string
  caption: string
  width: number | null
  height: number | null
  formats: {
    thumbnail?: IImageFormat
    small?: IImageFormat
    medium?: IImageFormat
    large?: IImageFormat
  } | null
  hash: string
  ext: '.jpg' | '.png' | '.webp' | '.svg' | '.mp4' | string
  mime: string
  size: number
  url: string
  previewUrl: string | null
  provider: 'local' | 'database' | string
  provider_metadata: string | null
  created_at: string
  updated_at: string
}

export interface ICmsResponseBaseFields {
  id: number
  published_at: string
  created_at: string
  updated_at: string
  // created_by_id?: number
  // updated_by_id?: number
}

export interface IArticleRes extends ICmsResponseBaseFields {
  MetaTitle: string
  MetaDescription: string
  Title: string
  Date: string | null
  Slug: string
  TimeToRead: string
  IsNew: null | boolean
  Body: string
  Preview: IImage | null
  Text: string
}

export type IArticlesRes = IArticleRes[]
