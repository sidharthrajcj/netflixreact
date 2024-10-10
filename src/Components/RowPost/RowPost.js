import React,{useEffect,useState}from 'react'
import Youtube from 'react-youtube'
import './RowPost.css'
import { API_KEY, ImageUrl} from '../../Constants/constants'
import axios from '../../axios'
function RowPost(props) {
  const[movie,setMovies]=useState([])
  const [urlId,setUrlId]=useState('')
  useEffect(()=>{
    axios.get(props.url).then(response=>{
      console.log(response.data)
      setMovies(response.data.results)
    }).catch(err=>{
      
    })
  },[])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie=(id)=>{
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
     if(response.data.results.length!==0){
      setUrlId(response.data.results[0])
     }else{
      console.log("trailer not available")
     }
    })

  }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
        {movie.map((obj)=>
          <img onClick={()=>handleMovie(obj.id)} className={props.isSmall?'smallPosters':'poster'} alt="poster" src={`${ImageUrl+obj.backdrop_path}`} />

        )}
       
        </div>
        { urlId&&<Youtube opts={opts} videoId={urlId.key} />}
    </div>
  )
}

export default RowPost