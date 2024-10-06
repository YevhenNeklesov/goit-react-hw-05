import { useEffect, useRef, useState } from "react"
import { Link, NavLink, Outlet, useLocation, useParams } from "react-router-dom"
import { fetchMovieById } from "../../services/TMDB-api"
import s from './MovieDetailsPage.module.css'


const MovieDetailsPage = () => {

  const location = useLocation()
  const goBackRef = useRef(location.state ?? '/users');
  console.log(location);
  const { movieId } = useParams()
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const data = await fetchMovieById(movieId)
      setMovie(data)
    }
    getData()
  }, [movieId])
  
  if (!movie) return <p>Loading</p>

  return (
    <div className={s.container}>
      <Link className={s.back} to={goBackRef.current}>Go back</Link>
      <div className={s.imgBox}>
        <img className={s.img} src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
        <div className={s.info}>
          <h1>{movie.title}</h1>
          <p>User score: {movie.vote_average}</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h2>Genres</h2>
          <ul className={s.list}>
          {movie.genres.map(genre => (
            <li key={genre.id}>
              <p>{genre.name}</p>
            </li>
          ))}
          </ul>
        </div>      
      </div>
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
    </div>
  )
}

export default MovieDetailsPage