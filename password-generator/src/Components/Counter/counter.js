import classes from "./counter.module.css";

const Counter = (props)=>{

    return(
        <div className={`${classes.container}`}>
            <div className={`${classes.buttonContainer}`}>
                <button className={`${classes.button}`} onClick={props.decrement}>-</button>
                <strong className={`${classes.counter}`}>{props.charCount}</strong>
                <button className={`${classes.button}`} onClick={props.increment}>+</button>
            </div>
            <span className={`${classes.countText}`}>Character Count</span>
        </div>
    )
}
export default Counter;