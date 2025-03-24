export async function fetchProducts () {
    try{
        const res = await fetch("https://fakestoreapi.com/products");
        const products = await res.json();
        return products;
    }catch(error) {
        console.error("Error fetching products:", error);
        return [];
    }
}

export async function fetchProductsById(id : string) {
    try {

        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const product = await res.json();
        return product;

    }catch(error) {
        console.error(`Error fetching product ${id}:`, error);
        return null;
    }
    
}