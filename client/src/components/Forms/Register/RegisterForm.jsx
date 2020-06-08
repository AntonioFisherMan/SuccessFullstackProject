import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { Input } from '../../common/FormsControls/Input'
import { required, MinLength, MaxLength } from '../../../utils/Validators/validators'
import ErrorMessage from '../../common/ServerMessages/ErrorMessage'
import {Button1}  from '../../SiteButtons/Button1/Button1'

const MaxLengthCreator50 = MaxLength(50)
const MinLengthCreator5 = MinLength(5)

const RegisterForm = (props) => {
    return (
        <form className="signForm" onSubmit={props.handleSubmit}>
      

            <div className="signPopUpBlock">
                <hr />
                <div className="signPopUp">
                    <p>Or</p>
                </div>
                <hr />
            </div>
            <div className="form-group">
                <div className="form-group">
                    <Field type="Name" id="registerName" component={Input} validate={[required, MaxLengthCreator50]} name={"registerName"} className="form-control" placeholder="Enter  name" required />
                </div>
                <div className="form-group">
                    <Field type="email" id="registerEmail" component={Input} validate={[required, MinLengthCreator5, MaxLengthCreator50]} name={"registerEmail"} className="form-control" placeholder="Enter  email" required />
                </div>
                <div className="form-group">
                    <Field type="password" id="registerPass" component={Input} validate={[required, MinLengthCreator5, MaxLengthCreator50]} name={"registerPassword"} className="form-control" placeholder="Enter  password" required />
                </div>
            </div>
            <p className="signGrey">By joining I agree to receive emails from DressItBox</p>

            <Button1 style={{marginTop:'30px'}}>
            Register
             </Button1>
            {props.errors&&props.errors.id === 'REGISTER_FAIL' ? <ErrorMessage message={props.errors.message}/>:null}
        </form>
    )
}
export const ReduxRegisterForm = reduxForm({
    form: 'register'
})(RegisterForm)
