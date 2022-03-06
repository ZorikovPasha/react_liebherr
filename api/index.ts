import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

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
  setToken =  (token: string): void => {
    localStorage.setItem('token', token);
  }
}

export const ApiClient = new Api(apiConfig);
export const UserApiClient = new UserApi(apiConfig);