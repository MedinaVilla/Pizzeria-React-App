import React from 'react';
import styles from "./Footer.module.css";
import iconFb from "./../../assets/images/icon-facebook.svg";
import iconIg from "./../../assets/images/icon-instagram.svg";
import iconTw from "./../../assets/images/icon-twitter.svg";
import iconYt from "./../../assets/images/icon-youtube.svg";
import { Link } from 'wouter';

const Footer = () => {
    return (
        <div className={styles.container}>
            <footer className={styles.footer}>
                <div className={styles.container}>
                    <div className={styles.row}>
                        <div className={styles.footer_col}>
                            <h4>Acerca de</h4>
                            <ul>
                                <li><Link href="#">Nuestras sucursales</Link></li>
                                <li><Link href="#">Facturación electrónica</Link></li>
                                <li><Link href="#">Términos y condiciones</Link></li>
                                <li><Link href="#">Aviso de privacidad</Link></li>
                                <li><Link href="#">Entrega Cero Contacto</Link></li>
                                <li><Link href="#">Viviendo en equilibrio</Link></li>
                                <li><Link href="#">¿Quiénes somos?</Link></li>

                            </ul>
                        </div>
                        <div className={styles.footer_col}>
                            <h4>Interactúa con nosotros</h4>
                            <ul>
                                <li><Link href="#">Comparte tu opinión</Link></li>
                                <li><Link href="#">Preguntas frecuentes</Link></li>
                                <li><Link href="#">Contacto</Link></li>
                                <li><Link href="#">Franquicias</Link></li>
                                <li><Link href="#">Bolsa de trabajo</Link></li>
                                <li><Link href="#">Va por mi cuenta</Link></li>
                            </ul>
                        </div>
                        <div className={styles.footer_col}>
                            <h4>Síguenos en nuestras redes sociales</h4>
                            <div className={styles.social_links}>
                                <Link href="#"><img src={iconFb} alt="iconFb"></img></Link>
                                <Link href="#"><img src={iconIg} alt="iconIg"></img></Link>
                                <Link href="#"><img src={iconTw} alt="iconTw"></img></Link>
                                <Link href="#"><img src={iconYt} alt="iconYt"></img></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.footer_bottom}>
                    <small >2021 Página creada por <a href="https://github.com/MedinaVilla" target="_blank" rel="noopener noreferrer">@MedinaVilla</a> sin fines de lucro para un uso recreativo</small>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
