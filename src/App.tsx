import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import { useEffect,useState } from 'react';
import { getAllProducts } from './ApiStore/FakestoreApi';
import { Product } from './types';
function App() {
  const [productLists, setProductLists] = useState<Product[]>([])
  useEffect(() => {
    getAllProducts()
      .then((result) => {
        const productList = result;
        setProductLists(productList);
      });

  },[])
  return (
    <>
      <h1>my shopping list</h1>
      <div>
        <Link to='/'>Product Lists</Link>
        <Link to='/cart'>Cart</Link>
      </div>
      <Routes>
        <Route path='/' element={<ProductList productLists ={productLists} />} />
        <Route path='/product/:productId' element={<ProductDetail productLists={productLists} />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
