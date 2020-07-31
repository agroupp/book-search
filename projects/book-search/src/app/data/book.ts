export interface BookVolumeInfo {
  title: string;
  subtitle: string;
  authors: string[];
  description: string;
  publishedDate: string;
  pageCount: number;
  imageLinks: {
    smallThumbnail: string;
    thumbnail: string;
  };
  language: string;
  previewLink: string;
  infoLink: string;
  canonicalVolumeLink: string;
}

export interface Book {
  id: string;
  selfLink: string;
  volumeInfo: BookVolumeInfo;
  searchInfo: {
    textSnippet: string;
  };
}
