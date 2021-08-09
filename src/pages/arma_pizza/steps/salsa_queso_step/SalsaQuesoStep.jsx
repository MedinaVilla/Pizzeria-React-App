import React from 'react';
import pizza from './../../../../assets/images/pizza1.png'
import leftG from './../../../../assets/images/leftG.png';
import centerG from './../../../../assets/images/centerG.png';
import rightG from './../../../../assets/images/rightG.png';

import styles from './SalsaQuesoStep.module.css';
import Check from '../../../../components/buttons/check/Check';

const SalsaQuesoStep = ({ formData, setForm, navigation }) => {
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
                            <img src={leftG} style={{ width: "30px", marginRight: "10px" }} alt="icon" />
                            <img src={centerG} style={{ width: "30px", marginRight: "10px" }} alt="icon" />
                            <img src={rightG} style={{ width: "30px", marginRight: "10px" }} alt="icon" />
                        </div>
                        <div>
                            <Check id={1} />
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
                            <img src={leftG} style={{ width: "30px", marginRight: "10px" }} alt="icon" />
                            <img src={centerG} style={{ width: "30px", marginRight: "10px" }} alt="icon" />
                            <img src={rightG} style={{ width: "30px", marginRight: "10px" }} alt="icon" />
                        </div>
                        <div>
                            <Check id={2} />
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
