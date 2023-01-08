import { useEffect, useState } from "react"
import { BiArrowBack } from "react-icons/bi"
import { useParams } from "react-router-dom"
import { Container } from "../../components/Container"
import { Movie, MovieList } from "../Home/styles"

function Results() {
    const image_path = "https://image.tmdb.org/t/p/w500/"
    const params =useParams()

    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=cdf6363fb75f2ee18a6c87585956511f&query=${params.query}`)
        .then(response => response.json())
        .then(data => setSearchResults(data.results))
    }, [])

    return(
        <Container>
            <a className="back-page" href="/"><BiArrowBack/></a>
            <h2>Resultados da pesquisa</h2>
            <MovieList>
                {searchResults.map(searchResult =>{
                    return(
                        <Movie className="item" key={searchResult.id}>
                            <img src={image_path + searchResult.poster_path} alt={`capa do filme ${searchResult.title}`}/>
                            <span>{searchResult.title}</span>
                        </Movie>
                    )
                })}
            </MovieList>
        </Container>
    )
}

export default Results