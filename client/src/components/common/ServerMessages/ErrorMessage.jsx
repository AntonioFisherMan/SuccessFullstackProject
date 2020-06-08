import React from 'react'
import { Alert } from 'reactstrap'


const ErrorMessage=(props)=>{
    return(
        <div className="errorMessage">
       {props.message?<Alert color="danger">{props.message}</Alert> : null} 
       </div>
    )
}
export default ErrorMessage