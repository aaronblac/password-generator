import classes from './input.module.css';

const Input = (props)=>{
    return(
        <div className={`${classes.input} ${props.class}`}>
            <span onClick={props.copy}>{props.content}</span>
            <span>Click text to copy</span>
        </div>
    )
}

export default Input;