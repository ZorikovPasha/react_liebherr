import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { OrderType, RequestType } from '../types/dataTypes'
import { IArticlesRes, IConstructionsRes, IMachineryRes, ISingleConstructionRes, ISingleMachineryRes } from './types'

const apiConfig = {
  returnRejectedPromiseOnError: true,
  baseURL: process.env.BACKEND,
  headers: {
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
}

class Axios {
  protected _axios: AxiosInstance
  constructor(config: AxiosRequestConfig) {
    this._axios = axios.create(config)
  }
}

class Api extends Axios {
  constructor(config: AxiosRequestConfig) {
    super(config)
  }

  success = <T>(response: AxiosResponse<T>): T => {
    return response.data
  }

  error = <T>(error: AxiosError<T>): void => {
    throw error
  }

  get = <T>(url: string): Promise<T> => {
    return this._axios
      .get(url)
      .then(this.success)
      .catch((error: AxiosError<Error>) => {
        throw error
      })
  }
  post = <T, B>(url: string, data?: B): Promise<T> => {
    return this._axios
      .post(url, data)
      .then(this.success)
      .catch((error: AxiosError<Error>) => {
        return error
      })
  }
}

export class PublicApi extends Api {
  constructor(config: AxiosRequestConfig) {
    super(config)
  }

  getMachinery = (query: string) => {
    return this.get<IMachineryRes>('/api/machinery' + query)
  }

  getSingleMachinery = (id: number) => {
    return this.post<ISingleMachineryRes, { id: number }>('/api/machinery', {
      id,
    })
  }

  getSingleConstruction = (id: string) => {
    return this.post<ISingleConstructionRes, { id: string }>('/api/construction', { id })
  }

  getConstructions = () => {
    return this.get<IConstructionsRes>('/api/construction')
  }

  sendRequest = (data: RequestType) => {
    return this.post<{ success: boolean }, RequestType>('/api/question', data)
  }

  makeOrder = (userData: OrderType) => {
    return this.post<{ success: boolean }, { id: string }>('/api/order', userData)
  }

  getArticles = () => {
    return this.get<IArticlesRes>('/api/article')
  }
}

export const publicApi = new PublicApi(apiConfig)
