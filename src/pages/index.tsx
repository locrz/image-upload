import { Button, Box } from '@chakra-ui/react';

import { Header } from '../components/Header';
import { CardList } from '../components/CardList';

import { Loading } from '../components/Loading';
import { Error } from '../components/Error';
import { useImages } from '../services/useImages';

export default function Home(): JSX.Element {
  const {
    formattedData,
    isImagesLoading,
    isError,
    isFetchingNextPage,
    fetchNextImagesPage,
    hasMoreImages,
  } = useImages();

  if (isImagesLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <>
      <Header />

      <Box maxW={1120} px={20} mx="auto" my={20}>
        <CardList cards={formattedData} />
        {hasMoreImages && (
          <Button
            type="button"
            onClick={() => fetchNextImagesPage()}
            w="100%"
            py={6}
          >
            {isFetchingNextPage ? 'Carregando...' : 'Carregar mais'}
          </Button>
        )}
      </Box>
    </>
  );
}
