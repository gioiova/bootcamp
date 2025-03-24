import { GetServerSideProps } from "next";
import ProductList from "@/components/ProductList";
import { Product as ProductType} from "@/types/ProductType";
import { fetchProducts } from "@/services/api";

type HomeProps = {
  topRatedProducts: ProductType[];
};

const Home = ({ topRatedProducts }: HomeProps) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Top 5 Best Rated Products</h1>
      <ProductList products={topRatedProducts} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const products = await fetchProducts();

  const topRatedProducts = products.sort((a:any,b:any) => b.rating.rate - a.rating.rate).slice(0,5);


  
  return {
    props: { topRatedProducts },
  };
};

export default Home;
