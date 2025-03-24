import { GetServerSideProps } from 'next';
import { Product as ProductType } from '../../types/ProductType';
import Product from '@/components/Product';
import { fetchProductsById } from '@/services/api';


type ProductDetailProps = {
    product : ProductType ;
}


const ProductDetail = ({ product }: ProductDetailProps) => {
    if (!product) {
      return <div className="text-center py-10">Product not found</div>;
    }

    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="max-w-sm w-full border p-6 rounded-lg shadow-lg bg-white">
          <Product
            product={product}
            maxDescriptionLength={400}
            showDetailsLink={false}
          />
        </div>
      </div>
    );
  };
  

export const getServerSideProps:GetServerSideProps = async ({params}) => {

    const {id} = params as {id:string};

    const product = await fetchProductsById(id);

    if(!product) {
        return {
            notFound:true,
        };
    }


    return {
        props : {
            product,
        }
    }
}


export default ProductDetail;