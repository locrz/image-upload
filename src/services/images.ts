import { api } from './api';
import { IApiResponse } from './types';

export const fetchAllImages = async ({
  pageParam,
}: any): Promise<IApiResponse> => {
  const response = await api.get<IApiResponse>(
    `/api/images?after=${pageParam ?? 0}`
  );

  const images = response.data;

  console.log(images);
  return images;
};

export const createImage = (image: {
  url: string;
  title: string;
  description: string;
}): Promise<any> => {
  return api.post('/api/images', image);
};
