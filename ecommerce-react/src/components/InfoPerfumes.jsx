import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/Perfumes.module.css";
import usePerfumes from "../hook/usePerfumes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function InfoPerfumes() {
  const [producto, setProductos] = useState({});
  const [cantidad, setCantidad] = useState(0);
  const { id } = useParams();

  const { addCarrito } = usePerfumes();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchProductos = async () => {
      const response = await fetch(
        `http://localhost:1337/api/perfumes/${id}?populate=imagen`
      );
      const data = await response.json();
      setProductos(data);
      setLoading(false);
    };
    fetchProductos();
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();

    if (cantidad === 0) {
      alert("Debe ingresar una cantidad");
      return;
    }
    const productoSeleccionada = {
      id: producto.data?.id,
      nombre: producto.data?.attributes.nombre,
      imagen: producto.data?.attributes.imagen.data.attributes.url,
      precio: producto.data?.attributes.precio,
      cantidad: cantidad,
    };
    addCarrito(productoSeleccionada);
  };

  return (
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
        <div key={producto.id} className="contenedor">
          {
            <>
              <div className={styles.contenido}>
                <img
                  src={
                    producto.data?.attributes.imagen.data.attributes.formats
                      .thumbnail.url
                  }
                  alt={producto.data?.attributes.nombre}
                  className={styles.img}
                />
                <div className={styles.content}>
                  <h2 className={styles.name}>
                    {producto.data?.attributes.nombre}
                  </h2>
                  <p className={styles.resumen}>
                    {producto.data?.attributes.descripcion}
                  </p>
                  <p className={styles.precio}>
                    Precio: $ {producto.data?.attributes.precio}
                  </p>
                  <form
                    action=""
                    className={styles.formulario}
                    onSubmit={handleAdd}
                  >
                    <div className={styles.formularioSelct}>
                      <label htmlFor="cantidad">Cantidad: </label>
                      <select
                        name="cantidad"
                        id="cantidad"
                        onChange={(e) => setCantidad(parseInt(e.target.value))}
                      >
                        <option value="0">-- Selecciona --</option>
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
                    </div>
                    <input
                      type="submit"
                      value="Agregar al Carrito"
                      className={styles.btnCarrito}
                    />
                  </form>
                </div>
              </div>
            </>
          }
        </div>
      )}
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
    </div>
  );
}

export default InfoPerfumes;
