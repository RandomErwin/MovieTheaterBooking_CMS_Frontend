import axios from "axios";

const paymentURL = 'http://localhost:8080/payments/getPayment/payment'
export const fetchPayments = async () => {
    try {
       const res = await axios.get(paymentURL);
    //    console.log(res.data);
       return res.data;
    } catch (error) {
        console.error('Error fetching payment data:', error);
        return [];
    }
}

// paymentData => Array(n)
// 取得每一筆資料，並且放入對應的變數(欄位)
export const getPayments = (paymentData) => {
    return paymentData.map( payment => ({
        id: payment.ticketId,
        orderNum: payment.orderNum,
        userName: payment.userName,
        totalAmount: payment.totalAmount,
        bonus: payment.bonus,
        payway: payment.payway,
        payStatus: payment.payStatus,
    }))
}