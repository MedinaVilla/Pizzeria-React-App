import React from 'react';
import { useLocation } from 'wouter';
import toast, { Toaster } from 'react-hot-toast';
import styles from "./menuItem.module.css";

const MenuItem = ({ item }) => {
    const [, setLocation] = useLocation();

    const saveProductToBuy = () => {
        localStorage.setItem("to_buy", JSON.stringify(item));
        setLocation(`/menu/ordenar_especialidad/${item.name}`);
    }
    const showDetailsItem = () => {
        toast((t) => (
            <span>
                <p>{item.description}</p>
                <p><strong>Ingredientes:</strong> {item.ingredients}</p>
                <button className={styles.dismiss_button} onClick={() => toast.dismiss(t.id)}>Cerrar</button>
            </span>
        ))
    }
    return (
        <>
            <div className={styles.card}>
                <p>{item.name}</p>
                <img className={styles.image} src={item.image} alt="image1" />
                <div className={styles.containerButton}>
                    <button onClick={() => { showDetailsItem() }}>DETALLES</button>
                    <button onClick={() => { saveProductToBuy() }}>ORDENAR AQUÍ</button>
                </div>
            </div>
            <Toaster position="bottom-center" />
        </>
    );
}

export default React.memo(MenuItem);
