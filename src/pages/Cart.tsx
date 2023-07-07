import { useContext } from "react";
import { cartContext } from "../context";
export default function ProductList() {
  const { products, removeProduct } = useContext(cartContext);

  return (
    <>
      {products.map((product)=>{
        return (
          <>
            <div>{product.title}</div>
            <div>{product.quantity}</div>
            <button onClick={() => {
              removeProduct(product.id)
            }}>Delete</button>

          </>
        );


    })}
    </>
  );
}
