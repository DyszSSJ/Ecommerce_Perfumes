import { Link } from "react-router-dom";
import Navegador from "./Navegador";
import logo from "../assets/logo.png";

function Header() {
  return (
    <>
      <header className="header">
        <div className="contenedor barra">
          <Link className="logo" to="/">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
          <Navegador />
        </div>
      </header>
    </>
  );
}

export default Header;
