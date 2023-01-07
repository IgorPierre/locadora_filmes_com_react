import logoImg from "../src/logo.png"
import { Outlet, Link } from "react-router-dom";
import { Header } from './components/Header';

function App() {
  return (
    <div className="App">
      <>
        <Header>
          <img src={logoImg} alt="logo" />

          <nav>
            <Link to={"/"}>Início</Link>
          </nav>
        </Header>
        
        <Outlet />
      </>
    </div>
  );
}

export default App