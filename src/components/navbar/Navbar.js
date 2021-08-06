import React from 'react';
import styles from './navbar.module.css';
import logo from "./../../assets/images/logo.svg";
import { Link } from 'wouter';

const Navbar = () => {
    return (
        <header className={styles.nav}>
                <img className={styles.logo}src={logo} alt="logo" />
            <nav>
                <ul className={styles.nav_links}>
                    <li><Link href="#">Pizzas</Link></li>
                    <li><Link href="#">Arma tu pizza</Link></li>
                    <li><Link href="#">Promociones</Link></li>
                    <li><Link href="#">Adicionales</Link></li>
                    <li><Link href="#">Mi orden</Link></li>
                </ul>
            </nav>
            <Link href="#"><button>Iniciar Sesión</button></Link>
        </header>
    );
}

export default Navbar;
