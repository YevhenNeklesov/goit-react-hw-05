import s from './MovieDetails.module.css'


const MovieDetails = ({movie}) => {
  return (
    <div className={s.container}>
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
    </div>
  )
}

export default MovieDetails