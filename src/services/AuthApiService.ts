import ApiService from "./base/ApiService";
import TokenService from './TokenService'
import { ApiServiceConstructorParams } from "../interfaces/services/api-service-constructor.interface";

export default class DiaryApiService extends ApiService {
  private prefix?: string;

  constructor(params?: ApiServiceConstructorParams) {
    super({
      baseURL: import.meta.env.VITE_DIARY_API,
    });
    this.prefix = params?.prefix || "";
  }

  async logIn(data: {email: string, password: string}){
    const resp = await super.request({
      url: `${import.meta.env.VITE_DIARY_API}/auth/signin`,
      method: 'POST',
      data: data,
    });
    const tokenService = new TokenService();
    const accessToken = resp.data.access_token
    
    if (!accessToken) 
      return false
    
    tokenService.setJwtToken(accessToken);
    return true
  }
}