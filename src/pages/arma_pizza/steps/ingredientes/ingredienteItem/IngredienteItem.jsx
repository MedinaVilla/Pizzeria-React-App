import React, { useState } from 'react';
import Check from '../../../../../components/buttons/check/Check';
import leftG from './../../../../../assets/images/leftG.png';
import centerG from './../../../../../assets/images/centerG.png';
import rightG from './../../../../../assets/images/rightG.png';
import styles from './IngredienteItem.module.css';


const IngredienteItem = ({ ingredient }) => {
    const [toggle, setToggle] = useState(false);

    return (
        <div>
            <li onClick={() => { setToggle(!toggle) }} className={styles.li}><input type="checkbox" value={ingredient} /> {ingredient}</li>
            {toggle ?
                <div className={styles.options}>
                    <div>
                        <img src={leftG} style={{ width: "30px", marginRight: "10px" }} alt="icon" />
                        <img src={centerG} style={{ width: "30px", marginRight: "10px" }} alt="icon" />
                        <img src={rightG} style={{ width: "30px", marginRight: "10px" }} alt="icon" />
                    </div>
                    <div>
                        <Check id={ingredient} />
                    </div>
                </div> : ""}
        </div>
    );
}

export default IngredienteItem;
