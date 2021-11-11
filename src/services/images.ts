import { api } from './api';
import { IApiResponse } from './types';

interface IFetchAllImages {
  pageParam?: number | null;
}

export const fetchAllImages = async ({
  pageParam,
}: IFetchAllImages): Promise<IApiResponse> => {
  const response = await api.get<IApiResponse>(`/api/images`, {
    params: { after: pageParam ?? 0 },
  });
  return response.data;
};

export const createImage = (image: {
  url: string;
  title: string;
  description: string;
}): Promise<any> => {
  return api.post('/api/images', image);
};
