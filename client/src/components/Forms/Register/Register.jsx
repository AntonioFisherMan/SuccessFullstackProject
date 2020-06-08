import React from 'react'
import { ReduxRegisterForm } from './RegisterForm'
import {register} from '../.././../redux/AuthReducer'
import {connect} from 'react-redux'
import { compose } from 'redux'
import { SuccessErrorsData } from '../../../hoc/SuccessErrorsData'


class Register extends React.Component{
    onSubmit = (formData) => {
       this.props.register( formData.registerName,formData.registerEmail, formData.registerPassword)
    }
 render(){
     return(
         <ReduxRegisterForm onSubmit={this.onSubmit} errors={this.props.errors} />
     )
 }
}


export default compose(
    SuccessErrorsData,
    connect(null,{register})
)(Register)
