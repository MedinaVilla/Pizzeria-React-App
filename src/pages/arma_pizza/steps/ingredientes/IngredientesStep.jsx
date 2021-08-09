import React, { Fragment, useState } from 'react';
import pizza from './../../../../assets/images/pizza1.png'
import styles from './Ingredientes.module.css';
import Swal from 'sweetalert2';
import IngredienteItem from './ingredienteItem/IngredienteItem';

const Ingredientes = ({ formData, setForm, navigation }) => {
    const [ingredients] = useState(["Pepperoni", "Jamón", "Tocino", "Salami"])
    const [ingredients2] = useState(["Chorizo", "Carne Molida", "Pollo", "Champiñones Frescos", "Piña", "Jalapeños", "Aceitunas", "Cebolla", "Pimienta", "Queso Parmesano", "Quesso Cheddar", "Queso Crema", "Salso Mango Habanero"])

    return (
        <>
            <div className={styles.wrapper_flex}>
                <div className={styles.section_flex}>
                    <div align="center">
                        <img src={pizza} alt="pizza" />
                    </div>
                </div>
                <div className={styles.section_flex}>
                    <div>
                        <ul>
                            {
                                ingredients.map((ingredient, index) => {
                                    return <Fragment key={`ingredient-${index}`}><IngredienteItem ingredient={ingredient} /></Fragment>
                                })

                            }
                        </ul>
                    </div>
                </div>
                <div className={styles.section_flex}>
                    <div>
                        <ul>
                            {
                                ingredients2.map((ingredient,index) => {
                                    return <Fragment key={`ingredient-${index}`}><IngredienteItem ingredient={ingredient} /></Fragment>
                                })

                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div align="right">
                <button onClick={() => navigation.previous()} style={{ cursor: "pointer", backgroundColor: "#e21d3a", padding: " 10px 50px", color: "white", border: "none", borderRadius: "5px", marginRight: "15px", fontWeight: "bold" }}>Anterior</button>
                <button onClick={() => Swal.fire('Agregado al carrito', 'Puedes continuar agregando productos', 'success')} style={{ cursor: "pointer", backgroundColor: "#43AF04", padding: " 10px 50px", color: "white", border: "none", borderRadius: "5px", marginRight: "15px", fontWeight: "bold" }}>Agregar al carrito</button>
            </div>
        </>
    );
}

export default Ingredientes;
