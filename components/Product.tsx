import Link from 'next/link';
import Image from "next/image";
import {Product as  ProductType } from '../types/ProductType';

const Product = ({ id, title, price, image, rating,description,showDetailsLink }: ProductType) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <div className="relative w-[200px] h-[200px] mx-auto mb-4">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-contain rounded-md"
        />
      </div>
      <h2 className="text-lg font-semibold text-center">{title}</h2>
      <p className="text-md text-gray-800 text-center">${price}</p>
      <p className="text-sm text-gray-600 text-center">
        ⭐ {rating.rate} ({rating.count} reviews)
      </p>
      <p>{description}</p>
      {showDetailsLink && 
      <Link 
        href={`/products/${id}`} 
        className="text-blue-500 mt-2 block text-center"
      >
        View Details
      </Link>
        }
    </div>
  );
};

export default Product;
