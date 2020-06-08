import React from 'react'
import { ReduxLoginForm } from './LoginForm'
import {login} from '../.././../redux/AuthReducer'
import {connect} from 'react-redux'
import { compose } from 'redux'
import { SuccessErrorsData } from '../../../hoc/SuccessErrorsData'


class Login extends React.Component{
    onSubmit = (formData) => {
       this.props.login(formData.email,formData.password,formData.rememberMe)
    }
    render(){
     return(
         <ReduxLoginForm onSubmit={this.onSubmit} errors={this.props.errors} />
     )
 }
}


export default compose(SuccessErrorsData,
connect(null,{login}))(Login)

