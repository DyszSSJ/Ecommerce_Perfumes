import React, { useEffect, useState } from "react";
import styles from "../styles/carrito.module.css";
import usePerfumes from "../hook/usePerfumes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Carrito() {
  const [total, setTotal] = useState(0);
  const { carrito, actualizarCantidad, eliminarProducto } = usePerfumes();

  useEffect(() => {
    let total = 0;
    carrito?.forEach((producto) => {
      total += producto.precio * producto.cantidad;
    });
    setTotal(total);
  }, [carrito]);

  return (
    <main className={StyleSheet.contenedor}>
      <h1 className="heading">Carrito de compras</h1>
      <div className={styles.contenido}>
        <div className={styles.carrito}>
          <h2 className="mb-[3rem] font-bold text-6xl ml-[18rem]">Articulos</h2>
          {carrito?.length === 0 ? (
            <p>No hay articulos en el carrito</p>
          ) : (
            carrito?.map((perfume) => (
              <div className={styles.producto} key={perfume.id}>
                <div>
                  <img
                    src={perfume.imagen}
                    alt={perfume.nombre}
                    className={styles.img}
                  />
                </div>
                <div>
                  <button
                    className={styles.boton}
                    disabled={carrito.length === 0}
                    type="button"
                    onClick={() => eliminarProducto(perfume.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-2 h-2 icon-trash"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                  <h3 className={styles.nombre}>{perfume.nombre}</h3>
                  <p>Cantidad: {perfume.cantidad}</p>
                  <select
                    name="cantidad"
                    id="cantidad"
                    value={perfume.cantidad}
                    className={styles.select}
                    onChange={(e) =>
                      actualizarCantidad({
                        id: perfume.id,
                        cantidad: Number(e.target.value),
                      })
                    }
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>

                  <p className={styles.precio}>${perfume.precio}</p>
                  <p className={styles.subtotal}>
                    Subtotal: $ <span>{perfume.cantidad * perfume.precio}</span>
                  </p>
                </div>
              </div>
            ))
          )}
        </div>

        <aside className={styles.resumen}>
          <h3>Resumen del pedido</h3>
          <p className={styles.total}>
            Total a pagar: $ <span>{total}</span>
          </p>
        </aside>
      </div>
      <ToastContainer
        position="top-right"
        theme="colored"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </main>
  );
}

export default Carrito;
