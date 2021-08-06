import React from 'react';
import { Link } from 'wouter';
import styles from "./menuItem.module.css";

const MenuItem = ({ item }) => {
    return (
        <div className={styles.card}>
            <p>{item.name}</p>
            <img className={styles.image} src={item.image} alt="image1" />
            <div className={styles.containerButton}>
                <Link href="menu/ordenar_especialidad/peperonni"><button onClick={()=>{}}>DETALLES</button></Link>
                <Link href="menu/ordenar_especialidad/peperonni"><button onClick={()=>{}}>ORDENAR AQUÍ</button></Link>
            </div>

        </div>
    );
}

export default React.memo(MenuItem);
