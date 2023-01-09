import { Movie, MovieList } from "./styles"
import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { Container } from "../../components/Container"
import { motion } from "framer-motion"

function Home() {
    const carousel = useRef(0)
    
    const [width, setWidth] = useState(0)

    const [movies, setMovies] = useState([])

    const [topRateds, settopRateds] = useState([])

    const image_path = "https://image.tmdb.org/t/p/w500/"

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=cdf6363fb75f2ee18a6c87585956511f&language=en-US&page=1')
        .then(response => response.json())
        .then(data => setMovies(data.results))
    }, [])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=cdf6363fb75f2ee18a6c87585956511f&language=en-US&page=1')
        .then(response => response.json())
        .then(data => settopRateds(data.results))
    }, [])

    useEffect(()=>{
        setWidth((carousel.current?.scrollWidth)-(carousel.current?.offsetWidth))
    }, [])

    return(
        <Container>
            <motion.div ref={carousel} className="carousel" whileTap={{ cursor: "grabbing"}}>
                <h2>Melhores filmes</h2>
                <motion.div 
                    className="inner" 
                    drag="x"
                    dragConstraints={{ right:0, left: -width }}
                >
                    {topRateds.map(topRated =>{
                        return(
                            <div className="item" key={topRated.id}>
                                <img src={image_path + topRated.poster_path} alt={`capa do filme ${topRated.title}`}/>
                                <Link to={`/details/${topRated.id}`}>Ver detalhes</Link>
                            </div>
                        )
                    })} 
                </motion.div>
            </motion.div>

            <h2>Em alta</h2>
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