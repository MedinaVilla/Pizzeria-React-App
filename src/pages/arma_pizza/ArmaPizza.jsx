import React, { useState } from 'react';
import pizza from './../../assets/images/pizza1.png'
import styles from './ArmaPizza.module.css';

const ArmaPizza = () => {
    const [masasCatalog] = useState(["Original", "Orilla rellena de queso", "Pizza de sartén", "Crunchy"]);
    const [masasDescriptions] = useState(["Masa fresca hecha a mano al momento.", "Masa fresca hecha a mano con orilla rellena de queso 100% mozzarella.", "Masa dorada horneada en sartén, doble capa de queso con ingredientes hasta la orilla.", "Masa delgada y crujiente estilo Italiano."])
    const [sizeCatalog] = useState(["Dominator", "Grande", "Mediana"])
    const [sizeDescriptions] = useState(["30 centímetros", "35 centímetros", "45 centímetros"])
    const [step, setStep] = useState("TAMAÑO Y MASA")
    
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.wrapper_flex}>
                    <div className={styles.section_flex}>
                        <button className={styles.button_active}>TAMAÑO Y MASA</button>
                    </div>
                    <div className={styles.section_flex}>
                        <button className={styles.arrow_pointer}>SALSA Y QUESO</button>
                    </div>
                    <div className={styles.section_flex}>
                        <button className={styles.arrow_pointer}>INGREDIENTES</button>
                    </div>
                </div>
                <div className={styles.wrapper_flex}>
                    <div className={styles.section_flex}>
                        <div align="center">
                            <img src={pizza} alt="pizza" />
                        </div>
                    </div>
                    <div className={styles.section_flex}>
                        <h4>MASA</h4>
                        <ul>
                            {
                                masasCatalog.map((masa, index) => {
                                    return <li key={`item-${index}`} className={styles.li}><input name="masa" id={`option-${index}`} type="radio" value={masa} /> <label for={`menu-${index}`}><strong></strong>{masa}</label><br />
                                        <small>{masasDescriptions[index]}</small>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                    <div className={styles.section_flex}>
                        <h4>TAMAÑO</h4>
                        <ul>
                            {
                                sizeCatalog.map((size, index) => {
                                    return <li key={`item-${index}`} className={styles.li}><input name="size" id={`option-${index}`} type="radio" value={size} /> <label for={`menu-${index}`}>{size}</label><br />
                                        <small>{sizeDescriptions[index]}</small>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div align="right">
                    <button style={{ backgroundColor: "#43AF04", padding: " 10px 50px", color: "white", border: "none", borderRadius: "5px", marginRight: "15px", fontWeight: "bold" }}>Siguiente</button>
                </div>
            </div>
        </div>
    );
}

export default ArmaPizza;
