import axios from "axios"

const bonusURL = 'http://localhost:8080/bonus/getBonus'
export const fetchBonus = async () => {
    try {
        const res = await axios.get(bonusURL);
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.error('Wrong fetching bonus data', error);
        return [];
    }
}

export const getBonus = (bonusData) => {
    return bonusData.map(bonus => ({
        orderNum: bonus.orderNum,
        userName: bonus.userName,
        bonus: bonus.bonus,
        modifyTime: bonus.modifyTime,
    }))
}