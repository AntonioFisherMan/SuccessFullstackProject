import React from 'react'
import './ChangePass.css'

import {changeUserPass} from '../../../redux/AuthReducer'
import { SuccessErrorsData } from '../../../hoc/SuccessErrorsData'

import {connect} from 'react-redux'
import { compose } from 'redux'
import ChangePassPage from './ChangePassForm'

class ChangePass extends React.Component {
     onSubmit=(formData)=>{
        this.props.changeUserPass(formData.oldPass,formData.newPass,formData.verifyPass)
    }
    render(){
        return(
               <ChangePassPage onSubmit={this.onSubmit} success={this.props.success} errors={this.props.errors}/>
        )
    }
}





export default compose(
    SuccessErrorsData,
    connect(null, { changeUserPass})
)(ChangePass)
