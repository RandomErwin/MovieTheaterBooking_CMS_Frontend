import axios from 'axios';

const paymentURL = 'http://localhost:8080/payment-records';
export const fetchPayments = async () => {
  try {
    const res = await axios.get(paymentURL);
    return res.data;
  } catch (error) {
    console.error('Error fetching payment data:', error);
    return [];
  }
};

export const getPayments = (paymentData) => {
  return paymentData.map((payment) => ({
    orderNum: payment.orderNum,
    account: payment.account,
    totalAmount: payment.totalAmount,
    bonus: payment.bonus,
    payway: payment.payway,
    payStatus: payment.payStatus,
    showTime: payment.showTime,
    refunded: payment.refunded,
  }));
};
