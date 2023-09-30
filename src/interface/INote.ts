export interface INote {
  id: string;
  title: string;
  content: string;
  favorite: boolean;
  color: string;
  userId: string;
}
export interface ICreateNote {
  title: string;
  content: string;
  favorite: boolean;
  userId: string;
}