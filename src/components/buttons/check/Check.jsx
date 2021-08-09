import React from 'react';
import styles from './Check.module.css';

const Check = ({id}) => {
    return (
        <ul className={styles.switches}>
            <li>
                <input type="checkbox" id={id} />
                <label htmlFor={id}>
                    <span>Extra</span>
                    <span></span>
                </label>
            </li>
        </ul>
    );
}

export default Check;
