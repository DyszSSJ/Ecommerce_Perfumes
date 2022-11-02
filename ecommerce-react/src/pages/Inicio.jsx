import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SwiperSliderComponent from "../components/SwiperSliderComponent";
import styles from "../styles/Inicio.module.css";

export default function Inicio() {
  const [perfumes, setPerfumes] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchApi = async () => {
      const response = await fetch(
        "http://localhost:1337/api/perfumes?populate=imagen&pagination[page]=5&pagination[pageSize]=8"
      );
      const data = await response.json();
      setPerfumes(data);
      setLoading(false);
    };
    fetchApi();
  }, []);

  return (
    <>
      <SwiperSliderComponent />
      <div>
        <h1 className={styles.title}>Perfumes</h1>
        <div className={styles.perfumes}>
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
              {perfumes.data?.map((perfume) => (
                <div key={perfume.id} className={styles.products}>
                  <img
                    src={
                      perfume.attributes.imagen.data.attributes.formats
                        .thumbnail?.url
                    }
                    alt=""
                    className={styles.img}
                  />
                  <h2 className={styles.name}>{perfume.attributes.nombre}</h2>
                  <p className={styles.resumen}>
                    {perfume.attributes.descripcion}
                  </p>
                  <p className={styles.precio}>
                    Precio: $ {perfume.attributes.precio}
                  </p>
                  <Link
                    className={styles.btnProduct}
                    to={`/producto/${perfume.id}`}
                  >
                    Ver más
                  </Link>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
}
