// import { useEffect, useState } from "react";
import { fetchMoviesBySearch } from "../../services/TMDB-api";
import SearchBar from "../../components/SearchBar/SearchBar";
import s from './MoviesPage.module.css'
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";
import { useHttp } from "../../components/Hooks/useHttp";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { useState } from "react";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const [hasSearch, setHasSearch] = useState(false)
  const { data, isLoading, isError } = useHttp(fetchMoviesBySearch, query)


  const handleQuery = query => {
  if (!query) {
    return setSearchParams({})
    }
    searchParams.set('query', query);
    setSearchParams(searchParams);
    setHasSearch(true)
  }
  
  if (data === null) return
  return (
    <div className={s.container}>
      <SearchBar handleQuery={handleQuery}/>
      {hasSearch && data.length === 0 ? (<p>Sorry we have no movies by your search</p>) : <MovieList movies={data} />}
      {isLoading && <Loader />}
      {isError && <ErrorMessage/>}
    </div>
  );
};

export default MoviesPage;