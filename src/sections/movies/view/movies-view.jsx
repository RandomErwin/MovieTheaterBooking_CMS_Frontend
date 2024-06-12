import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
// import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import {movies} from 'src/_mock/movies'
// import ProductCard from '../product-card';
import Iconify from 'src/components/iconify';
import NewMovies from '../NewMovies';
import MovieLayout from '../movieLayout';


// ----------------------------------------------------------------------

export default function MoviesView() {
  const [showList, setShowList] = useState(false);

  const handleOpen = () => {
    setShowList(true);
  }
  const handleClose = () => {
    setShowList(false);
  }

  return (
    <Container>

      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">院線更新</Typography>
        <Button variant="contained" color="inherit" 
                startIcon={<Iconify icon="eva:plus-fill" />} 
                onClick={handleOpen}>新增電影
        </Button>
      </Stack>
      
      {showList && (
        <NewMovies handleClose={handleClose}></NewMovies>
      )}

      <MovieLayout /> 

      {/* <Grid container spacing={3}>        
        {movies.map((product) => (
          <Grid key={product.id} xs={12} sm={6} md={3}>
            <ProductCard product={product} />
          </Grid>
        ))}

      </Grid> */}

    </Container>
  );
}
