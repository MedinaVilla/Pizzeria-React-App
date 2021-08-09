import React from 'react';
import styles from './ArmaPizza.module.css';
import { useForm, useStep } from "react-hooks-helper";
import SizeMasaStep from './steps/size_masa_step/SizeMasaStep';
import SalsaQuesoStep from './steps/salsa_queso_step/SalsaQuesoStep';
import Ingredientes from './steps/ingredientes/IngredientesStep';

const defaultData = {
    firstName: ""
};

const steps = ["TAMAÑO Y MASA", "SALSA Y QUESO", "INGREDIENTES"];

const ArmaPizza = () => {
    const [formData, setForm] = useForm(defaultData);
    const { step, navigation } = useStep({
        steps,
        initialStep: 0,
    });
    const props = { formData, setForm, navigation };

    const renderStep = () => {
        switch (step) {
            case steps[0]:
                return <SizeMasaStep {...props} />;
            case steps[1]:
                return <SalsaQuesoStep {...props} />;
            case steps[2]:
                return <Ingredientes {...props} />;
            default: return "";
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.wrapper_flex}>
                    {
                        steps.map((s, index) => {
                            return <div key={`item-${index}`} className={styles.section_flex}>
                                <button className={step === s ? styles.button_active : styles.arr}>TAMAÑO Y MASA</button>
                            </div>
                        })
                    }
                </div>
                {
                    renderStep()
                }
            </div>
        </div>

    );
}

export default ArmaPizza;
