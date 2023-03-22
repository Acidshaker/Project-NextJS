import { useRouter } from 'next/router';
import { Layout } from '../../components/layout/Layout';
import { NextPageWithLayout } from '../page';

const ArtistId: NextPageWithLayout = () => {
  const router = useRouter();
  const { artist_id } = router.query;
  return <h1>Soy la ruta del artista {artist_id}</h1>;
};

export default ArtistId;

ArtistId.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
