import React from 'react';
import styles from './navbar.module.css';
import logo from "./../../assets/images/logo.svg";
import item1 from "./../../assets/images/icon-pizzas.svg";
import item2 from "./../../assets/images/icon-arma.svg";
import item3 from "./../../assets/images/icon-promos.svg";
import item4 from "./../../assets/images/icon-adicionales.svg";
import item5 from "./../../assets/images/icon-cart.svg";

import { Link } from 'wouter';

const Navbar = () => {
    return (
        <header className={styles.nav}>
            <div>
                <Link href="/"><img className={styles.logo} src={logo} alt="logo" /></Link>
            </div>
            <nav>
                <ul className={styles.nav_links}>
                    <Link href="/menu/pizzas"><li><img src={item1} alt="logo" /><div className={styles.item_name}>Pizzas</div></li></Link>
                    <Link href="/menu/arma_tu_pizza"><li><img src={item2} alt="logo" /><div className={styles.item_name}>Arma tu pizza</div></li></Link>
                    <Link href="/menu/promociones"><li><img src={item3} alt="logo" /><div className={styles.item_name}>Promociones</div></li></Link>
                    <Link href="/menu/adicionales"><li><img src={item4} alt="logo" /><div className={styles.item_name}>Adicionales</div></li></Link>
                    <Link href="/carrito"><li><img src={item5} alt="logo" /><div className={styles.item_name}>Carrito</div></li></Link>
                </ul>
            </nav>
            <Link href="/login"><button className={styles.button}>Iniciar Sesión</button></Link>
        </header>
    );
}

export default Navbar;
