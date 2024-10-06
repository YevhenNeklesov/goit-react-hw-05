import { useEffect, useState } from "react";
import { fetchMoviesBySearch } from "../../services/TMDB-api";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import s from './MoviesPage.module.css'

const MoviesPage = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const [movies, setMovies] = useState([]);

    useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchMoviesBySearch(query);
        setMovies(data.results);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, [query]);

  const handleQuery = query => {
  if (!query) {
    return setSearchParams({})
    }
    searchParams.set('query', query);
    setSearchParams(searchParams);
  }



  return (
    <div>
      <SearchBar handleQuery={handleQuery}/>
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
  );
};

export default MoviesPage;