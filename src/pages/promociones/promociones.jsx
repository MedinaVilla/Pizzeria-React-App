import React from 'react';
import Menu from '../../components/menu_pizza/Menu'
import styles from "Promociones.module.css";
;

const Promociones = () => {
    return (
        <div >
            <div>
                <br />
                <h4 className={styles.title}>NUESTRAS PIZZAS</h4>
                <Menu />
            </div>
        </div>
    );
}

export default Promociones;
