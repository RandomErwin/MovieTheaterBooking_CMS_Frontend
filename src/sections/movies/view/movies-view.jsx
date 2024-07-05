import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Iconify from 'src/components/iconify';
import NewMovies from '../NewMovies';
import MovieSearch from '../MovieSearch';
import MovieLayout from '../movieLayout';


export default function MoviesView() {
  const[listShow, setListShow] = useState(false);

  // 新增電影按鈕在此層
  const handleOpen = () => {
    setListShow(true);
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
      
      {listShow && (
        <NewMovies 
          show= {listShow}
          onHide={() => setListShow(false)}
          state="showing" 
        />
      )}

      <MovieSearch />
      
      <MovieLayout />

    </Container>
  );
}
