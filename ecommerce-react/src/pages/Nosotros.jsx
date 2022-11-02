import React, { useState, useEffect } from "react";
import styles from "../styles/Nosotros.module.css";

export default function Nosotros() {
  const [nosotros, setNosotros] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchProductos = async () => {
      const response = await fetch(
        "http://localhost:1337/api/empresa?populate=imagen"
      );
      const data = await response.json();
      setNosotros(data);
      setLoading(false);
    };
    fetchProductos();
  }, []);
  return (
    <div>
      <h1 className="heading">Nosotros</h1>
      <div>
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
            {nosotros && (
              <div className={styles.nosotros}>
                <img
                  src={nosotros.data.attributes.imagen.data.attributes.url}
                  alt={nosotros.data.attributes.nosotros}
                  className={styles.img}
                />
                <h2 className={styles.resumen}>
                  {nosotros.data.attributes.nosotros}
                </h2>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
