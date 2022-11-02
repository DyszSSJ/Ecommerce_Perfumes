import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InfoPerfumes from "./components/InfoPerfumes";
import { PerfumesProvider } from "./context/perfumesProvider";
import Carrito from "./pages/Carrito";
import Inicio from "./pages/Inicio";
import Nosotros from "./pages/Nosotros";
import Tienda from "./pages/Tienda";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <PerfumesProvider>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="nosotros" element={<Nosotros />} />
            <Route path="tienda" element={<Tienda />} />
            <Route path="carrito" element={<Carrito />} />
            <Route path="producto/:id" element={<InfoPerfumes />} />
          </Routes>
        </PerfumesProvider>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
