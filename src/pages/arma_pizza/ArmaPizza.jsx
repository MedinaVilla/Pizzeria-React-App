import React from 'react';
import styles from './ArmaPizza.module.css';
import { useForm, useStep } from "react-hooks-helper";
import SizeMasaStep from './steps/size_masa_step/SizeMasaStep';
import SalsaQuesoStep from './steps/salsa_queso_step/SalsaQuesoStep';
import Ingredientes from './steps/ingredientes/IngredientesStep';

const defaultData = {
    firstName: ""
};

const steps = ["tamaño_masa", "salsa_queso", "ingredientes"];

const ArmaPizza = () => {

    const [formData, setForm] = useForm(defaultData);
    const { step, navigation } = useStep({
        steps,
        initialStep: 0,
    });
    const props = { formData, setForm, navigation };

    const renderStep = () => {
        switch (step) {
            case "tamaño_masa":
                return <SizeMasaStep {...props} />;
            case "salsa_queso":
                return <SalsaQuesoStep {...props} />;
            case "ingredientes":
                return <Ingredientes {...props} />;
            default: return "";
        }



    }
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
                {
                    renderStep()
                }
            </div>
        </div>

    );
}

export default ArmaPizza;
