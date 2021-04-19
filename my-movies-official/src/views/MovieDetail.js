import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { MoviesService } from "../api/MoviesService";
import { MovieOverview } from "../components/MovieOverview";
import { MoviesContainer } from "../styles/MoviesContainer";

export const MovieDetail = () => {
    const { id } = useParams(); //hook do react-router para recuperar os parâmetros da URL
    const [movie, setMovie] = useState({});

    const fetchMovie = async () => {

        const { data } = await MoviesService.getMovieById(id);
        setMovie(data);
        //console.log(data);
    };

    useEffect(() => {
        fetchMovie();
    }, []);

    return(
        <>{/*Não é uma tag HTML, é um fragmento do React para indicar qual é o elemento raiz*/}
        <MoviesContainer>
            <MovieOverview movie={movie} />
        </MoviesContainer>
        </>
    )

}