import React, { useState } from 'react';
import PromocionesBox from "./../../components/promociones/Promociones";
import prom1 from './../../assets/images/prom1.png'

import styles from "./promociones.module.css";

const Promociones = () => {
    const [promocionesFCatalog] = useState([{
        id: 1,
        name: "DOMINOSMANIA",
        image:prom1,
        description: "2 Pizzas Grandes, Masa Original de 1 Ingrediente por $199"
    },
    {
        id: 2,
        name: "MEDIANA $99",
        image:prom1,
        description: "Pizza Mediana, Masa Original, hasta con 4 Ingredientes"
    },
    {
        id: 3,
        name: "2 X $89 ADICIONAL + REFRESCOS",
        image:prom1,
        description: "1 Adicional a elegir (Papotas, Canela Baitz, Cajeta Baitz, Cheesy Bread y Cheesy Bread Jalapeño) + Refresco de 1.5Lts + Refresco de 600ml/Agua Natural"
    },
    {
        id: 3,
        name: "GRANDE $120",
        image:prom1,
        description: "3 Adicionales a elegir. 1 pizza Grande de especialidad"
    }
    ])
    const [promociones6Catalog] = useState([{
        id: 1,
        name: "CERO CONTACTO",
        image:prom1,
        description: "Para salvaguardar tu integridad y bienestar, conoce nuestra forma de reparto sin contacto."
    },
    {
        id: 2,
        name: "ORIGINAL GRANDE + PAPOTAS",
        image:prom1,
        description: "Pizza Grande, Masa Original, 2 a 4 Ingredientes + Papotas por $219"
    },
    {
        id: 3,
        name: "ORIGINAL GRANDE + BONELESS",
        image:prom1,
        description: "Pizza Grande, Masa Original,1 Ingrediente + 2 Boneless por $329"
    }])

    return (
        <div className={styles.container}>
            <br />
            <h4 className={styles.title}>¡BUSCA LA MEJOR PROMO PARA TI!</h4>
            <hr />
            <div className={styles.search_cupon}>
                <input placeholder="Ingrese el número del cupón" type="text" />
                <button>Agregar Cupón</button>
            </div>
            <br />
            <h3 className={styles.subtitle}>FAVORITAS</h3>
            <hr />
            <PromocionesBox promociones={promocionesFCatalog} />
            <br />
            <h3 className={styles.subtitle}>HASTA 4 PERSONAS</h3>
            <hr />
            <PromocionesBox promociones={promociones6Catalog}/>
            <br />
            <h3 className={styles.subtitle}>HASTA 6 PERSONAS</h3>
            <hr />
            <PromocionesBox />
        </div>
    );
}

export default Promociones;
