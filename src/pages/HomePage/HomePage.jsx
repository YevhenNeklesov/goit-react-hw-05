import { useEffect, useState } from "react"
import { fetchMovies } from "../../services/TMDB-api"
import { Link } from "react-router-dom"



const HomePage = () => {

    const [movies, setMovies] = useState([])


    
    useEffect(() => {
        const getAllMovies = async () => {
            const data = await fetchMovies()
            setMovies(data)
        }
        getAllMovies()
    }, [])
  return (
      <div>
          <h1>Trending today</h1>
          <ul>
              {movies.map(movie => (
                  <li key={movie.id}>
                      <Link to={`/movies/${movie.id.toString()}`}>
                          <p>{movie.title}</p>
                      </Link>
                  </li>
              ))}
          </ul>
    </div>
  )
}

export default HomePage