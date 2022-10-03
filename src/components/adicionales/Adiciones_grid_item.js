import React, { useEffect, useState } from 'react';
import styles from "./Adicionales_grid.module.css";
import Swal from 'sweetalert2';

const AdicionesGridItem = ({ item }) => {

    const [inputValue, setInputValue] = useState(0)

    useEffect(() => {
        let storage = JSON.parse(localStorage.getItem("cart"));
        if (storage == null) {
            storage = [];
        }
        let sameArticleCart = storage.findIndex((element) => { console.log(element); return (element.id === item.id && element.name === item.name) });
        if (sameArticleCart >= 0) {
            setInputValue(storage[sameArticleCart].quantity)
        } else {
            setInputValue(0)

        }
    }, [item.id, item.name])


    const addToCart = (item, quantity) => {
        if (quantity < 0) {
            return;
        }
        const adicional = {
            id: item.id,
            name: item.name,
            description: item.description,
            presentation: item.presentation,
            image: item.image,
            quantity: quantity,
            price: item.price
        }

        let storage = JSON.parse(localStorage.getItem("cart"));
        if (storage == null) {
            storage = [];
        }
        let sameArticleCart = storage.findIndex((element) => (element.id === item.id && element.name === item.name));
        if (sameArticleCart >= 0) {
            let quantityActual = parseInt(storage[sameArticleCart].quantity);
            let quantityNuevo = quantityActual + (quantity - quantityActual)
            if (quantityNuevo === 0) {
                let sameArticleCart = storage.findIndex((element) => (element.id === item.id));
                if (sameArticleCart !== -1) {
                    storage.splice(sameArticleCart, 1);
                    localStorage.setItem("cart", JSON.stringify(storage));
                    Swal.fire('Producto quitado del carrito', 'Puedes continuar agregando productos', 'success');
                } else console.log("ERROR")
            } else {
                storage[sameArticleCart].quantity = quantityActual + (quantity - quantityActual);
                Swal.fire('Cantidad modificada en el carrito', 'Puedes continuar agregando productos', 'success');
            }
        } else {
            storage.push(adicional);
            Swal.fire('Agregado al carrito', 'Puedes continuar agregando productos', 'success');
        }
        setInputValue(quantity)
        localStorage.setItem("cart", JSON.stringify(storage));
    }

    return (
        <div className={styles.container} >
            <div className={styles.title_card}>{item.name}</div>
            <div align="center"><img className={styles.image_card} src={item.image} alt="item" /></div>
            <div className={styles.description_box}>
                <div>{item.presentation}</div>
                <div>  <input onChange={((e) => { addToCart(item, e.target.value) })} className={styles.inputNumber} value={inputValue} type="number" /></div>
            </div>
        </div>
    );
}

export default AdicionesGridItem;
