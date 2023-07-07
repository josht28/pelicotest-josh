import { Link } from "react-router-dom";
import { Product } from "../types"

type PropType = {
  productLists: Product[];
}
export default function ProductList({ productLists }:PropType) {
  return <>

    {productLists.map((product) => {
      return <>

        <div style={{ padding: '20px' }}>{product.title}</div>
        <Link to={`/product/${product.id}`}> details</Link>
      </>
    })}

  </>
}