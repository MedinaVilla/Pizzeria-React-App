import React from 'react';
import CarouselImage from '../../components/Carousel';

import styles from "./main.module.css";
import carousel1 from "./../../assets/images/carousel1.png";
import carousel2 from "./../../assets/images/carousel2.png";
import Menu from '../../components/menu_pizza/Menu';

const Main = () => {
    return (
        <div >
            <CarouselImage images={[carousel1, carousel2]} />
            <div>
                <br />
                <h4 className={styles.title}>ELIGE TU PIZZA</h4>
                <Menu />
            </div>
        </div>
    );
}

export default Main;
