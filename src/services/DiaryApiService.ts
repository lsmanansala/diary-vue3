import DiaryAppApiService from "./base/DiaryAppApiService";
import { Diary, EntityGetList } from "../interfaces/diary.interface";

export default class DiaryApiService extends DiaryAppApiService<Diary> {
  constructor() {
    super({
      prefix: "/diaries",
    });
  }

  async getList(opts: EntityGetList): Promise<Diary[]> {
    // here goes data manipulation for Diary
    return await super.getList(opts);
  }

  async getItem(id: number): Promise<Diary> {
    // here goes data manipulation for Diary
    return await super.getItem(id);
  }
}
