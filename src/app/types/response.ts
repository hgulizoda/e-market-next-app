import Product from "./product";

interface ProductsData {
  data: {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
  };
  status: number;
}

export default ProductsData;
