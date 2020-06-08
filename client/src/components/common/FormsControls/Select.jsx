

import React from 'react'
import './Input.css'

export const Select=({input,meta:{touched,error},...props})=>{
    const hasError=error&&touched
    return(
        <div className="formControl">
            <select className={hasError?"error":""} {...input}{...props} />
              {hasError?<span>{error}</span>:null} 
        </div>
    )
}