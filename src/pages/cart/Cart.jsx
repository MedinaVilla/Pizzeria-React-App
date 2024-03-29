import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2';
import { Link } from 'wouter';
import styles from "./Cart.module.css";

const notifyDeleteElementCart = () => toast.success('El producto se ha eliminado de tu carrito exitosamente');
const notifyEmptyCart = () => toast.success('Tu carrito se ha vaciado extisoamente');

const Cart = () => {
    //Cart from localStorage. Meanwhile find a mechanism to control Global State
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) ? JSON.parse(localStorage.getItem("cart")) : []);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        if (cart.length === 0) {
            setTotal(0);
        } else if (cart.length === 1) {
            setTotal(cart[0].price)
        } else if (cart.length > 1) {
            const priceTotal = cart.reduce((previousValue, currentValue) => {
                let price = currentValue.price * currentValue.quantity;
                return previousValue + price;
            }, 0)
            setTotal(priceTotal);
        }

    }, [cart]);

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

    const getBasePizza = (base, mitad) => {
        let baseMitad = "";
        if (base.salsa.part !== mitad) {
            baseMitad = baseMitad + "Salsa";
            if (base.salsa.extra === true) {
                baseMitad = baseMitad + " Extra"
            }
        }
        if (base.queso.part !== mitad) {
            baseMitad = baseMitad + " Queso"
            if (base.queso.extra === true) {
                baseMitad = baseMitad + " Extra"
            }
        }
        return baseMitad;
    }

    const renderItemPizza = (item) => {
        let mitadIzquierda = ",";
        let mitadDerecha = ",";
        let baseIzquierda = getBasePizza(item.salsaQueso, 2);
        let baseDerecha = getBasePizza(item.salsaQueso, 0);

        mitadIzquierda = item.mitadIzquierda.map((e) => { let extra = e.extra === true ? " extra" : ""; return e.ingredient + "" + extra + " " });
        mitadDerecha = mitadDerecha + item.mitadDerecha.map((e) => { let extra = e.extra === true ? " extra" : ""; return e.ingredient + "" + extra + " " });
        return <strong>{item.size} {mitadIzquierda},{item.masa}, {baseIzquierda} /{item.size} {mitadDerecha},{item.masa} {baseDerecha}</strong>;

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
                            {item.description ? <><p><strong>{item.name} {item.presentation}</strong></p><p>{item.description}</p></> : renderItemPizza(item)}
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
                    <button onClick={() => {
                        Swal.fire({
                            title: '¡Tu orden ha sido pedido exitosamente!',
                            text: 'Puedes hacer un seguimiento de tu pedido en el Dominos Tracker.',
                            icon: 'success',
                        })
                    }} disabled={total === 0 ? true : false}>Pagar</button>
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
