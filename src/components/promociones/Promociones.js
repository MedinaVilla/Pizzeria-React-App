import React from 'react';
import { Link, useLocation } from 'wouter';
import styles from "./Promociones.module.css";

const Promociones = ({ promociones=[] }) => {
    const [location] = useLocation();

    return (
        <div>
            <div className={styles.container}>
                {promociones.length > 0 ? promociones.map((prom, index) => {
                    return <Link key={`prom-${index}`} href={`${location}/${prom.id}`}><div className={styles.row}>
                        <div className={styles.column}>
                            <img src={prom.image} alt="prom" />
                        </div>
                        <div className={styles.column}>
                            <h4>{prom.name}</h4>
                            <p className={styles.description}>{prom.description}</p>
                        </div>
                    </div></Link>
                }):<p>No hay promociones para esta categoría</p>}
            </div>
        </div>
    );
}

export default React.memo(Promociones);
