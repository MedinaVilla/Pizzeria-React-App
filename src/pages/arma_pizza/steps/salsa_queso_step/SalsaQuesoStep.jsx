import React from 'react';
import pizza from './../../../../assets/images/pizza1.png'

import styles from './SalsaQuesoStep.module.css';
import Check from '../../../../components/buttons/check/Check';
import IconsPizza from '../../../../components/pizza_icons/Icons';

const SalsaQuesoStep = ({ formData, setForm, navigation }) => {
    const data = formData;

    const setDataSalsaQueso = ({ name, part = data[name].part, extra = data[name].extra }) => {
        setForm({
            target: {
                name: name,
                value: { part: part, extra: extra },
                type: "radio",
                checked: extra,
            }
        })
    }

    return (
        <>
            <div className={styles.wrapper_flex}>
                <div className={styles.section_flex}>
                    <div align="center">
                        <img src={pizza} alt="pizza" />
                    </div>
                </div>
                <div className={styles.section_flex}>
                    <h4>SALSA</h4><br />
                    <ul>
                        <li className={styles.li}>Salsa de tomate</li><br />
                    </ul>
                    <div className={styles.options}>
                        <div>
                            <IconsPizza name="salsa" value={data.salsa.part} onChange={(part) => { setDataSalsaQueso({ name: "salsa", part: part }) }}  />
                        </div>
                        <div>
                            <Check id={1} value={data.salsa.extra} onChange={(e) => { setDataSalsaQueso({ name: "salsa", extra: e.target.checked }) }} />
                        </div>
                    </div>
                </div>
                <div className={styles.section_flex}>
                    <h4>QUESO</h4><br />
                    <ul>
                        <li className={styles.li}>Queso 100% Mozarella</li><br />

                    </ul>
                    <div className={styles.options}>
                        <div>
                            <IconsPizza name="queso" value={data.queso.part} onChange={(part) => { setDataSalsaQueso({ name: "queso", part: part }) }} />
                        </div>
                        <div>
                            <Check id={2} value={data.queso.extra} onChange={(e) => { setDataSalsaQueso({ name: "queso", extra: e.target.checked }) }} />
                        </div>
                    </div>
                </div>
            </div>
            <div align="right">
                <button onClick={() => navigation.previous()} style={{ cursor: "pointer", backgroundColor: "#e21d3a", padding: " 10px 50px", color: "white", border: "none", borderRadius: "5px", marginRight: "15px", fontWeight: "bold" }}>Anterior</button>
                <button onClick={() => navigation.next()} style={{ cursor: "pointer", backgroundColor: "#43AF04", padding: " 10px 50px", color: "white", border: "none", borderRadius: "5px", marginRight: "15px", fontWeight: "bold" }}>Siguiente</button>
            </div>
        </>
    );
}

export default SalsaQuesoStep;
