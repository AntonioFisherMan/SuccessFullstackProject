import React from 'react'
import {Field,reduxForm} from 'redux-form'
import {Input} from '../../common/FormsControls/Input'
import SuccessMessage from '../../common/ServerMessages/SuccessMessage'
import ErrorMessage from '../../common/ServerMessages/ErrorMessage'
import {Button1} from '../../SiteButtons/Button1/Button1'


const ChangePassPage=(props)=>{
   const generateForm = () => {
        return (
            <ReduxChangePassword  onSubmit={props.onSubmit}  errors={props.errors}/> 
        )
    }
  
    return (
        <div>
        {props.success&&props.success.id==='SUCCESS_CHANGE_PASS' ? <SuccessMessage message={props.success.message}/> : generateForm()}
    </div>
    )
   
}
 

const ChangePassForm=(props)=>{
    return(
        <form className="changePassForm" onSubmit={props.handleSubmit}>
                <h5 className="changePassHeadline">Change Password</h5>
                <div className="form-group">
                    <Field type="password"  component={Input} className="form-control" name="oldPass" placeholder="Your old password"
                        required autoFocus />
                </div>
                <div className="form-group">
                    <Field type="password"  component={Input} className="form-control" name="newPass" placeholder="Your new password"
                        required />
                </div>
                <div className="form-group">
                    <Field type="password" component={Input} className="form-control" name="verifyPass" placeholder="Repeat new password"
                        required />
                </div>
                    <Button1  >
                    Save
                        </Button1>
                    {props.errors&&props.errors.id === 'ERROR_CHANGE_PASS' ? <ErrorMessage message={props.errors.message}/>:null}
            </form>
    )
}
    const ReduxChangePassword = reduxForm({
        form: 'changePassForm'
    })(ChangePassForm)

    export default ChangePassPage