import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { MoviesService } from "../api/MoviesService";

export const MovieDetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});

    const fetchMovie = async () => {
        const { data } = await MoviesService.getMoviesById(id);
        setMovie(data);
            }

    useEffect(() => {
        fetchMovie();
    }, []);

    return (
        <>
            <h1>{movie.title}</h1>

            <article>
               {movie.overview}
            </article>
        </>
    )
}

/*linda 19 - componente react precisa de um elemento raiz. o <> é um fragmento do react */