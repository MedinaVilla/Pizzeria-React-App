import React from 'react';
import styles from "./menuItem.module.css";

const MenuItem = ({ item }) => {
    return (
        <div className={styles.card}>
            <p>{item.name}</p>
            <img className={styles.image} src={item.image} alt="image1" />
            <div className={styles.containerButton}>
                <button onClick={()=>{}}>DETALLES</button>
                <button onClick={()=>{}}>ORDENAR AQUÍ</button>
            </div>

        </div>
    );
}

export default React.memo(MenuItem);
