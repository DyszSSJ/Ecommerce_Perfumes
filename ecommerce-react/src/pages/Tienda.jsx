import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Tienda.module.css";
import style from "../styles/Paginations.module.css";

export default function Tienda() {
  const [productos, setProductos] = useState({});
  const [pagina, setPagina] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchProductos = async () => {
      const response = await fetch(
        `http://localhost:1337/api/perfumes?populate=imagen&pagination[page]=${pagina}&pagination[pageSize]=12`
      );
      const data = await response.json();
      setProductos(data);
      setLoading(false);
    };
    fetchProductos();
  }, [pagina]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div>
      <h1 className="heading">Tienda</h1>
      <div className={styles.products}>
        {loading ? (
          <div className="border border-blue-300 shadow rounded-md p-4 max-w-2xl w-[80rem] h-[9rem] mx-auto">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-slate-700 h-8 w-20"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-5 bg-slate-700 rounded-lg"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-5 bg-slate-700 rounded-lg col-span-2"></div>
                    <div className="h-5 bg-slate-700 rounded-lg col-span-1"></div>
                  </div>
                  <div className="h-5 bg-slate-700 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            {productos.data &&
              productos.data.map((producto) => (
                <div key={producto.id} className={styles.contenido}>
                  <img
                    src={
                      producto.attributes.imagen.data.attributes.formats
                        .thumbnail.url
                    }
                    alt={producto.attributes.nombre}
                    className={styles.img}
                  />
                  <h2 className={styles.name}>{producto.attributes.nombre}</h2>
                  <p className={styles.resumen}>
                    {producto.attributes.descripcion}
                  </p>
                  <p className={styles.precio}>
                    Precio: $ {producto.attributes.precio}
                  </p>
                  <Link
                    to={`/producto/${producto.id}`}
                    className={styles.btnVermas}
                  >
                    Ver Producto
                  </Link>
                </div>
              ))}
          </>
        )}
      </div>

      <nav aria-label="Page navigation example">
        <ul className={style.pagination}>
          <div className="scroll-to-top">
            {isVisible && (
              <div onClick={scrollToTop} className="flex gap-6">
                <li className={style.page_item}>
                  <a className="page-link" onClick={() => setPagina(1)}>
                    1
                  </a>
                </li>
                <li className={style.page_item}>
                  <a className="page-link" onClick={() => setPagina(2)}>
                    2
                  </a>
                </li>
                <li className={style.page_item}>
                  <a className="page-link" onClick={() => setPagina(3)}>
                    3
                  </a>
                </li>
                <li className={style.page_item}>
                  <a className="page-link" onClick={() => setPagina(4)}>
                    4
                  </a>
                </li>
                <li className={style.page_item}>
                  <a className="page-link" onClick={() => setPagina(5)}>
                    5
                  </a>
                </li>
                <li className={style.page_item}>
                  <a className="page-link" onClick={() => setPagina(6)}>
                    6
                  </a>
                </li>
              </div>
            )}
          </div>
        </ul>
      </nav>
    </div>
  );
}
