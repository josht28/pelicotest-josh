import { Link } from 'react-router-dom';
import { Product } from '../types';
import { Stack, Box } from '@mui/material';

type PropType = {
  productLists: Product[];
};
export default function ProductList({ productLists }: PropType) {
  return (
    <>
      {productLists.map((product) => {
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
                <div style={{ padding: '20px' }}>{product.title}</div>
              </Stack>
              <Box sx={{ padding: '10px' }}>
                <Link to={`/product/${product.id}`}> details</Link>
              </Box>
            </Box>
          </>
        );
      })}
    </>
  );
}
