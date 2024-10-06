import { useEffect, useState } from "react"
import { fetchMovies } from "../../services/TMDB-api"
import { Link, useLocation } from "react-router-dom"
import s from './HomePage.module.css'


const HomePage = () => {
    const location = useLocation()
    const [movies, setMovies] = useState([])
    
    useEffect(() => {
        const getAllMovies = async () => {
            const data = await fetchMovies()
            setMovies(data)
        }
        getAllMovies()
    }, [])
  return (
      <div className={s.container}>
          <h1 className={s.title}>Trending today</h1>
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

export default HomePage