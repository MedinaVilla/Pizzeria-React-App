import React, { useState } from 'react';
import styles from './adicionales.module.css';

// Simulation fetch images from API locally
import bebida1 from "./../../assets/images/bebida1.jpg";
import bebida2 from "./../../assets/images/bebida2.jpg";
import bebida3 from "./../../assets/images/bebida3.jpg";
import bebida4 from "./../../assets/images/bebida4.jpg";
import entrada1 from "./../../assets/images/entrada1.png";
import entrada2 from "./../../assets/images/entrada2.png";
import entrada3 from "./../../assets/images/entrada3.png";
import entrada4 from "./../../assets/images/entrada4.png";
import postre1 from "./../../assets/images/postre1.png";
import postre2 from "./../../assets/images/postre2.png";

import GridAdicionales from '../../components/adicionales/Adicionales_grid';

const Adicionales = () => {
    const [tabs] = useState(["Bebidas", "Entradas", "Postres"]);
    const [tabActive, setTabActive] = useState("Bebidas");
    const [bebidasCatalog] = useState([{
        id: "bebida1",
        name: "PEPSI",
        description: "Experimenta todo el sabor cola, refrescando y amplificando cada momento.",
        presentation: "1.5 L",
        price: 35,
        image: bebida1

    },
    {
        id: "bebida2",
        name: "PEPSI",
        description: "Experimenta todo el sabor cola, refrescando y amplificando cada momento.",
        presentation: "600 ml",
        price: 20,

        image: bebida1
    },
    {
        id: "bebida3",
        name: "PEPSI LIGHT",
        description: "Experimenta todo el sabor cola, refrescando y amplificando cada momento.",
        presentation: "600 ml",
        price: 25,

        image: bebida3
    },
    {
        id: "bebida4",
        name: "7 UP",
        description:"Agua, burbujas y los refrescantes sabores naturales de la lima & limón.",
        price: 30,

        image: bebida2
    },
    {
        id: "bebida5",
        name: "MANZANITA",
        description:"Con un toque de jugo natural de manzana, delicioso aroma y un sabor irresistible.",
        presentation: "1.5 L",
        price: 30,

        image: bebida4
    }
    ]);

    const [entradasCatalog] = useState([{
        id: "entrada1",
        name: "CHEESY BREAD",
        description:"Delicioso pan horneado relleno de queso crema y mozzarella, gratinado con queso mozzarella, cheddar y parmesano.",
        presentation: "8 tiras",
         price: 89,

        image: entrada1

    },
    {
        id: "entrada2",
        name: "CHEESY BREAD CHORIZO JALAPEÑO",
        description:"Delicioso pan hecho a mano y horneado al momento, relleno de queso crema, queso mozzarella, chorizo y rodajas de jalapeño con un toque de finas hierbas. Gratinado con una capa de queso mozzarella, cheddar y parmesano.",
        presentation: "8 tiras",
        price: 89,

        image: entrada2
    },
    {
        id: "entrada3",
        name: "ALITAS NATURALES",
        description:"Deliciosas y horneadas con gran sabor al natural",
        presentation: "230 g",
        price: 99,

        image: entrada3
    },
    {
        id: "entrada4",
        name: "ALITAS CAYENNE",
        description:"Salsa picosita con un toque de diferentes chiles",
        presentation: "230 g",
        price: 99,

        image: entrada4
    }]);

    const [postreCatalog] = useState([{
        id: "postre1",
        name: "CANELA BAITZ",
        description:"Bocados horneados, espolvoreados con canela y azúcar acompañados con un dip sabor cappuccino.",
        presentation: "16 piezas",
        price: 99,

        image: postre1

    },{
        id: "postre2",
        name: "CAJETA BAITZ",
        description:"Deliciosos panecitos cubiertos con cajeta y glass",
        presentation: "16 piezas",
        price: 99,
        
        image: postre2
    }]);

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.button_group}>
                    {tabs.map((tab,index) => {
                        return <button key={`button-${index}`} onClick={() => setTabActive(tab)} className={tabActive === tab ? styles.tab_active : ""}>{tab}</button>
                    })}
                </div>
                {
                    tabActive===tabs[0]?<GridAdicionales items={bebidasCatalog}/>:tabActive===tabs[1]?<GridAdicionales items={entradasCatalog}/>:<GridAdicionales items={postreCatalog}/>
                }
            </div>
        </div>
    );
}

export default Adicionales;
