import React, { useState } from 'react';
import styles from "./Cart.module.css";

const Cart = () => {
    const [cart] = useState(JSON.parse(localStorage.getItem("cart")))
    return (
        <div className={styles.container}>
            <h4 className={styles.subtitle}>REVISA Y MODIFICA TUS PRODUCTOS AQUÍ</h4>
            <div className={styles.cartView}>
                <div className={styles.row}>
                    <div className={styles.col_md_2}>
                        <p>Producto</p>
                    </div>
                    <div className={styles.col_md_6}>
                        <p>Descripción</p>
                    </div>
                    <div className={styles.col_md_2}>
                        <p>Cantidad</p>
                    </div>
                    <div className={styles.col_md_2}>
                        <p>Precio</p>
                    </div>
                </div>
                {cart.map((item, index) => {
                    return <div key={`row-${index}`} className={styles.row}>
                        <div className={styles.col_md_2}>
                            <img style={{ width: "100%" }} src={item.image} alt={`images-${index}`}></img>
                        </div>
                        <div className={styles.col_md_6}>
                            <strong>{item.size},{item.mitadIzquierda},{item.masa}/{item.mitadDerecha} {item.size},{item.masa}</strong>
                        </div>
                        <div className={styles.col_md_2}>
                            <p>{item.quantity}</p>
                        </div>
                        <div className={styles.col_md_2}>
                            <strong>$268</strong>
                        </div>
                    </div>

                })}
            </div>
        </div>

    );
}

export default Cart;
