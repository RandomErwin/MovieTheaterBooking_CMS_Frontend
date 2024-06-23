import axios from 'axios';

const refundURL = 'http://localhost:8080/refund-records';
export const fetchRefunds = async () => {
  try {
    const res = await axios.get(refundURL);
    return res.data;
  } catch (error) {
    console.error('Error fetching refund data:', error);
    return [];
  }
};

export const getRefunds = (refundData) => {
  return refundData.map((refund) => ({
    orderNum: refund.orderNum,
    account: refund.account,
    totalAmount: refund.totalAmount,
    bonus: refund.bonus,
    payway: refund.payway,
    payStatus: refund.payStatus,
  }));
};
