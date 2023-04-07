import React from "react";
import classes from "./toggle-switch.module.css";

const ToggleSwitch = (props) => {
    return(
        <div className={`${classes.container}`}>
            <div className={`${classes.toggleSwitch}`}>
                <input type="checkbox" className={`${classes.checkbox}`} 
                        name={props.label} id={props.label} onChange={props.check}/>
                <label className={`${classes.label}`} htmlFor={props.label}>
                    <span className={`${classes.inner}`} />
                    <span className={`${classes.switch}`} />
                </label>
            </div>
            {props.label}
        </div>
    )
}

export default ToggleSwitch;