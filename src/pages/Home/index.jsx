import { Container } from "./styles"
import img from "../../assets/avatar.jpg"

function Home() {
    return(
        <Container>
            <h1>Filmes</h1>

            <ul>
                <li>
                    <img src={img} alt="capara do filme avatar"/>
                    <span>Avatar - O caminho da água</span>
                </li>
                <li>
                    <img src={img} alt="capara do filme avatar"/>
                    <span>Avatar - O caminho da água</span>
                </li>
                <li>
                    <img src={img} alt="capara do filme avatar"/>
                    <span>Avatar - O caminho da água</span>
                </li>
            </ul>
        </Container>    
    )
}
export default Home