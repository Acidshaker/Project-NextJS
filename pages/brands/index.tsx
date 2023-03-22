import Image from 'next/image';
import Link from 'next/link';
import { Layout } from '../../components/layout/Layout';
import { NextPageWithLayout } from '../page';

const brands = [
  {
    brandId: 1,
  },
  {
    brandId: 2,
  },
  {
    brandId: 3,
  },
  {
    brandId: 4,
  },
  {
    brandId: 5,
  },
];

const Brands: NextPageWithLayout = () => {
  return (
    <>
      <Image
        src={'/brands.png'}
        width={600}
        height={200}
        alt="Imagen decorativa"
      ></Image>
      <h1>Hola soy la ruta marcas</h1>
      <div>
        {brands.map((brand) => (
          <p key={brand.brandId}>
            <Link href={`/brands/${brand.brandId}`}>
              {' '}
              Marca: {brand.brandId}
            </Link>
          </p>
        ))}
      </div>
    </>
  );
};

export default Brands;

Brands.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
