import { Navigate, Route, Routes } from 'react-router-dom';
import { AppLayout } from './AppLayout';
// import { TopToday } from './TopToday/TopToday';
// import { SearchMovies } from './SearchMovies/SearchMovies';
import { SearchResultsList } from './SearchResultsList/SearchResultsList';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { HomePage } from 'Pages/HomePage';
import { MoviesPage } from 'Pages/MoviesPage';
import { MoviesDetailsPage } from 'Pages/MoviesDetailsPage';
import { MoviesResultsPage } from 'Pages/MoviesResultPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MoviesDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="movies/results" element={<MoviesResultsPage />} />
      </Route>
      <Route path="*" element={<Navigate to={'/'} />} />
    </Routes>
  );
};
