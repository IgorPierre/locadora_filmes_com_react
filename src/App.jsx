import logoImg from "../src/logo.png"
import { Outlet } from "react-router-dom";
import { Header, SearchArea } from './components/Header';
import { BiSearch } from "react-icons/bi";

function App() {
  return (
    <div className="App">
      <>
        <Header>
          <img src={logoImg} alt="logo" />

          <SearchArea action="">
            <input type="text" placeholder="Pesquisar filme"/>
            <button><BiSearch/></button>
          </SearchArea>
        </Header>
        
        <Outlet />
      </>
    </div>
  );
}

export default App