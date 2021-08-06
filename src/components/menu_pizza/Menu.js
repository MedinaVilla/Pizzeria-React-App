import React, { useState } from 'react';
import styles from "./menu.module.css";

import image1 from "./../../assets/images/pizza1.png"
import image2 from "./../../assets/images/pizza2.png"
import image3 from "./../../assets/images/pizza3.png"
import image4 from "./../../assets/images/pizza4.png"
import image5 from "./../../assets/images/pizza5.png"
import image6 from "./../../assets/images/pizza6.png"
import MenuItem from './MenuItem';

const Menu = () => {
    // Images fetched dinamic
    const pizzas = useState([{
        name: "PEPPERONI ESPECIAL",
        image:image1
    },
    {
        name: "MEXICANA",
        image:image2
    },
    {
        name: "CARNES FRIAS",
        image:image3
    },
    {
        name: "CUATRO QUESOS",
        image:image4
    },
    {
        name: "VEGGIE",
        image:image5
    },
    {
        name: "HAWAIANA",
        image:image6
    }
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
