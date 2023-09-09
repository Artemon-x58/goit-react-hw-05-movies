import axios from 'axios';

export const addTopList = (title, url) => {
  return axios
    .get(`https://api.themoviedb.org/3/${url}`, {
      params: { language: 'en-US', query: title },
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyM2FkNGFkNWM2Mzg1ZmYzYjZlZThlN2NkYzFmNWVhOCIsInN1YiI6IjY0ZjRkMzZjOWU0NTg2MDEzYWY5MmExOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gw-4nvIFz2mahV7u6nEjviVxuuefwHpWagfQWIKcjSI',
      },
    })
    .then(response => response.data)
    .catch(error => {
      console.error(error);
    });
};
