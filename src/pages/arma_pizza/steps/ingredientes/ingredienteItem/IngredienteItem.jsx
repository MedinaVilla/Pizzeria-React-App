import React, { useState } from 'react';
import Check from '../../../../../components/buttons/check/Check';
import styles from './IngredienteItem.module.css';
import IconsPizza from '../../../../../components/pizza_icons/Icons';


const IngredienteItem = ({ formData, setForm, ingredient, index }) => {
    const data = formData["ingredient-" + index];
    const [toggle, setToggle] = useState(data.selected);

    const setDataIngredients = ({ selected = data.selected, part = data.part, extra = data.extra }) => {
        if (data.selected !== selected) setToggle(!toggle);
        setForm({
            target: {
                name: "ingredient-" + index,
                value: { selected: selected, part: part, extra: extra },
                type: "radio",
                checked: selected,
            }
        })
    }
    return (
        <div>
            <li className={styles.li}><input type="checkbox" name={"ingredient-" + index} checked={data.selected === true} onChange={(e) => { setDataIngredients({ selected: e.target.checked }) }} value={ingredient} /> {ingredient}</li>
            {toggle ?
                <div className={styles.options}>
                    <div>
                        <IconsPizza name={`ingredient-${index}`} value={data.part} onChange={(part) => { setDataIngredients({ part: part }) }} />
                    </div>
                    <div>
                        <Check id={ingredient} value={data.extra} onChange={(e) => { setDataIngredients({ extra: e.target.checked }) }} />
                    </div>
                </div> : ""}
        </div>
    );
}

export default React.memo(IngredienteItem);
