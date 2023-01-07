import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Description, DetailsArea } from "./styles"
import {BiArrowBack} from 'react-icons/bi'

function Details() {

    const {id} = useParams()

    const [movie, setMovie] = useState([])

    const image_path = "https://image.tmdb.org/t/p/w500/"

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=cdf6363fb75f2ee18a6c87585956511f&language=en-US&page=1`)
        .then(response => response.json())
        .then(data => {

            const { title, poster_path, overview, release_date} = data

            const movie = {
                id,
                title,
                sinopse: overview,
                image: `${image_path}${poster_path}`,
                releaseData: release_date
            }
            setMovie(movie)
        })
    }, [])

    return(
        <DetailsArea>
            <a className="back-page" href="/"><BiArrowBack/></a>
            <img src={movie.image} alt="logo" />
            <Description>
                <h2>{movie.title}</h2>
                <span>Data de lançamento - {movie.releaseData}</span>
                <p>{movie.sinopse}</p>
            </Description>
        </DetailsArea>
    )
}

export default Details