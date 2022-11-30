import { useContext } from "react";

import { ProductsContext } from "../../components/contexts/products.context";

import ProductCard from "../../components/product-card/product-card.component";

import './shop.styles.scss';

const Shop = () => {
  const { products } = useContext(ProductsContext)
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard id={product.id} products={product}></ProductCard>
      ))}
    </div>
  );
};


export default Shop;