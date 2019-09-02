import React from 'react';
import classes from './Input.css';

const Input = (props) => {

    let inputType = null;
    const inputClasses = [classes.InputElement];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid)
    }

    switch (props.elementType) {
        case ('input'):
            inputType = <input onChange={props.changed} className={inputClasses.join(' ')} {...props.elementConfig} value={props.value}/>
            break;
        case ('textarea'):
            inputType = <textarea onChange={props.changed} className={inputClasses.join(' ')} {...props.elementConfig} value={props.value}/>
            break;
        case ('select'):
                inputType = (
                    <select onChange={props.changed}
                    className={inputClasses.join(' ')}
                    value={props.value}>
                        {props.elementConfig.options.map( option => (
                            <option key={option.value} value={option.value}>
                            {option.displayValue}
                            </option>
                        )  )}
                    </select>
                )
                break;    
        default:
            inputType = <input onChange={props.changed} className={inputClasses.join(' ')} {...props.elementConfig} value={props.value}/>     
    }



    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputType}
        </div>
    );
}

export default Input;