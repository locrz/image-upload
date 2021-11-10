export interface IImage {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

export interface IApiResponse {
  data: IImage[];
  after: string | null;
}

export interface IUseImages {
  formattedData: IImage[];
  isImagesLoading: boolean;
  isError: boolean;
  isFetchingNextPage: boolean;
  fetchNextImagesPage: () => void;
  hasMoreImages: boolean;
}
