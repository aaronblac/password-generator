import classes from './button.module.css';

const Button = (props)=>{
    return(
        <button className={`${classes.button}`} onClick={props.action}>{props.content}</button>
    )
}

export default Button;