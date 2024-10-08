import MovieList from '../../components/MovieList/MovieList'
import s from './HomePage.module.css'
import { fetchMovies } from '../../services/TMDB-api'
import { useHttp } from '../../components/Hooks/useHttp'
import Loader from '../../components/Loader/Loader'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'


const HomePage = () => {

    const { data, isLoading, isError } = useHttp(fetchMovies)

  return (
    <div className={s.container}>
          {data && (
              <>
              <h1 className={s.title}>Trending today</h1>
                  <MovieList movies={data} />
              </>
           )}
          {isLoading && <Loader />}
          {isError && <ErrorMessage/>}
          
    </div>
  )
}

export default HomePage