import { GetServerSideProps } from 'next';
import { Product as ProductType } from '../../types/ProductType';
import Product from '@/components/Product';


type ProductDetailProps = {
    product : ProductType ;
}


const ProductDetail = ({ product }: ProductDetailProps) => {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="max-w-sm w-full border p-6 rounded-lg shadow-lg bg-white">
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            rating={product.rating}
            description={product.description.slice(0,400)}
            showDetailsLink= {false}
          />
        </div>
      </div>
    );
  };
  

export const getServerSideProps:GetServerSideProps = async ({params}) => {

    const {id} = params as {id:string};

    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product:ProductType = await res.json();

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