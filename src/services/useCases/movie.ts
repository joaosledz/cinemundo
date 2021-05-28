import api from '../api';
import { Genre } from '../models/movie';

const movieApi = {
    // getMovie: (credential: string) => api.get<Movie>(userUrls.show + credential),
    // searchMovies: (username: string) => api.get<Movie>(`name=${username}`),
    getVideos: (movieId: number | string) =>
        api.get(`movie/${movieId}/videos?&language=pt-BR`),
    search: (query: string) =>
        api.get(`search/movie?query=${query}&language=pt-BR`),
    genres: () => api.get(`genre/movie/list?language=pt-BR`),
};

export default movieApi;
