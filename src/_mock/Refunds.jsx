import axios from "axios";

const refundURL = 'http://localhost:8080/payments/getPayment/refund'
export const fetchRefunds = async () => {
    try {
        const res = await axios.get(refundURL);
        return res.data;
    } catch (error) {
        console.error('Error fetching refund data:', error);
        return [];
    }
}

export const getRefunds = (refundData) => {
    return refundData.map( refund => ({
        id: refund.ticketId,
        orderNum: refund.orderNum,
        userName: refund.userName,
        totalAmount: refund.totalAmount,
        bonus: refund.bonus,
        payway: refund.payway,
        payStatus: refund.payStatus,
    }))
}