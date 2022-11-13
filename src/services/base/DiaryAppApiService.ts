import { ApiServiceConstructorParams } from "../../interfaces/services";
import { EntityGetList } from "../../interfaces/diary.interface";
import { EntryDto } from "../../interfaces/dto/entry.dto"
import ApiService from "./ApiService";
import TokenService from "../TokenService";

export default abstract class DiaryAppApiService<Entity> extends ApiService {
  private prefix?: string;
  private authToken: string;
  constructor(params?: ApiServiceConstructorParams) {
    super({
      baseURL: import.meta.env.VITE_DIARY_API,
    });
    this.prefix = params?.prefix || "";
    this.authToken = new TokenService().getJwtToken();
  }

  async getList(opts: EntityGetList = {}): Promise<Entity[]> {
    const { diaryId } = opts;
    const { data } = await super.request({
      url: diaryId ? `${this.prefix}/${diaryId}/entries` : this.prefix,
      method: "GET",
      headers: {
        Authorization: this.authToken,
      },
    });
    return data;
  }

  async getItem(id: number): Promise<Entity> {
    const { data } = await super.request({
      url: `${this.prefix}/${id}`,
      method: "GET",
      headers: {
        Authorization: this.authToken,
      },
    });
    return data;
  }

  async saveItem(payload: EntryDto): Promise<Entity> {
    const { diaryId } = payload;
    console.log(payload)
    const { data } = await super.request({
      url: `${this.prefix}/${diaryId}/entries`,
      method: "POST",
      headers: {
        Authorization: this.authToken,
        "Content-Type": "application/json",
      },
      data: payload
    });

    console.log(data)
    return data;
  }
}
