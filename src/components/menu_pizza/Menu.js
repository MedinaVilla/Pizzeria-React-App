import React, { useState } from 'react';
import styles from "./menu.module.css";

import image1 from "./../../assets/images/pizza1.png"
import image2 from "./../../assets/images/pizza2.png"
import image3 from "./../../assets/images/pizza3.png"
import image4 from "./../../assets/images/pizza4.png"
import image5 from "./../../assets/images/pizza5.png"
import image6 from "./../../assets/images/pizza6.png"
import image7 from "./../../assets/images/pizza7.png"
import MenuItem from './MenuItem';

const Menu = () => {
    // Images fetched dinamic
    const pizzas = useState([{
        id: 1,
        name: "PEPPERONI ESPECIAL",
        description: "La combinación perfecta entre Pepperoni y Champiñones, con un gran sabor y horneado al momento.",
        ingredients: "Pepperoni, Champiñones Frescos y Extra Queso",
        image: image1
    },
    {
        id: 2,
        name: "MEXICANA",
        image: image2,
        description: "La pizza con los sabores auténticos de nuestro país. Chorizo, carne molida, jalapeño, cebolla",
        ingredients: "Chorizo, Carne Molida, Cebolla y Jalapeño"
    },
    {
        id: 3,
        name: "CARNES FRIAS",
        image: image3,
        description: "La pizza para los amantes de la carne. Salami, pepperoni, jamón, finas hierbas.",
        ingredients: "Pepperoni, Salami, Jamón y Finas Hierbas"
    },
    {
        id: 4,
        name: "CUATRO QUESOS",
        image: image4,
        description: "La pizza pensada en los amantes del queso. Queso mozzarella, queso crema, queso cheddar, queso parmesano.",
        ingredients: " Queso Crema, Mozzarella, Parmesano y Cheddar"
    },
    {
        id: 5,
        name: "VEGGIE",
        image: image5,
        description: "¡Sólo vegetales! Nuestra opción sin carne. Pimiento, champiñones, aceitunas, cebolla.",
        ingredients: "Pimiento, Cebolla, Champiñones Frescos y Aceitunas"
    },
    {
        id: 6,
        name: "HAWAIANA",
        image: image6,
        description: "La pizza que unos cuestionan pero todos aman. Jamón, piña.",
        ingredients: "Jamón y Piña"
    },
    {
        id: 7,
        name: "HONOLULU",
        image: image7,
        description: "La pizza con la perfecta combinación dulce-salado. Jamón, tocino, piña, jalapeño.",
        ingredients: "Jamón, Piña, Tocino y Jalapeño"
    },

    ])


    return (
        <div className={styles.wrapper_grid}>
            {pizzas[0].map((pizza, index) => {
                return <div key={`menu-${index}`} className={styles.container}>
                    <MenuItem item={pizza} />
                </div>
            })}
        </div>

    );
}

export default Menu;
