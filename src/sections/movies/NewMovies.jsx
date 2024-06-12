import { useState } from 'react'
import classes from './NewMovies.module.css'
import axios from 'axios';

function NewMovies({handleClose}){

    const [title, setTitle] = useState('');
    const [rating, setRating] = useState('');
    const [runtime, setRuntime] = useState('');
    const [genre, setGenre] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [director, setDirector] = useState('');
    const [synopsis, setSynopsis] = useState('');
    const [language, setLanguage] = useState('');
    const [trailer, setTrailer] = useState('');
    const [postUrl, setPostUrl] = useState('');

    function titleChangeHandler(e){
        setTitle(e.target.value);
    }
    function ratingChangeHandler(e){
        setRating(e.target.value);
    }
    function runtimeChangeHandler(e){
        setRuntime(e.target.value);
    }
    function genreChangeHandler(e){
        setGenre(e.target.value);
    }
    function releaseDateChangeHandler(e){
        setReleaseDate(e.target.value);
    }
    function directorChangeHandler(e){
        setDirector(e.target.value);
    }
    function synopsisChangeHandler(e){
        setSynopsis(e.target.value);
    }
    function languageChangeHandler(e){
        setLanguage(e.target.value);
    }
    function trailerChangeHandler(e){
        setTrailer(e.target.value);
    }
    function postUrlChangeHandler(e){
        const file = e.target.files[0]
        getBase64(file);
    }

    const onLoad = fileString => {
        console.log(fileString);
        setPostUrl(fileString)
    }
    // 上傳圖片前預覽: 透過 FileReader 或者 createObjectURL，讓瀏覽器自己生成顯示媒體的網址。
    const getBase64 = file =>{
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            onLoad(reader.result);
        }
        reader.onerror = error => console.log('Error', error);
    }

    const postURL = 'http://localhost:8080/movie/createMovie';
    async function submitHandler(e) {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append('title', title);
        formData.append('rating', rating);
        formData.append('runtime', runtime);
        formData.append('genre', genre);
        formData.append('releaseDate', releaseDate);
        formData.append('director', director);
        formData.append('synopsis', synopsis);
        formData.append('language', language);
        formData.append('trailer', trailer);
        formData.append('postUrl', postUrl);
        
        try {
            const response = await axios.post(postURL, formData);
            console.log(response);
            handleClose(); 
        } catch (error) {
            console.log(error);
        }

        // try {
        //     const response = await fetch(postURL, {
        //         method: 'POST', 
        //         body: JSON.stringify({
        //             "title": "1",
        //             "rating": "1",
        //             "runtime": "14:20",
        //             "genre": "720",
        //             "releaseDate": "2024-06-17",
        //             "director": "1",
        //             "synopsis": "1",
        //             "language": "1",
        //             "trailer": "1",
        //             "postUrl": "1"
        //         })
        //     })
        //     const data = await response.json();
        //     console.log(data);
        // } catch (error) {
        //     console.error('發生錯誤', error);
        // }
    }

    return(
        <form className={classes.form} onSubmit={submitHandler}>
            <p>
                <label htmlFor="title">電影名稱</label>
                <input type="text" onChange={titleChangeHandler} required/>
            </p>
            <p>
                <label htmlFor="rating">電影級別</label>
                <select onChange={ratingChangeHandler} required>
                    <option value="">選擇級別</option>
                    <option value="general">普通級</option>
                    <option value="protected">保護級</option>
                    <option value="pg12">輔12級</option>
                    <option value="pg15">輔15級</option>
                    <option value="restricted">限制級</option>
                </select>
            </p>
            <p>
                <label htmlFor="runtime">影片長度</label>
                <input type="text" onChange={runtimeChangeHandler} required/>
            </p>
            <p>
                <label htmlFor="genre">影片類型</label>
                <select onChange={genreChangeHandler} required>
                    <option value="">選擇類型</option>
                    <option value="action">動作片</option>
                    <option value="adventure">冒險片</option>
                    <option value="animation">動畫片</option>
                    <option value="comedy">喜劇片</option>
                    <option value="crime">犯罪片</option>
                    <option value="drama">戲劇片</option>
                    <option value="fantasy">奇幻故事片</option>
                    <option value="historical">歷史片</option>
                    <option value="horror">恐怖片</option>
                    <option value="mystery">懸疑片</option>
                    <option value="philosophical">哲學片</option>
                    <option value="political">政治片</option>
                    <option value="romance">愛情片</option>
                    <option value="science-fiction">科幻片</option>
                    <option value="thriller">驚悚片</option>
                </select>
            </p>
            <p>
                <label htmlFor="releaseDate">上映日期</label>
                <input type="date" onChange={releaseDateChangeHandler} required/>
            </p>
            <p>
                <label htmlFor="director">導演</label>
                <input type="text" onChange={directorChangeHandler} required/>
            </p>
            <p>
                <label htmlFor="synopsis">簡介</label>
                <input type="textarea" onChange={synopsisChangeHandler} required/>
            </p>
            <p>
                <label htmlFor="language">語言</label>
                <select onChange={languageChangeHandler} required>
                    <option value="">選擇語言</option>
                    <option value="chinese">中文</option>
                    <option value="english">英文</option>
                    <option value="japanese">日文</option>
                </select>
            </p>
            <p>
                <label htmlFor="trailer">預告片</label>
                <input type="file" name="trailer" id='trailer' onChange={trailerChangeHandler}/>
            </p>
            <p>
                <label htmlFor="postUrl">劇照</label>
                <input type="file" name="postUrl" id='postUrl' onChange={postUrlChangeHandler} required/>
            </p>
            <p className={classes.actions}>
                <button type='button' onClick={handleClose}>取消</button>
                <button type='submit'>確認新增</button>
            </p>
        </form>
    )
}

export default NewMovies