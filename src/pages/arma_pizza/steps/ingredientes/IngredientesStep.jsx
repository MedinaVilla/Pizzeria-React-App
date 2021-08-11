import React, { Fragment, useState } from 'react';
import pizza from './../../../../assets/images/pizza1.png'
import styles from './Ingredientes.module.css';
import Swal from 'sweetalert2';
import IngredienteItem from './ingredienteItem/IngredienteItem';

const Ingredientes = ({ formData, setForm, navigation }) => {
    const [ingredients] = useState(["Pepperoni", "Jamón", "Tocino", "Salami", "Chorizo", "Carne Molida", "Pollo", "Champiñones Frescos", "Piña", "Jalapeños", "Aceitunas", "Cebolla", "Pimienta", "Queso Parmesano", "Quesso Cheddar", "Queso Crema", "Salso Mango Habanero"])

    const addToCart = () => {
        const pizza = {
            id: 2232,
            name: formData.name,
            description: formData.description,
            // ingredients: formData.ingredients,
            image: "http://localhost:3000/static/media/pizza1.d147f49c.png",
            masa: formData.masaR,
            salsaQueso: {
                salsa: {
                    part: "", extra: ""
                },
                queso: {
                    part: "", extra: ""
                }
            },
            size: formData.sizeR,
            mitadIzquierda: [],
            mitadDerecha: [],
            quantity: formData.quantity,
            price: Math.floor(Math.random() * 600) + 1
        }
        pizza.salsaQueso.salsa = { part: formData.salsa.part, extra: formData.salsa.extra }
        pizza.salsaQueso.queso = { part: formData.queso.part, extra: formData.queso.extra }

        for (let i = 0; i < 17; i++) {
            let ingredient = formData["ingredient-" + i]
            if (ingredient.selected) {
                if (ingredient.part === 0) {
                    pizza.mitadIzquierda.push({ ingredient: ingredients[i], extra: ingredient.extra });
                }
                if (formData["ingredient-" + i].part === 1) {
                    pizza.mitadIzquierda.push({ ingredient: ingredients[i], extra: ingredient.extra });
                    pizza.mitadDerecha.push({ ingredient: ingredients[i], extra: ingredient.extra });
                }
                if (formData["ingredient-" + i].part === 2) {
                    pizza.mitadDerecha.push({ ingredient: ingredients[i], extra: ingredient.extra });
                }
            }
        }
        let storage = JSON.parse(localStorage.getItem("cart"));
        if (storage == null) {
            storage = [];
        }
        storage.push(pizza);
        localStorage.setItem("cart", JSON.stringify(storage));
        localStorage.removeItem("to_buy");
        Swal.fire('Agregado al carrito', 'Puedes continuar agregando productos', 'success')

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
                    <div>
                        <ul>
                            {
                                ingredients.map((ingredient, index) => {
                                    if (index < 4)
                                        return <Fragment key={`ingredient-${index}`}><IngredienteItem formData={formData} setForm={setForm} ingredient={ingredient} index={index} /></Fragment>
                                    return ""
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className={styles.section_flex}>
                    <div>
                        <ul>
                            {
                                ingredients.map((ingredient, index) => {
                                    if (index > 3)
                                        return <Fragment key={`ingredient-${index}`}><IngredienteItem formData={formData} setForm={setForm} ingredient={ingredient} index={index} /></Fragment>
                                    return ""
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div align="right">
                <button onClick={() => navigation.previous()} style={{ cursor: "pointer", backgroundColor: "#e21d3a", padding: " 10px 50px", color: "white", border: "none", borderRadius: "5px", marginRight: "15px", fontWeight: "bold" }}>Anterior</button>
                <button onClick={() => { addToCart() }} style={{ cursor: "pointer", backgroundColor: "#43AF04", padding: " 10px 50px", color: "white", border: "none", borderRadius: "5px", marginRight: "15px", fontWeight: "bold" }}>Agregar al carrito</button>
            </div>
        </>
    );
}

export default Ingredientes;
