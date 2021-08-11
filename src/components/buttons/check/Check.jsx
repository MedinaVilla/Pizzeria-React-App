import React from 'react';
import styles from './Check.module.css';

const Check = ({ id, value, onChange }) => {
    return (
        <ul className={styles.switches}>
            <li>
                <input onChange={onChange} type="checkbox" id={id} defaultChecked={value === true} value={value} />
                <label htmlFor={id}>
                    <span>Extra</span>
                    <span></span>
                </label>
            </li>
        </ul>
    );
}

export default React.memo(Check);
