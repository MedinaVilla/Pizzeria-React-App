import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2';
import { Link } from 'wouter';
import styles from "./Cart.module.css";

const notifyDeleteElementCart = () => toast.success('El producto se ha eliminado de tu carrito exitosamente');
const notifyEmptyCart = () => toast.success('Tu carrito se ha vaciado extisoamente');

const Cart = () => {
    
    //Cart from localStorage. Meanwhile find a mechanism to control Global State
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) ? JSON.parse(localStorage.getItem("cart")) : []);
    const [total] = useState(974);

    const deleteFromCart = (id) => {
        setCart(cart.filter(function (item) { return item.id !== id }));
        let storage = JSON.parse(localStorage.getItem("cart"));
        if (storage == null) {
            storage = [];
        }
        let sameArticleCart = storage.findIndex((element) => (element.id === id));
        if (sameArticleCart !== -1) {
            storage.splice(sameArticleCart, 1);
            localStorage.setItem("cart", JSON.stringify(storage));
        } else console.log("ERROR")

        notifyDeleteElementCart();
    }
    const setCartEmpty = () => {
        Swal.fire({
            title: '¿Estás seguro de vaciar tu carrito?',
            text: 'Se eliminarán todos tus productos que tienes antes de proceder al pago',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si, vaciar',
            cancelButtonText: 'No, regresar'
        }).then((result) => {
            if (result.isConfirmed) {
                setCart([]);
                localStorage.removeItem("cart");
                notifyEmptyCart();
            } 
        })
    }

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
                    <div className={styles.col_md_1}>
                        <p>Precio</p>
                    </div>
                    <div className={styles.col_md_1}>

                    </div>
                </div>
                {cart.map((item, index) => {
                    return <div key={`row-${index}`} className={styles.row}>
                        <div className={styles.col_md_2}>
                            <img style={{ width: "100%" }} src={item.image} alt={`images-${index}`}></img>
                        </div>
                        <div className={styles.col_md_6}>
                            {item.presentation ? <><p><strong>{item.name} {item.presentation}</strong></p><p>{item.description}</p></> : <strong>{item.size},{item.mitadIzquierda},{item.masa}/{item.mitadDerecha} {item.size},{item.masa}</strong>}
                        </div>
                        <div className={styles.col_md_2}>
                            <p>{item.quantity}</p>
                        </div>
                        <div className={styles.col_md_1}>
                            <strong>${item.price}</strong>
                        </div>
                        <div className={styles.col_md_1}>
                            <p onClick={() => { deleteFromCart(item.id) }} className={styles.close_button}>x</p>
                        </div>
                        <hr className={styles.hr} />
                    </div>
                })}
                <div className={styles.checkout}>
                    <p>Costo de envío <span className={styles.envio}>GRATIS</span></p>
                    <br />
                    <p>Total <span className={styles.total}>${total}</span></p>
                </div>
                <div className={styles.button_group}>
                    <button onClick={() => { setCartEmpty() }}>Vaciar Carrito</button>
                    <Link href="/"><button>Seguir comprando</button></Link>
                    <button>Pagar</button>
                </div>
            </div>
            <Toaster
                position="top-center"
                toastOptions={{
                    duration: 3000,
                    style: {
                        background: '#363636',
                        color: '#fff',
                    }
                }}
            />
        </div>

    );
}

export default Cart;
