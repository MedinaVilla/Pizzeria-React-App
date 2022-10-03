import React from 'react';
import styles from "./Promociones.module.css";

const Promociones = ({ promociones=[] }) => {

    return (
        <div>
            <div className={styles.container}>
                {promociones.length > 0 ? promociones.map((prom, index) => {
                    return <React.Fragment key={`prom-${index}`}><div className={styles.row}>
                        <div className={styles.column}>
                            <img src={prom.image} alt="prom" />
                        </div>
                        <div className={styles.column}>
                            <h4>{prom.name}</h4>
                            <p className={styles.description}>{prom.description}</p>
                        </div>
                    </div></React.Fragment>
                }):<p>No hay promociones para esta categoría</p>}
            </div>
        </div>
    );
}

export default React.memo(Promociones);
