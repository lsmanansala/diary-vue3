export default {};

export interface Diary {
  id: string | number;
  userId: string | number;
  title: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Entry {
  id: string | number;
  diaryId: string | number;
  title: string;
  text: string;
  createdAt: string;
}

export interface EntityGetList {
  diaryId?: number | string;
  userId?: number | string;
}