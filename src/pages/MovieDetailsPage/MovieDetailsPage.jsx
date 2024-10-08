import { useRef} from "react"
import { Link, NavLink, Outlet, useLocation, useParams } from "react-router-dom"
import { fetchMovieById } from "../../services/TMDB-api"
import s from './MovieDetailsPage.module.css'
import { useHttp } from "../../components/Hooks/useHttp"
import MovieDetails from "../../components/MovieDetails/MovieDetails"
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage"
import Loader from "../../components/Loader/Loader"


const MovieDetailsPage = () => {

  const location = useLocation()
  const goBackRef = useRef(location.state ?? '/movies');
  console.log(location);
  const { movieId } = useParams()
  const { data, isLoading, isError } = useHttp(fetchMovieById, movieId)

  return (
    <div className={s.container}>
      <Link className={s.back} to={goBackRef.current}>Go back</Link>
      {data && (<>
        <MovieDetails movie={data} />
        <hr className={ s.hr} />
        <h3 className={s.additInfo}>Additional information</h3>
          <ul className={s.navLink}>
          <li >
                <NavLink className={s.link} to='cast'>Cast</NavLink>
            </li>
          <li>
                <NavLink className={s.link} to='reviews'>Reviews</NavLink>
            </li>
          </ul>
      <hr />
      <div>
        <Outlet/>
      </div>
      </>)}
      {isLoading && <Loader />}
      {isError && <ErrorMessage/>}
    </div>
  )
}

export default MovieDetailsPage