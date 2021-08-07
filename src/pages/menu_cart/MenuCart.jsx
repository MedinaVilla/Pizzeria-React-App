import React from 'react';
import ItemToAdd from './item_to_add/ItemToAdd';
import styles from './MenuCart.module.css';

const MenuCart = () => {
    const productToBuy = JSON.parse(localStorage.getItem("to_buy"));

    return (
        <div className={styles.container}>
            <div>
                <h4 className={styles.title}>{productToBuy.name}</h4>
                <p className={styles.subtitle}>{productToBuy.description}</p><br />
                <hr />
                <div>
                    <ItemToAdd item={productToBuy} />
                </div>
            </div>
        </div>
    );
}

export default MenuCart;
