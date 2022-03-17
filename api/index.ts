import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { ArticleType, ConstructionType, MachineryType } from "../types/dataTypes";

export const apiConfig = {
  returnRejectedPromiseOnError: true,
  baseURL: "http://localhost:5000",
  headers: {
    "Cache-Control": "no-cache, no-store, must-revalidate",
    "Content-Type": "application/json",
    Accept: "application/json",
  },
}


export class Axios {
  protected _axios: AxiosInstance;
  constructor(config: AxiosRequestConfig) {
    this._axios =  axios.create(config);
  }
}

class Api extends Axios {
  constructor(config: AxiosRequestConfig) {
    super(config);
  }

  success = <T>(response: AxiosResponse<T>): T =>  {
    return response.data;
  }

  error = <T>(error: AxiosError<T>): void => {
    throw error;
  }

  get = <T>(url: string): Promise<T> => {
    return this._axios.get(url)
      .then(this.success)
      .catch((error: AxiosError<Error>) => {
        throw error;
    });
    }
  post = <T, B>(url: string, data?: B): Promise<T> => {
    return this._axios.post(url, data)
      .then(this.success)
      .catch((error: AxiosError<Error>) => {
        console.log(error.response);
        return error?.response?.data;
      });
  }
}

class PublicApi extends Api {
  constructor(config: AxiosRequestConfig) {
    super(config);
  }

  getMachinery = () => {
    return this.get<MachineryType[]>('/api/machinery');
  };

  getSingleMachinery = (id: number)=> {
    return this.post<{ machinery: MachineryType, similarOnes: MachineryType[] }, { id: number }>('/api/machinery', { id });
  };

  getSingleConstruction = (id: string) => {
    return this.post<{construction: ConstructionType, similarOnes: ConstructionType[]}, { id: string }>('/api/construction', { id });
  };

  getConstructions = () => {
    return this.get<ConstructionType[]>('/api/constructions');
  };

  getArticles = () => {
    return this.get<ArticleType[]>('/api/articles');
  };

  getSingleArticle = (id: string) => {
    return this.post<ArticleType, { id: string }>('/api/article', { id });
  };
}



class UserApi extends Api {
  constructor(config: AxiosRequestConfig) {
    super(config)
    this._axios.interceptors.request.use((config) => {
      return {
        ...config,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    }, (error) => {
        console.log(error);
    });
  }
  setToken = (token: string): void => {
    localStorage.setItem('token', token);
  }
}

export const UserApiClient = new UserApi(apiConfig);
export const publicApi = new PublicApi(apiConfig);