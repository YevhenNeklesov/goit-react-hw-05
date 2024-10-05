
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import HomePage from './pages/HomePage/HomePage'
import MoviesPage from './pages/MoviesPage/MoviesPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage'

function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/movies/:movieId' element={<MovieDetailsPage/>} />
        <Route path='*' element={<NotFoundPage/>} />
      </Routes>
    </>
  )
}

export default App
