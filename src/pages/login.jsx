import React, {useState} from 'react'
import axios from 'axios'
import './loginpage.css'

const loginURL = 'http://localhost:8080/login';
const LgoinPage = () => {
  const[account, setAccount] = useState('')
  const[passwd, setPasswd] = useState('')

  const handleAccountChange = (e) => {
    setAccount(e.target.value)
  }
  const handlePasswdChange = (e) => {
    setPasswd(e.target.value)
  }

  // email:資料表欄位名稱 <= email:前端變數名稱
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('account', account);
    formData.append('passwd', passwd);

    // Java => 挑到的圖片轉成文字 data uri => base64 => 檔案大小加1/3
    // BLOB: Binary Large Object(長度: 255)
    // CLOB: Character Large Object => 存劇本、小說、留言、轉換成文字的圖片
    axios.post(loginURL, formData, {
      headers:{
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(function(response){
      console.log(response);
    })
    .catch(function(error){
      console.log(error);
    })
  }

  return (
    <section>
      <form method='post' className='login-box'>
        <h2 className='login-signin'>員工登入</h2>
        <div className='input-box'>
          <span className='icon'><ion-icon name="person"></ion-icon></span>
          <input type="text" value={account} onChange={handleAccountChange} required/>
          <label htmlFor="account">帳號</label>
        </div>

        <div className='input-box'>
          <span className='icon'><ion-icon name="lock-closed"></ion-icon></span>
          <input type="password" value={passwd} onChange={handlePasswdChange} required/>
          <label htmlFor="passwd">密碼</label>
        </div>

        <button className='login-btn' onClick={handleSubmit}>登入</button>

        <div className='register-link'>
          <p>尚未有權限？<a href="#">申請</a></p>
        </div>
      
      </form>
    </section>

    
    
  )
}

export default LgoinPage