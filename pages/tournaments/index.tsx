import Image from 'next/image';
import Link from 'next/link';
import { Layout } from '../../components/layout/Layout';
import { NextPageWithLayout } from '../page';

const tournaments = [
  {
    tournamentId: 1,
  },
  {
    tournamentId: 2,
  },
  {
    tournamentId: 3,
  },
  {
    tournamentId: 4,
  },
  {
    tournamentId: 5,
  },
];

const Tournaments: NextPageWithLayout = () => {
  return (
    <>
      <Image
        src={'/tournaments.png'}
        width={600}
        height={200}
        alt="Imagen decorativa"
      ></Image>
      <h1>Hola soy la ruta de eventos</h1>
      <div>
        {tournaments.map((tournament) => (
          <p key={tournament.tournamentId}>
            <Link href={`/tournaments/${tournament.tournamentId}`}>
              {' '}
              Evento: {tournament.tournamentId}
            </Link>
          </p>
        ))}
      </div>
    </>
  );
};

export default Tournaments;

Tournaments.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
