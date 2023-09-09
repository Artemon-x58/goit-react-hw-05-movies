import { Route, Routes } from 'react-router-dom';
import { AppLayout } from './AppLayout';
import { TopToday } from './TopToday/TopToday';
import { SearchMovies } from './SearchMovies/SearchMovies';
import { SearchResultsList } from './SearchResultsList/SearchResultsList';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { Cast } from './Cast/Cast';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<TopToday />} />
        <Route path="movies" element={<SearchMovies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" />
        </Route>
        <Route path="movies/results" element={<SearchResultsList />} />
      </Route>
    </Routes>
  );
};
