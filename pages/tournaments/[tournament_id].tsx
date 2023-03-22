import { useRouter } from 'next/router';
import { Layout } from '../../components/layout/Layout';
import { NextPageWithLayout } from '../page';

const TournamentId: NextPageWithLayout = () => {
  const router = useRouter();
  const { tournament_id } = router.query;

  return <h1> Soy la ruta del evento {tournament_id} </h1>;
};

export default TournamentId;

TournamentId.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
