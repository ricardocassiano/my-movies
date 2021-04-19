import { useEffect, useState } from "react";
import { MoviesService } from "../api/MoviesService";
import { MoviesList } from "../components/MoviesList";
import { MoviesContainer } from "../styles/MoviesContainer";



export const Home = () => {

        //utilização dos Hooks React para controle de estado dos componentes
    /* A princío, a função setMovies é responsável por alterar o estado
    da variável (array) movies, que inicia vazia e é preenchida conforme resultados
    da chamada da API. */
    const [movies, setMovies] = useState([]);

    //Função que completa a chamada getMovies criada no serviço MoviesService
    //Função assíncrona
    //Recebe especificamente o atributo data do objeto recebido na chamada
    const fetchMovies = async () => {
        //a utilização das chaves explicita que do objeto recebido, armazene apenas a propriedade data
        const { data } = await MoviesService.getMovies();
        //console.log(data);
        //data.results é o array de filmes recebida no objeto
        //setMovies adiciona o array à variável movies
        setMovies(data.results);
        //console.log(data.results);
    };

    //hook do React utilizado para tratar efeitos colaterais de uma chamada à APIs externas
    useEffect(() => {
        fetchMovies();
    }, []);

    return(
        <MoviesContainer>
                <MoviesList movies={movies} />
        </MoviesContainer>
    )
};
