import axios from 'axios'; //biblioteca que faz a requisição na URL

const API_KEY = '9e4dc1bfc71562c6a42be7f919b1c329';
const BASE_URL = 'https://api.themoviedb.org/3/';
const withBaseUrl = path => `${BASE_URL}${path}?api_key=${API_KEY}`;//uso do acento grave na sintaxe

export class MoviesService{

    static getMovies(){
        return axios(withBaseUrl('movie/popular'));
    }

    static getMovieById(id){
        return axios(withBaseUrl(`movie/${id}`));//as crases são chamadas de template string - é o que permite utilizar variáveis dentro de uma string
    }

}
