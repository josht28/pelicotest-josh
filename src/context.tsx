import { createContext, ReactNode, useState } from 'react';
import { Product } from './types';
interface cartProduct extends Product {
  quantity: number;
}
type cartType = {
  products: cartProduct[];
  addProduct: (product: Product) => void;
  removeProduct: (id: number) => void;
};

export const cartContext = createContext<cartType>({
  products: [],
  addProduct: () => {},
  removeProduct: () => {},
});
export default function CartContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [products, setProducts] = useState<cartProduct[]>([]);
  const addProduct = (product: Product) => {
    const haveProduct = products.find(
      (items) => items.id === product.id
    )!== undefined;

    if (haveProduct) {
      setProducts((prevState) => {
        return prevState.map((item) => {
          if (item.id === product.id) {
            const newQuantity = item.quantity + 1;
            return { ...item, quantity: newQuantity };
          }
          return item;
        });
      });
    } else {
      setProducts((prevState) => {
        return [...prevState, { ...product, quantity: 1 }];
      });
    }
  };
  const removeProduct = (id: Product['id']) => {

    const updatedProducts = products.reduce<cartProduct[]>((prevValue,product) => {

      if (product.id === id && product.quantity > 1) {
          const newQuantity = product.quantity - 1;
          return [...prevValue, { ...product, quantity: newQuantity }];
      }
      if (product.id === id && product.quantity === 1) {
        return prevValue;
      }
      return [...prevValue, product];

    },[]);
    setProducts(updatedProducts);
  };
  const cart = { products, addProduct, removeProduct };
  return <cartContext.Provider value={cart}>{children}</cartContext.Provider>;
}
