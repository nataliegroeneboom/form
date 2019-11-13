import React from 'react';
import styles from './Input.module.css';

const input = (props) =>{ 
    let inputElement = null;

    switch(props.elementType){
        case('input'):
        inputElement = <input 
                    onChange={props.changed}
                    className={styles.InputElement} 
                    {...props.elementConfig} 
                    value={props.value}
                    
                    />
        break;
        case('textarea'): 
        inputElement = <textarea  
                    onChange={props.changed}
                    className={styles.InputElement} 
                    {...props.elementConfig}
                    value={props.value}/>
    case('select'): 
    inputElement = <select
                onChange={props.changed}
                className={styles.InputElement} 
                value={props.value}>
                  {props.elementConfig.options.map(option =>(
                       <option key={option.key} value={option.key}>{option.value}</option>
                   )  
                  ) }
                </select>            
    break;
        default:
            inputElement = <input 
                            className={styles.InputElement} 
                            {...props.elementConfig} 
                            value={props.value}/>
    }
    
    return (
    <div className={styles.Input}>
        <label className={styles.Label}>{props.label}</label>
        {inputElement}
    </div>
    );
}

export default input;