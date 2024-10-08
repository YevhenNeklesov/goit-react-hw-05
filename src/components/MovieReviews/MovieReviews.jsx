
import { useParams } from "react-router-dom"
import { fetchMovieReviews } from "../../services/TMDB-api"
import s from './MovieReviews.module.css'
import { useHttp } from "../Hooks/useHttp"
import Loader from "../Loader/Loader"
import ErrorMessage from "../ErrorMessage/ErrorMessage"


const MovieReviews = () => {

  const {movieId} = useParams()
  const { data, isLoading, isError } = useHttp(fetchMovieReviews, movieId)
  
  
  return (
      <ul  className={s.list}>
      {data && (<>
        {data.results.length === 0 && <p>Sorry, this movie has no reviews</p>}
        {data.results.map(review => (
          <li className={s.item} key={review.id}>
            <h3 className={s.title}>{review.author}</h3>
            <p className={s.text}>{review.content}</p>
          </li>
        ))}
      </>)}
        {isLoading && <Loader />}
        {isError && <ErrorMessage/>}  
      </ul>
  )
}

export default MovieReviews