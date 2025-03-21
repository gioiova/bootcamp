import { GetServerSideProps } from "next";
import ProductList from "@/components/ProductList";
import { Product } from "@/types/ProductType";

type HomeProps = {
  topRatedProducts: Product[];
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
  const res = await fetch("https://fakestoreapi.com/products");
  const products: Product[] = await res.json();

  const topRatedProducts = products
    .sort((a, b) => b.rating.rate - a.rating.rate) 
    .slice(0, 5); //

  return {
    props: { topRatedProducts },
  };
};

export default Home;
