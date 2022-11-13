import { EntityGetList, Entry } from "../interfaces/diary.interface";
import { EntryDto } from "../interfaces/dto/entry.dto";
import DiaryAppApiService from "./base/DiaryAppApiService";

export default class DiaryEntriesApiService extends DiaryAppApiService<Entry> {
  constructor() {
    super({
      prefix: "/diaries",
    });
  }

  async getList(opts: EntityGetList): Promise<Entry[]> {
    // here goes data manipulation for Diary
    return await super.getList(opts);
  }

  async saveItem(payload: EntryDto): Promise<Entry> {
    return await super.saveItem(payload);
  }
}