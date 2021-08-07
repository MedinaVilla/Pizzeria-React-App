import React from 'react';
import Menu from '../../components/menu_pizza/Menu';
import Masas from './../../components/masas_tab/Masas';
import styles from "./menu_pizzas.module.css";

const menu_pizzas = () => {
    return (
        <div >
            <div>
                <br />
                <h4 className={styles.title}>NUESTRAS PIZZAS</h4>
                <Masas/>
                <div className={styles.especialidad_box}> <small>Especialidades (2 a 4 ings.)</small></div>
                <Menu />
                <div className={styles.especialidad_box}> <small>Especialidades (5 a 9 ings.)</small></div>
                <Menu />
            </div>
        </div>
    );
}

export default menu_pizzas;
