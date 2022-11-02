import { Link, useLocation } from "react-router-dom";
import carrito from "../assets/carrito.png";

function Navegador() {
  const location = useLocation();
  return (
    <nav className="navegacion">
      <Link to="/" className={location.pathname === "/" ? "active" : ""}>
        Inicio
      </Link>
      <Link
        to="/tienda"
        className={location.pathname === "/tienda" ? "active" : ""}
      >
        Tienda
      </Link>
      <Link
        to="/nosotros"
        className={location.pathname === "/nosotros" ? "active" : ""}
      >
        Nosotros
      </Link>
      <Link to="/carrito">
        <img src={carrito} alt="Carrito de compras" className="carrito" />
      </Link>
    </nav>
  );
}

export default Navegador;
