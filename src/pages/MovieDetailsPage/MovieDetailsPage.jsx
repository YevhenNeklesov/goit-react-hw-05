import { useEffect, useState } from "react"
import { NavLink, Outlet, useParams } from "react-router-dom"
import { fetchMovieById } from "../../services/TMDB-api"
import s from './MovieDetailsPage.module.css'


const MovieDetailsPage = () => {

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
      <div className={s.imgBox}>
        <img className={s.img} src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
        <div>
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
        <h3>Additional information</h3>
        <div>
          <NavLink to='cast'>Cast</NavLink>
          <NavLink to='reviews'>Reviews</NavLink>
        </div>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default MovieDetailsPage