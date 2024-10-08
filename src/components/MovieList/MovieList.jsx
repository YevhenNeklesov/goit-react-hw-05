import { Link, useLocation } from 'react-router-dom'
import s from './MovieList.module.css'

const MovieList = ({movies}) => {

    const location = useLocation()
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