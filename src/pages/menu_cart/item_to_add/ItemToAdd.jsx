import React, { Fragment, useState } from 'react';
import styles from "./ItemToAdd.module.css";
import pizza from "./../../../assets/images/pizza1.png";
import { Link } from 'wouter';

const ItemToAdd = ({ item }) => {
    const [masaCatalog] = useState(["Masa Original", "Masa Sartén", "Masa Orilla Rellena de Queso", "Masa Crunchy"])
    const [sizeCatalog] = useState(["Mediana 30 cm", "Grande 35 cm", "Dominator 45 cm"])

    // const [masaSelected] = useState();

    return (
        <div className={styles.wrapper_grid}>
            <div className={styles.container}>
                <img className={styles.image} src={pizza} alt="image1"></img>
            </div>
            <div className={styles.container}>
                <p className={styles.tab}>MASA</p>
                <ul className={styles.list}>
                    {
                        masaCatalog.map((masa,index) => {
                            return <Fragment key={index}><Link href="xd"><li> {masa}</li></Link></Fragment>
                        })
                    }
                </ul>
            </div>
            <div  className={styles.container}>
            <p className={styles.tab}>TAMAÑO</p>
               <ul className={styles.list}>
                    {
                        sizeCatalog.map((size,index) => {
                            return <Fragment key={index}><Link href="xd"><li> {size}</li></Link></Fragment>
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default ItemToAdd;
