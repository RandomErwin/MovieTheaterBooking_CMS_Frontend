import React, { useEffect, useState } from 'react'
import MovieCardSearch from './MovieCardSearch'
import './Movies.css'

const COMING_URL = 'http://localhost:8080/movie/getMovie/isComing'
const RELEASE_URL = 'http://localhost:8080/movie/getMovie/isPlaying'

const MovieSearch = () => {
    const [moviesComing, setMoviesComing] = useState([]);
    const [moviesRelease, setMoviesRelease] = useState([]);
    const [showComingSoon, setShowComingSoon] = useState(true);

    // try catch when fetching data
    const searchMovies = async () => {
        try {
            const res = await fetch(COMING_URL);
            const dataComing = await res.json();

            // 使用 Array.isArray檢查API返回的數據是否為陣列，否則設置為空陣列
            setMoviesComing(Array.isArray(dataComing.data) ? dataComing.data : []);

            const response = await fetch(RELEASE_URL);
            const dataRelease = await response.json();

            setMoviesRelease(Array.isArray(dataRelease.data) ? dataRelease.data: []);

        } catch (error) {
            console.error("Error fetching movies", error);
            setMoviesComing([]);
            setMoviesRelease([]);
        }
    }
    useEffect(() => {
        searchMovies();
    }, [])

    return (
        <div className='app'>
            <div onClick={() => setShowComingSoon(!showComingSoon)}>
                <h3>{showComingSoon ? '即將上映' : '上映中'}</h3>
            </div>
            {showComingSoon ? (
                // 通常是某些屬性 undefined 或 null => 導致訪問 length 時發生錯誤
                moviesComing.length > 0 ?
                (
                    <div className='container'>
                        {
                            moviesComing.map((movie, index) => (
                                <MovieCardSearch key={index} movie={movie} />
                            ))
                        }

                    </div>
                ) : (
                    <div className='empty'>
                        <h2>No movie found</h2>
                    </div>
                )
            ) : (
                moviesRelease.length > 0 ?
                (
                    <div className='container'>
                        {
                            moviesRelease.map((movie, index) => (
                                <MovieCardSearch key={index} movie={movie} />
                            ))
                        }

                    </div>
                ) : (
                    <div className='empty'>
                        <h2>No movie found</h2>
                    </div>
                )
            )}
        </div>
    )
}

export default MovieSearch