import { API_KEY } from "./Constants/API";
import { base_URL } from "./Constants/API";

export const popularMovies = `${base_URL}/movie/popular?api_key=${API_KEY}&language=en-US`;
export const topRated = `${base_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`;
export const upComing = `${base_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
export const originals = `${base_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`;
export const comedy = `${base_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`;
export const horror = `${base_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`;
export const action = `${base_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`;
export const documentary = `${base_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`;
