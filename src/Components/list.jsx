import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card } from "./card";

const API_key = 'af26cce282aecf5c6cc39a264f29d0a7';
const API_url = 'https://api.themoviedb.org/3'

export function List() {
    // State: controla o estado da variável (movies)
    const [movies, setMovies] = useState([]); // Um array vazio

    // Effect: hook que controla o efeito dele na pagina, recebe parâmetros(), faz o script e controla a dependência
    useEffect(() => {
        axios.get(`${API_url}/movie/popular?api_key=${API_key}&language=pt-BR`)

            .then (response=> {
                console.log(response.data.results);
                setMovies(response.data.results);
            })
            .catch(error => {
                console.log('Error', error);
            });

    }, {});

    return (
        <div className="flex flex-wrap gap-4 justify-center bg-[#141414]">
            <figure className="flex flex-wrap justify-center gap-4 p-5">
                {movies.map(movie => (
                    <Card key={movie.id} movie={movie}/>
                ))}
            </figure>
        </div>
    )
}