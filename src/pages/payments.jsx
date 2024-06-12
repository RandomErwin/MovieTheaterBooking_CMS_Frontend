import { Helmet } from 'react-helmet-async';

import { PaymentsView } from 'src/sections/payments/view';

// ----------------------------------------------------------------------

export default function PaymentsPage() {
  return (
    <>
      <Helmet>
        <title> 購買記錄 | Minimal UI </title>
      </Helmet>

      <PaymentsView />
    </>
  );
}
