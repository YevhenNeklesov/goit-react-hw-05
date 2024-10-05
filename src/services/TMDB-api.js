import axios from "axios";

const options = {
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODA3Zjc3NmRiY2NjYzY1MWIyNDcwMTkzNGNjOThjOCIsIm5iZiI6MTcyODEzMDQwMC40NzY5OTUsInN1YiI6IjY3MDEyYTJmNjdjNmZiMDlmZmY4NDM3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8xLJGEN57XewFiepF0MnlnOzXbkZo9JTrP8bASE2cY8'
  }
};

axios.defaults.baseURL = 'https://api.themoviedb.org/3'

export const fetchMovies = async () => {
    const { data } = await axios.get('trending/movie/day', options)
    return data.results
}

