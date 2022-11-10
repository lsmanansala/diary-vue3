import axios, {
  AxiosBasicCredentials,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
} from "axios";

interface ApiServiceInstanceParams {
  baseURL: string;
  headers?: AxiosRequestHeaders;
  auth?: AxiosBasicCredentials;
}

export default abstract class ApiService {
  private axiosInstance: AxiosInstance;
  constructor(apiServiceInstanceParams: ApiServiceInstanceParams) {
    this.axiosInstance = axios.create(apiServiceInstanceParams);
  }

  async request(axiosRequestProps: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.axiosInstance.request(axiosRequestProps);
  }
}
