import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchMovieReviews } from "../../services/TMDB-api"



const MovieReviews = () => {

    const {movieId} = useParams()
      const [reviews, setReviews] = useState(null)
    useEffect(() => {
        const getAllReviews = async () => {
            const data = await fetchMovieReviews(movieId)
            setReviews(data)
        }
        getAllReviews()
    }, [movieId])
  
  if (!reviews) return <p>Loading</p>

  
  return (
    <div>
      <ul>
        {reviews.results.length === 0 && <p>Sorry, this movie has no reviews</p>}
        {reviews.results.map(review => (
          <li key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default MovieReviews