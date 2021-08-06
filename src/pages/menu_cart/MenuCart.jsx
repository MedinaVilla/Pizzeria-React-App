import React from 'react';
import ItemToAdd from './item_to_add/ItemToAdd';
import styles from './MenuCart.module.css';

const MenuCart = () => {
    return (
        <div className={styles.container}>
            <div>
                <h4 className={styles.title}>Pepperoni Especial</h4>
                <p className={styles.subtitle}>Pepperoni, Champiñones Frescos y Extra Queso</p><br />
                <hr/>
                <div>
                    <ItemToAdd item={{ name: "Pepperoni Especial" }} />
                </div>
            </div>
        </div>
    );
}

export default MenuCart;
