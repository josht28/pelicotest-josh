import { Link, useParams } from "react-router-dom";
import { Product } from '../types'
import { cartContext } from '../context';
import { useContext } from "react";
type PropType = {
  productLists: Product[];
};
export default function ProductDetail({productLists}:PropType) {
  const { productId } = useParams();
  const product = productLists.find((product) => product.id === Number(productId))
  const { addProduct } = useContext(cartContext);
  const handleClick = () => {
    if (product) {
      addProduct(product);
    }
  }
  return (
    <>
      {product && <h1>{product.title}</h1>}
      <button onClick={handleClick}>Add to cart</button>
    </>
  );
}
