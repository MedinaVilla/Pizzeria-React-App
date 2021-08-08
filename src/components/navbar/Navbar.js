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
            <Link href="/"><img className={styles.logo} src={logo} alt="logo" /></Link>
            <nav>
                <ul className={styles.nav_links}>
                    <li><Link href="/menu/pizzas"><img src={item1} alt="logo" /><br />Pizzas</Link></li>
                    <li><Link href="/"><img src={item2} alt="logo" /><br />Arma tu pizza</Link></li>
                    <li><Link href="/menu/promociones"><img src={item3} alt="logo" /><br />Promociones</Link></li>
                    <li><Link href="/menu/adicionales"><img src={item4} alt="logo" /><br />Adicionales</Link></li>
                    <li><Link href="/carrito"><img src={item5} alt="logo" /><br />Mi orden</Link></li>
                </ul>
            </nav>
            <Link href="#"><button className={styles.button}>Iniciar Sesión</button></Link>
        </header>
    );
}

export default Navbar;
