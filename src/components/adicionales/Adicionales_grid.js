import React from 'react';
import Swal from 'sweetalert2';
import styles from "./Adicionales_grid.module.css";

const GridAdicionales = ({ items }) => {

    const checkCartExist = (item) => {
        let storage = JSON.parse(localStorage.getItem("cart"));
        if (storage == null) {
            storage = [];
        }
        let sameArticleCart = storage.findIndex((element) => (element.id === item.id && element.name === item.name));
        if (sameArticleCart > 0) {
            return storage[sameArticleCart].quantity;
        } else return 0;
    }


    const addToCart = (item, quantity) => {
        const adicional = {
            id: item.id,
            name: item.name,
            description: item.description,
            presentation: item.presentation,
            image: item.image,
            quantity: quantity,
            price: Math.floor(Math.random() * 600) + 1
        }

        let storage = JSON.parse(localStorage.getItem("cart"));
        if (storage == null) {
            storage = [];
        }
        let sameArticleCart = storage.findIndex((element) => (element.id === item.id && element.name === item.name));
        if (sameArticleCart > 0) {
            let quantityActual = parseInt(storage[sameArticleCart].quantity);
            storage[sameArticleCart].quantity = quantityActual + (quantity - quantityActual);
            Swal.fire('Quitado del carrito', 'Puedes continuar agregando productos', 'success');
        } else {
            storage.push(adicional);
            Swal.fire('Agregado al carrito', 'Puedes continuar agregando productos', 'success');
        }
        localStorage.setItem("cart", JSON.stringify(storage));
    }

    return (
        <div className={styles.grid}>
            {
                items.map((item, index) => {
                    return <div className={styles.container} key={`card-${index}`}>
                        <div className={styles.title_card}>{item.name}</div>
                        <div align="center"><img className={styles.image_card} src={item.image} alt="item" /></div>
                        <div className={styles.description_box}>
                            <div>{item.presentation}</div>
                            <div>  <input onChange={((e) => { addToCart(item, e.target.value) })} className={styles.inputNumber} defaultValue={checkCartExist(item)} type="number" /></div>
                        </div>
                    </div>
                })
            }
        </div>
    );
}

export default GridAdicionales;
