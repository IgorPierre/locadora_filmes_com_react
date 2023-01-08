import { Movie, MovieList } from "./styles"
import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { Container } from "../../components/Container"
import { motion } from "framer-motion"

function Home() {
    const carousel = useRef()
    
    const [width, setWidth] = useState(0)

    const [movies, setMovies] = useState([])

    const [latests, setLatests] = useState([])

    const image_path = "https://image.tmdb.org/t/p/w500/"

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=cdf6363fb75f2ee18a6c87585956511f&language=en-US&page=1')
        .then(response => response.json())
        .then(data => setMovies(data.results))
    }, [])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=cdf6363fb75f2ee18a6c87585956511f&language=en-US&page=1')
        .then(response => response.json())
        .then(data => setLatests(data.results))
    }, [])

    useEffect(()=>{
        setWidth((carousel.current?.scrollWidth)-(carousel.current?.offsetWidth))
    }, [])

    return(
        <Container>
            <motion.div ref={carousel} className="carousel" whileTap={{ cursor: "grabbing"}}>
                <h1>Melhores filmes</h1>
                <motion.div 
                    className="inner" 
                    drag="x"
                    dragConstraints={{ right:0, left: -width }}
                >
                    {latests.map(latest =>{
                        return(
                            <div className="item" key={latest.id}>
                                <img src={image_path + latest.poster_path} alt={`capa do filme ${latest.title}`}/>
                                <Link to={`/details/${latest.id}`}>Ver detalhes</Link>
                            </div>
                        )
                    })} 
                </motion.div>
            </motion.div>

            <h1>Em alta</h1>
            <MovieList>
                {movies.map(movie =>{
                    return(
                        <Movie key={movie.id}>
                            <Link to={`/details/${movie.id}`}><img src={image_path + movie.poster_path} alt="capara do filme avatar"/></Link>
                            <span>{movie.title}</span>
                        </Movie>
                    )
                })}
            </MovieList>
        </Container>    
    )
}
export default Home