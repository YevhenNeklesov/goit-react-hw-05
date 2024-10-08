import { Link, useLocation } from 'react-router-dom'
import s from './MovieList.module.css'

const MovieList = ({movies}) => {

    const location = useLocation()
    if (movies.length === 0) return <p className={s.noMovies}>Sorry we have no movies for you</p>
  return (
    <div className={s.container}>
          <ul className={s.list}>
              {movies.map(movie => (
                  <li key={movie.id}>
                      <Link to={`/movies/${movie.id.toString()}`} state={location}>
                          <p>{movie.title}</p>
                      </Link>
                  </li>
              ))}
          </ul>
    </div>
  )
}

export default MovieList