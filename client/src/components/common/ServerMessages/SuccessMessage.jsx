
import React from 'react'

const SuccessMessage=(props)=>{
 return(
    <div className="row justify-content-center align-items-center" style={{ color: '#E77E83' }}><h4 className=" d-flex flex-column align-items-center">{props.message}<br /><i className="fab fa-linux"></i></h4> </div>
 )
}

export default SuccessMessage