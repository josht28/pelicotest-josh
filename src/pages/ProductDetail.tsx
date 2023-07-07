import { useParams } from 'react-router-dom';
import { Product } from '../types';
import { cartContext } from '../context';
import { useContext } from 'react';
import { Box, Stack, Button } from '@mui/material';
type PropType = {
  productLists: Product[];
};
export default function ProductDetail({ productLists }: PropType) {
  const { productId } = useParams();
  const product = productLists.find(
    (product) => product.id === Number(productId)
  );
  const { addProduct } = useContext(cartContext);
  const handleClick = () => {
    if (product) {
      addProduct(product);
    }
  };
  return (
    <>
      {product && (
        <Box
          sx={{
            borderRadius: '10px',
            boxShadow: 5,
            maxWidth: '450px',
            margin: '20px 10px',
          }}
        >
          <Stack direction='row'>
            <Box sx={{ margin: '10px' }}>
              <img
                src={product.image}
                alt=''
                width='100px'
                height='100px'
              ></img>
            </Box>
            <Box style={{ padding: '20px' }}>
              <div style={{ marginBottom: '10px' }}>{product.title}</div>
              <div>{product.description}</div>
            </Box>
          </Stack>
          <Box sx={{ padding: '10px' }}>
            <Button variant='contained' color='success' onClick={handleClick}>
              Add to cart
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
}
