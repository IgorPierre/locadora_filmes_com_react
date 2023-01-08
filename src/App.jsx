import logoImg from "../src/logo.png"
import { Link, Outlet } from "react-router-dom";
import { Header, SearchArea } from './components/Header';
import { BiSearch } from "react-icons/bi";
import { useState } from "react";

function App() {

  const [query, setQuery] = useState([])

  return (
    <div className="App">
      <>
        <Header>
          <a href="/"><img src={logoImg} alt="logo" /></a>

          <SearchArea action={`/results/${query}`} method="get">
            <input id="searchBar" name="searchBar" type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Pesquisar por filme"/>
            <Link to={`/results/${query}`}><BiSearch/></Link>
          </SearchArea>
        </Header>
        
        <Outlet />
      </>
    </div>
  );
}

export default App