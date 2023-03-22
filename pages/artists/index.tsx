import Image from 'next/image';
import Link from 'next/link';
import { Layout } from '../../components/layout/Layout';
import { NextPageWithLayout } from '../page';

const artists = [
  {
    artistId: 1,
  },
  {
    artistId: 2,
  },
  {
    artistId: 3,
  },
  {
    artistId: 4,
  },
  {
    artistId: 5,
  },
];

const Artists: NextPageWithLayout = () => {
  return (
    <>
      <Image
        src={'/artists.png'}
        width={600}
        height={200}
        alt="Imagen decorativa"
      ></Image>
      <h1>Hola soy la ruta artistas</h1>
      <div>
        {artists.map((artist) => (
          <p key={artist.artistId}>
            <Link href={`/artists/${artist.artistId}`}>
              {' '}
              Artista: {artist.artistId}
            </Link>
          </p>
        ))}
      </div>
    </>
  );
};

export default Artists;

Artists.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
