import React from 'react';

const input = (props) => {
    let inputElement = null;
    
    switch(props.elementType) {
        case('input'):
        inputElement = <input
                        {...props.config} 
                        value={props.value}
                        onChange={props.change}/>
        break;
        case('textarea'):
        inputElement = <textarea
                     {...props.config} 
                      value={props.value}
                     onChange={props.change}/>
        break;
        default:
        inputElement = <input
                {...props.config} 
                value={props.value}
                onChange={props.change}/>
    }
    return (
        <div>
            <label>{props.label}</label>
            {inputElement}
        </div>
    );
}

export default input;