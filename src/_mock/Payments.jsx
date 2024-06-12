import axios from "axios";

const paymentURL = 'http://localhost:8080/payments/getAll'
export const fetchPayments = async () => {
    try {
       const res = await axios.get(paymentURL);
       return res.data.data;
    } catch (error) {
        console.error('Error fetching payment data:', error);
        return [];
    }
}

// paymentData => Array(n)
// 取得美以筆資料，並且放入對應的變數(欄位)
export const getPayments = (paymentData) => {
    return paymentData.map( payment => ({
        paymentId: payment.payment,
        orderNum: payment.orders.orderNum,
        payway: payment.payway,
        payStatus: payment.payStatus,
        payTime: payment.payTime,
        method: payment.method,
        modifyTime: payment.modifyTime,
    }))
}