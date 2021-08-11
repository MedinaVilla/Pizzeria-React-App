import React, { Fragment, useState } from 'react';

import leftG from './../../assets/images/leftG.png';
import centerG from './../../assets/images/centerG.png';
import rightG from './../../assets/images/rightG.png';
import leftB from './../../assets/images/leftB.png';
import centerB from './../../assets/images/centerB.png';
import rightB from './../../assets/images/rightB.png';

const IconsPizza = ({ name, value, onChange }) => {
    const imagesNoSelected = [leftG, centerG, rightG];
    const imagesSelected = [leftB, centerB, rightB];
    const [selected, setSelected] = useState(value);

    const handleChange = (value) => {
        setSelected(parseInt(value));
        onChange(parseInt(value))
    }

    return (
        <>
            {
                imagesNoSelected.map((i, index) => {
                    const styleNoSelected = {
                        display: "inline-block",
                        background: `url(${i}) no-repeat`,
                        height: "32px",
                        width: '32px',
                        marginRight: "10px"
                    }
                    const styleSelected = {
                        display: "inline-block",
                        background: `url('${imagesSelected[index]}') no-repeat`,
                        height: "32px",
                        width: '32px',
                        marginRight: "10px"

                    }
                    return <Fragment key={index}>
                        <input name={name} style={{ display: 'none' }} onChange={(e) => { handleChange(e.target.value) }} checked={value===index} value={index} type="radio" id={`${name}-${index}`} />
                        <label style={selected === index ? styleSelected : styleNoSelected} htmlFor={`${name}-${index}`}>
                            <span></span>
                            <span></span>
                        </label>
                    </Fragment>
                })
            }
        </>
    );
}

export default React.memo(IconsPizza);
