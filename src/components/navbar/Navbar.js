import React from 'react';
import styles from './navbar.module.css';
import logo from "./../../assets/images/logo.svg";

const Navbar = () => {
    return (
        <header className={styles.nav}>
                <img className={styles.logo}src={logo} alt="logo" />
            <nav>
                <ul className={styles.nav_links}>
                    <li><a href="#">Pizzas</a></li>
                    <li><a href="#">Arma tu pizza</a></li>
                    <li><a href="#">Promociones</a></li>
                    <li><a href="#">Adicionales</a></li>
                    <li><a href="#">Mi orden</a></li>
                </ul>
            </nav>
            <a className="" href="#"><button>Iniciar Sesión</button></a>
        </header>
    );
}

export default Navbar;
