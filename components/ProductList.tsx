import Product from "./Product";

import { Product as ProductType } from '../types/ProductType';


type ProductListProps = {
    products : ProductType[];
};


const ProductList = ({ products }: ProductListProps) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => {

        return (
          <Product
            key={product.id}
            product={product}
            showDetailsLink ={true}
           
          />

          
        )})}
      </div>
    );
  };
  
  export default ProductList;