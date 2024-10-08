// import { useEffect, useState } from "react";
import { fetchMoviesBySearch } from "../../services/TMDB-api";
import SearchBar from "../../components/SearchBar/SearchBar";
import s from './MoviesPage.module.css'
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";
import { useHttp } from "../../components/Hooks/useHttp";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  const { data, isLoading, isError } = useHttp(fetchMoviesBySearch, query)

  const handleQuery = query => {
  if (!query) {
    return setSearchParams({})
    }
    searchParams.set('query', query);
    setSearchParams(searchParams);
  }
  console.log(data);
  return (
    <div className={s.container}>
      
      {data && <>
        <SearchBar handleQuery={handleQuery}/>
        <MovieList movies={data} />
      </>}
      {isLoading && <Loader />}
      {isError && <ErrorMessage/>}
    </div>
  );
};

export default MoviesPage;