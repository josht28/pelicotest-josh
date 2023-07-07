import { useContext } from 'react';
import { cartContext } from '../context';
import { Stack, Box, Button } from '@mui/material';
export default function ProductList() {
  const { products, removeProduct } = useContext(cartContext);
  return (
    <>
      {products.map((product) => {
        return (
          <>
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
                  <div style={{ paddingBottom: '10px' }}>{product.title}</div>
                  <div style={{ paddingBottom: '10px' }}>
                    {product.description}
                  </div>
                  <div> Quantity: {product.quantity}</div>
                </Box>
              </Stack>
              <Stack
                sx={{ padding: '10px' }}
                direction='row'
                justifyContent='flex-end'
              >
                <Button
                  variant='contained'
                  color='error'
                  onClick={() => {
                    removeProduct(product.id);
                  }}
                >
                  Delete
                </Button>
              </Stack>
            </Box>
          </>
        );
      })}
    </>
  );
}
