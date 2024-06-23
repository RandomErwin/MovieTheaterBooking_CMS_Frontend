import axios from 'axios';

const bonusURL = 'http://localhost:8080/bonus-records';
export const fetchBonus = async () => {
  try {
    const res = await axios.get(bonusURL);
    return res.data;
  } catch (error) {
    console.error('Error fetching bonus data:', error);
    return [];
  }
};

export const getBonus = (bonusData) => {
  return bonusData.map((bonus) => ({
    orderNum: bonus.orderNum,
    account: bonus.account,
    totalAmount: bonus.totalAmount,
    bonus: bonus.bonus,
    payway: bonus.payway,
    payStatus: bonus.payStatus,
  }));
};
