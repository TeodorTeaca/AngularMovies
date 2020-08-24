export const API_KEY: string = '?api_key=8673e8c11eae0b8c433a41602fd2ddfc';
export const TMDB_URL: string = 'https://api.themoviedb.org/3/';

export const MOVIE_PATH: string = 'movie/';
export const TOKEN_PATH: string = 'authentication/token/new';
export const SESSION_PATH: string = 'authentication/session/new';
export const ADD_LIST_PATH: string = 'list'

export const TOKEN_APPROVE: string = 'https://www.themoviedb.org/authenticate/';

export const TOKEN_URL: string = `${TMDB_URL}${TOKEN_PATH}`;
export const SESSION_URL = `${TMDB_URL}${SESSION_PATH}`;
export const MOVIE_URL = `${TMDB_URL}${MOVIE_PATH}`;

export interface Poster {
    posterPath: string;
}

export interface PostersRes {
    results: { poster_path: string }[];
}
