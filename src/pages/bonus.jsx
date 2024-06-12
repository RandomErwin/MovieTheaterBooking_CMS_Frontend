import { Helmet } from 'react-helmet-async';

import { BonusView } from 'src/sections/bonus/view';

// ----------------------------------------------------------------------

export default function BonusPage() {
  return (
    <>
      <Helmet>
        <title> 紅利點數 | Minimal UI </title>
      </Helmet>

      <BonusView />
    </>
  );
}
