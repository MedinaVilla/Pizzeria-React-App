import React, { useState } from 'react';
import masa1 from "./../../assets/images/masa1.jpg"
import masa2 from "./../../assets/images/masa2.jpg"
import masa3 from "./../../assets/images/masa3.jpg"
import masa4 from "./../../assets/images/masa4.jpg"


import styles from "./Masas.module.css";

const Masas = () => {
    const [masasCatalog] = useState(["ORIGINAL", "ORILLA RELLENA DE QUESO", "PIZZA DE SARTEN", "CRUNCHY"]);
    const [masasImages] = useState([masa1, masa2, masa3, masa4]);
    const [masasDescriptions] = useState(["Masa fresca hecha a mano al momento.", "Masa fresca hecha a mano con orilla rellena de queso 100% mozzarella.","Masa dorada horneada en sartén, doble capa de queso con ingredientes hasta la orilla.","Masa delgada y crujiente estilo Italiano."])
    const [masaSelected, setMasaSelected] = useState("ORIGINAL");


    return (
        <div className={styles.container}>
            <div className={styles.tabs}>
                {masasCatalog.map((masa,index) => {
                    return <button key={`button-${index}`} className={masaSelected === masa ? styles.tab_active : styles.tab} onClick={() => { setMasaSelected(masa) }}>{masa}</button>
                })}
            </div>
            <div>
                <img className={styles.image} src={masasImages[masasCatalog.findIndex(function (item) { return item === masaSelected })]} alt="images2" />
            </div>
            <div className={styles.description_box}>
                {masasDescriptions[masasCatalog.findIndex(function (item) { return item === masaSelected })]}
            </div>
        </div>
    );
}

export default Masas;
