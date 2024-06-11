import { Helmet } from 'react-helmet-async';

import { OrderView } from 'src/sections/orders/view';

// ----------------------------------------------------------------------

export default function OrderPage() {
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      <OrderView />
    </>
  );
}
