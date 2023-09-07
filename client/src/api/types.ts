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
