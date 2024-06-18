import axios from "axios";

// 此處為 utils 工具庫
// 抓取DB資料的 function
export const fetchUsers = async () => {
  try{
    const res = await axios.get('http://localhost:8080/user/getAll');
    return res.data.data;
  }catch(error){
    console.error('Error fetching user data:', error);
    return[];
  }
};

// 待程式被呼叫將userData資料傳入 => 對抓取的資料做映射處理
export const getUsers = (userData) => {
  return userData.map(user => ({
    id: user.usersId,
    nickName: user.nickName,
    account: user.account,
    birthday: user.birthday,
    phone: user.phone,
    email: user.email,
    gender: user.gender,
  }));
};
    

