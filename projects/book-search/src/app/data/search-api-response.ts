import { Book } from './book';

export interface SearchApiResponse {
  kind: string;
  totalItems: number;
  items: Book[];
}
