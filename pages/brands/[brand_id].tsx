import { useRouter } from 'next/router';
import { Layout } from '../../components/layout/Layout';
import { NextPageWithLayout } from '../page';

const BrandId: NextPageWithLayout = () => {
  const router = useRouter();
  const { brand_id } = router.query;

  return <h1> Soy la ruta de la marca: {brand_id} </h1>;
};

export default BrandId;

BrandId.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
