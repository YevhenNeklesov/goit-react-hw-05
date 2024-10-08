import { fetchMovieCredits } from "../../services/TMDB-api"
import { useParams } from "react-router-dom"
import s from './MovieCast.module.css'
import { useHttp } from "../Hooks/useHttp"
import Loader from "../Loader/Loader"
import ErrorMessage from "../ErrorMessage/ErrorMessage"


const MovieCast = () => {

  const { movieId } = useParams()
  const { data, isLoading, isError } = useHttp(fetchMovieCredits, movieId)

  return (
      <ul className={s.list}>
        {data && data.cast.map(castName => (
          <li className={s.item} key={castName.id}>
            <img
              className={s.img}
              src={`https://image.tmdb.org/t/p/w200${castName.profile_path}`}
              alt={`${castName.original_name} img`} />
            <h3 className={s.name}>{castName.name}</h3>
            <p>Character: {castName.character}</p>
          </li>
        ))}
        {isLoading && <Loader />}
        {isError && <ErrorMessage/>}
      </ul>
  )
}

export default MovieCast