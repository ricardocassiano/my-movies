import { MovieItem } from "./MovieItem";

export const MoviesList = ({ movies }) => (
    <section>
        <ul>
            {
                //loop para ler cada item do que foi recebido na requisição e passar para o componente.
                
                //formas de passar o dado recebido para o componente:
                //movies.map(m => <MovieItem movie={m} /> --> objeto com todas as propriedades
                //movies.map(m => <MovieItem title={m.title} id={m.id} /> -->propriede explícita
                //movies.map(m => <MovieItem { ... m} /> -->objeto de propriedades inteiro de forma implícita
            movies.map(m => <MovieItem movie={m} />)}
        </ul>
    </section>
);