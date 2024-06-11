import { Helmet } from 'react-helmet-async';

import { MoviesView } from 'src/sections/movies/view';

// ----------------------------------------------------------------------

export default function MoviesPage() {
  return (
    <>
      <Helmet>
        <title> Movies | Minimal UI </title>
      </Helmet>

      <MoviesView />
    </>
  );
}
