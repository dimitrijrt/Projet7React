import PropTypes from 'prop-types';
import React, {useState} from 'react';
import ArrowUp from "../../assets/icons/ArrowUp";
import style from "./card.scss";


function Card({title, description}) {
    const [toggle, setToggle] = useState(false);
    return (
        <div className='menu'>
            <div className='column'>  
                 <div className='equipements' onClick={() => setToggle(!toggle)}>
                    <span>{title}</span>
                    <span className={toggle ? 'Arrow arrow_up' : 'Arrow arrow_down'}><ArrowUp/></span>
                </div>
                
                <div className='wrapper'>
                    <div className='span'>
                        {toggle
                            ? Array.isArray(description)
                                ? <ul className='equipmentxt' >{description.map((item) => <li>{item}</li>)}</ul>
                                : <p >{description}</p>
                            : ''}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card

