import { MovieItem } from "./MovieItem";

export const MoviesList = ({ movies }) => (
    <section>
        <ul>
            {//recebe um array e executa um loop para de cada objeto dentro do array
            //obter a propriedade title
            movies.map(m => <MovieItem title={m.title} />)}
        </ul>
    </section>
);