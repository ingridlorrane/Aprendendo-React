/*Importar o axios*/
import axios from "axios";
/*Arquivo para conter a lógica para recuperar os filmes*/
/* criar uma classe com metodos estaticos */
const API_KEY = `889d29dbf7a80149d28e39e2662ff804`;
/*Criar metodo auxiliar para montar a URL*/
const BASE_URL = `https://api.themoviedb.org/3/`;
/*CRIAR UMA FUNÇAO */
const withBaseUrl = (path) => `${BASE_URL}${path}?api_key=${API_KEY}`;

export class MoviesService {
  static getMovies() {
    /*return axios(
      withBaseUrl("movie/popular")*/
    return axios(withBaseUrl(`movie/popular`)); /*metodo*/
    /*chamando esse link https://developers.themoviedb.org/3/movies/get-popular-movies */
  }

  /*metodo para buscar todos os filmes*/
  static getMoviesById(id) {
    return axios(withBaseUrl(`movie/${id}`));
    /* chamando essa rota https://developers.themoviedb.org/3/movies/get-movie-details */
  }
}
