import React, { useEffect,useState } from 'react'
import './Banner.css'
import { API_KEY,ImageUrl } from '../../Constants/constants'
import axios from '../../axios'

function Banner() {
  const [movie,setMovie]=useState()
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[0])
      setMovie(response.data.results[16])
    })
  },[])
  return (
    <div
    style={{backgroundImage:`url(${movie?ImageUrl+movie.backdrop_path:""})`}}
    className='banner'>
        <div className='content'>
            <h1 className='title'>{movie?.title}</h1>
            <div className='banner_buttons'>
                <button className='button'>play</button>
                <button className='button'>my list</button>
            </div>
            <h1 className='description'>{movie?.overview}</h1>
        </div>
      <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
