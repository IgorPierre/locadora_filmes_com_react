import { Container, Movie, MovieList } from "./styles"
import img from "../../assets/avatar.jpg"
import img2 from "../../assets/reileao.jpg"
import img3 from "../../assets/homemdeferro.jpg"

function Home() {

    const movies = [
        {
            title: "Avatar",
            image_url: img
        },
        {
            title: "Rei Leão",
            image_url: img2
        },
        {
            title: "Homem de Ferro",
            image_url: img3
        }
    ]

    return(
        <Container>
            <h1>Filmes em alta</h1>

            <MovieList>

                {movies.map(movie =>{
                    return(
                        <Movie>
                            <a href="https://google.com.br"><img src={movie.image_url} alt="capara do filme avatar"/></a>
                            <span>{movie.title}</span>
                        </Movie>
                    )
                })}
            </MovieList>
        </Container>    
    )
}
export default Home