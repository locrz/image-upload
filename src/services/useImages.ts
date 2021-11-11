import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';
import { fetchAllImages } from './images';
import { IUseImages } from './types';

export function useImages(): IUseImages {
  const {
    data,
    isLoading: isImagesLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage: fetchNextImagesPage,
    hasNextPage: hasMoreImages,
  } = useInfiniteQuery('images', fetchAllImages, {
    getNextPageParam: (lastPage, _) => {
      return lastPage?.after ?? null;
    },
  });

  const formattedData = useMemo(() => {
    if (!data) return [];
    return data.pages.flatMap(page => page.data);
  }, [data]);

  return {
    formattedData,
    isImagesLoading,
    isError,
    isFetchingNextPage,
    fetchNextImagesPage,
    hasMoreImages,
  };
}
