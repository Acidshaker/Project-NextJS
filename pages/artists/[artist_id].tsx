import { useRouter } from 'next/router';
import { Layout } from '../../components/layout/Layout';

const ArtistId = () => {
  const router = useRouter();
  const { artist_id } = router.query;

  return <Layout> Soy la ruta del artista {artist_id} </Layout>;
};

export default ArtistId;
