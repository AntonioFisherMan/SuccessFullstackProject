import React from 'react'
import './Input.css'
export const File=({ input, type, meta: { touched, error, warning } }) => {
    delete input.value
    const hasError=error&&touched
    return (
        <div className="formControl">
        <input style={{width:'230px'}} className={hasError?"error":""} type={type} name={input.name} {...input}   multiple />
        {hasError?<span>{error}</span>:null} 
        </div>
    )
}
