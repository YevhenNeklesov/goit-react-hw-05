import { useEffect, useState } from "react"
import { fetchMovieCredits } from "../../services/TMDB-api"
import { useParams } from "react-router-dom"
import s from './MovieCast.module.css'


const MovieCast = () => {

  const {movieId} = useParams()
      const [cast, setCast] = useState(null)
    useEffect(() => {
        const getAllCast = async () => {
            const data = await fetchMovieCredits(movieId)
            setCast(data)
        }
        getAllCast()
    }, [movieId])
  
      if (!cast) return <p>Loading</p>
  return (
    <div>
      <ul className={s.list}>
        {cast.cast.map(castName => (
          <li className={s.item} key={castName.id}>
            <img
              className={s.img}
              src={`https://image.tmdb.org/t/p/w200${castName.profile_path}`}
              alt={`Foto ${castName.original_name}`} />
            <p className={s.name}>{castName.name}</p>
            <p>Character: {castName.character}</p>
          </li>
        ))}
      </ul>
    
    </div>
  )
}

export default MovieCast