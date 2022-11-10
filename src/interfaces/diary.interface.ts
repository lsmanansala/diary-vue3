export default {};

export interface Diary {
  id: string | number;
  userId: string | number;
  title: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}
