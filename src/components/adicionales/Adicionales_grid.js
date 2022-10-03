import React from 'react';
import styles from "./Adicionales_grid.module.css";
import AdicionesGridItem from './Adiciones_grid_item';

const GridAdicionales = ({ items }) => {

    return (
        <div className={styles.grid}>
            {
                items.map((item, index) => {
                    return <React.Fragment key={`card-${index}`}>
                        <AdicionesGridItem item={item}></AdicionesGridItem>
                    </React.Fragment>
                })
            }
        </div>
    );
}

export default GridAdicionales;
