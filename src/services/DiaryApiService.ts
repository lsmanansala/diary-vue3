import ApiService from "./base/ApiService";
import TokenService from './TokenService';
import { ApiServiceConstructorParams } from "../interfaces/services/api-service-constructor.interface";


export default class DiaryApiService extends ApiService {
  private prefix?: string;

  constructor(params?: ApiServiceConstructorParams) {
    super({
      baseURL: import.meta.env.VITE_DIARY_AP,
    });
    this.prefix = params?.prefix || "";
  } 

  async getDiaries(): Promise<[]> {
    const authToken = new TokenService().getJwtToken()
    const resp = await super.request({
      url: `${import.meta.env.VITE_DIARY_API}/diaries`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    return resp?.data
  }
}
