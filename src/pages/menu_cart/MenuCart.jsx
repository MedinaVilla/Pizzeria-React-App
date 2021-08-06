import React from 'react';
import { Link } from 'wouter';
import ItemToAdd from './item_to_add/ItemToAdd';
import styles from './MenuCart.module.css';

const MenuCart = () => {
    return (
        <div className={styles.container}>
            <div>
                <h4 className={styles.title}>Pepperoni Especial</h4>
                <p className={styles.subtitle}>Pepperoni, Champiñones Frescos y Extra Queso</p><br />
                <hr />
                <ItemToAdd />
                <br />
                <hr />

                <hr />
                <div className={styles.bottomFlex}>
                    <div>
                        <small>¿Quieres cambiar algún ingrediente? Utiliza nuestro <Link href="#"><span className={styles.link}>Domino´s Chef</span></Link></small>
                    </div>
                    <div>
                        <button>Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuCart;
