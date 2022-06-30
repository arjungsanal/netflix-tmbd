import React, { useEffect, useState } from 'react'
import './Banner.css';
import axios from '../../axios';
import {apiKey , imgUrl} from '../../constants/constants'
function Banner() {
 const [movie, setMovie] = useState()

    useEffect(() => {
    axios.get(`trending/all/week?api_key=${apiKey}&language=en-US`).then((response)=>{
        const randomShow = Math.floor((Math.random() * 19) + 0);
        // console.log(response.data.results[randomShow])
        setMovie(response.data.results[randomShow])
    })
    }, [])
    
    return (
        <div 
         className='banner' style={{backgroundImage:`url(${movie ? imgUrl+movie.backdrop_path : ''})`}}>
            <div className='content' >
                <h1 className='title'>{movie ? movie.title || movie.name : ''}</h1>
                <div className='banner_buttons' >
                    <button className='button' >Play</button>
                    <button className='button' >My list</button>
                </div>
                <h1 className='description'>{movie ? movie.overview : ''}</h1>
            </div>
        <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner