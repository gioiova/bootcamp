import { GetServerSideProps } from "next";
import ProductList from "@/components/ProductList";
import { Product as ProductType } from "@/types/ProductType";
import { fetchProducts } from "@/services/api";

type ProductsPageProps = {
  products: ProductType[];
};


const ProductsPage = ({products}:ProductsPageProps) => {
    return(
        <div className='container mx-auto p-4'>
      <h1 className="text-2xl font-bold mb-4">All Products</h1>
      <ProductList products={products} />
      </div>
    )
}


export const getServerSideProps:GetServerSideProps = async () => {
    
    const products = await fetchProducts();

    return{
        props:{products},
    }
}

export default ProductsPage;