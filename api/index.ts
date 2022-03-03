import axios, { AxiosError, AxiosInterceptorManager, AxiosRequestConfig, AxiosResponse } from "axios";

export const apiConfig: AxiosRequestConfig = {
  withCredentials: true,
  baseURL: "http://localhost:5000",
  headers: {
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    "Content-Type": "application/json",
    Accept: "application/json",
  },
}

export class Axios {
  public interceptors: {
    request: AxiosInterceptorManager<AxiosRequestConfig>;
    response: AxiosInterceptorManager<AxiosResponse>;
  } | undefined;
  constructor(config: AxiosRequestConfig) {
    return axios.create(config);
  }
}

class UserApi extends Axios {
  private token: string;

  constructor(config: AxiosRequestConfig) {
    super(config);
    this.token = "";
    this.getToken = this.getToken.bind(this);
    this.setToken = this.setToken.bind(this);
    this.removeToken = this.removeToken.bind(this);
    this.post = this.post.bind(this);
    this.success = this.success.bind(this);
    this.error = this.error.bind(this);

    this.interceptors?.request.use((param) => {
      return {
        ...param,
        defaults: {
          headers: {
            ...param.headers,
            "Authorization": `Bearer ${this.getToken()}`
          },
        }
      }
  }, (error) => {
      // handling error
  });
  }

  public success<T>(response: AxiosResponse<T>): T {
    return response.data;
  }

  public error<T> (error: AxiosError<T>): void {
    throw error;
  }

  public getToken() {
    return `Bearer ${this.token}`
  }

  public setToken(token: string) {
    this.token = token;
    localStorage.setItem('token', token)
  }

  public removeToken() {
    this.token = "";
    localStorage.setItem("token", "");
  }

  public post<T, B, R = AxiosResponse<T>>(url: string, data?: B, config?: AxiosRequestConfig): Promise<R> {
    return this.post (url, data, config);
  }

  public register(credentials: any) {
    const data =  this.post('/private/register', {credentials})
      .then(this.success)
      .catch((error: AxiosError<Error>) => console.log(error));

    console.log(data);
    
  }

  public login(credentials: any) {
    const data = this.post('/private/login', {credentials})
      .then(this.success)
      .catch((error: AxiosError<Error>) => console.log(error));

    console.log(data);
    // this.setToken(data);

  }
}

export const userApi = new UserApi(apiConfig);
