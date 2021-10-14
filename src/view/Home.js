import { useEffect, useState } from "react";
import { MoviesService } from "../api/MoviesService";
import {MovieList} from "../Componente/MovieList";
import { MoviesContainer } from "../style/MoviesContainer";


export const Home = () =>{
    const [movies, setMovies] = useState([]);

    const fetchMovies = async () => {
      const { data } = await MoviesService.getMovies();
      setMovies(data.results);
    };
    
    /*usado para fazer requisição para explicitar os efeitos colaterais da aplicação*/
    useEffect(() => {
      /*função que eu quero executar*/
      fetchMovies();
    }, []);

    return (
    <MoviesContainer>
    <MovieList movies={movies} />
  </MoviesContainer>
    )
};