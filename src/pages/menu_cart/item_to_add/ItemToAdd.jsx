import React, { Fragment, useState } from 'react';
import styles from "./ItemToAdd.module.css";
import pizza from "./../../../assets/images/pizza1.png";
import Swal from 'sweetalert2';
import { Link } from 'wouter';

const ItemToAdd = ({ item }) => {
    const [masaCatalog] = useState(["Masa Original", "Masa Sartén", "Masa Orilla Rellena de Queso", "Masa Crunchy"]);
    const [sizeCatalog] = useState(["Mediana 30 cm", "Grande 35 cm", "Dominator 45 cm"]);
    const [mitadIzquierdaCatalog] = useState(["EXTRAVAGANZZA", "DELUXE", "HAWAIANA", "HONOLULU", "CHICKEN HAWAIANA", "PEPPERONI ESPECIAL", "MEXICANA", "CARNES FRIAS", "CUATRO QUESOS", "VEGGIE"])
    const [mitadDerechaCatalog] = useState(["EXTRAVAGANZZA", "DELUXE", "HAWAIANA", "HONOLULU", "CHICKEN HAWAIANA", "PEPPERONI ESPECIAL", "MEXICANA", "CARNES FRIAS", "CUATRO QUESOS", "VEGGIE"])

    const [mitadIzqSelected, setMitadIzq] = useState(item.name);
    const [mitadDerSelected, setMitadDer] = useState(item.name);
    const [masaSelected, setMasaSelected] = useState(masaCatalog[0]);
    const [sizeSelected, setSizeSelected] = useState(sizeCatalog[0]);
    const [quantity, setQuantity] = useState(1);

    const addToCart = () => {

        const pizza = {
            id: item.id,
            name: item.name,
            // description: item.description,
            // ingredients: item.ingredients,
            image: "http://localhost:3000/static/media/pizza1.d147f49c.png",
            masa: masaSelected,
            size: sizeSelected,
            salsaQueso: {
                salsa: {
                    part: 1, extra: false
                },
                queso: {
                    part: 1, extra: false
                }
            },
            mitadIzquierda: [{ingredient: mitadIzqSelected, extra:false}],
            mitadDerecha: [{ingredient: mitadDerSelected, extra:false}],
            quantity: quantity,
            price: Math.floor(Math.random() * 600) + 1
        }

        let storage = JSON.parse(localStorage.getItem("cart"));
        if (storage == null) {
            storage = [];
        }
        storage.push(pizza);
        localStorage.setItem("cart", JSON.stringify(storage));
        localStorage.removeItem("to_buy");
        Swal.fire('Agregado al carrito', 'Puedes continuar agregando productos', 'success');
    }

    return (
        <div>
            <div className={styles.wrapper_grid}>
                <div alignt="center" className={styles.container}>
                    <img className={styles.image} src={pizza} alt="image1"></img>
                </div>
                <div className={styles.container}>
                    <p className={styles.tab}>MASA</p>
                    <ul className={styles.list}>
                        {
                            masaCatalog.map((masa, index) => {
                                return <Fragment key={index}><li className={masaSelected === masa ? styles.link_active : ""} onClick={() => { setMasaSelected(masa) }}> {masa}</li></Fragment>
                            })
                        }
                    </ul>
                </div>
                <div className={styles.container}>
                    <p className={styles.tab}>TAMAÑO</p>
                    <ul className={styles.list}>
                        {
                            sizeCatalog.map((size, index) => {
                                return <Fragment key={`size-${index}`}><li className={sizeSelected === size ? styles.link_active : ""} onClick={() => { setSizeSelected(size) }}> {size}</li></Fragment>
                            })
                        }
                    </ul>
                </div>
            </div>
            <hr />
            <div className={styles.bottomFlex}>
                <div>
                    <h3>CANTIDAD</h3>
                    <input onChange={(e) => setQuantity(e.target.value)} className={styles.inputNumber} defaultValue={1} type="number" />
                </div>
                <div>
                    <h3>MITAD Y MITAD</h3>
                    <div className={styles.bottomFlex}>
                        <div >
                            <h4>Mitad izquierda</h4>
                            <select onChange={(e) => setMitadIzq(e.target.value)} className={styles.select} defaultValue={item.name}>
                                {mitadIzquierdaCatalog.map((mitadIzquierda, index) => {
                                    return <option key={`option-${index}`} value={mitadIzquierda}>{mitadIzquierda}</option>
                                })}
                            </select>
                        </div>
                        <div>
                            <h4>Mitad Derecha</h4>
                            <select onChange={(e) => setMitadDer(e.target.value)} className={styles.select} defaultValue={item.name}>
                                {mitadDerechaCatalog.map((mitadDerecha, index) => {
                                    return <option key={`option-${index}`} value={mitadDerecha}>{mitadDerecha}</option>
                                })}
                            </select>
                        </div>
                    </div>
                </div>
            </div> <br />
            <hr />
            <div className={styles.bottomFlex}>
                <div>
                    <small>¿Quieres cambiar algún ingrediente? Utiliza nuestro <Link href="#"><span className={styles.link}>Domino´s Chef</span></Link></small>
                </div>
                <div>
                    <button onClick={() => { addToCart() }}>Agregar al carrito</button>
                </div>
            </div>
        </div>
    );
}

export default ItemToAdd;
