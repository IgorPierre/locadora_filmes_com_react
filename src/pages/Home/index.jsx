import { Container, Movie, MovieList } from "./styles"

import { useEffect, useState } from "react"

function Home() {

    const [movies, setMovies] = useState([])

    const image_path = "https://image.tmdb.org/t/p/w500/"

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=cdf6363fb75f2ee18a6c87585956511f&language=en-US&page=1')
        .then(response => response.json())
        .then(data => setMovies(data.results))
    }, [])

    return(
        <Container>
            <h1>Filmes em alta</h1>

            <MovieList>

                {movies.map(movie =>{
                    return(
                        <Movie key={movie.id}>
                            <a href="https://google.com.br"><img src={image_path + movie.poster_path} alt="capara do filme avatar"/></a>
                            <span>{movie.title}</span>
                        </Movie>
                    )
                })}
            </MovieList>
        </Container>    
    )
}
export default Home