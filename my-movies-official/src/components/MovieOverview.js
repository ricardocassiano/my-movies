import { useParams } from "react-router"

export const MovieOverview = ({ movie} ) => (
    <>
    {console.log(movie)}
    <h1>{movie.title}</h1>

        <article>
             {movie.overview}
        </article>
    </>
);