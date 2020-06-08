import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { Input } from '../../common/FormsControls/Input'
import { required, MinLength, MaxLength } from '../../../utils/Validators/validators'
import {Link  } from 'react-router-dom'
import ErrorMessage from '../../common/ServerMessages/ErrorMessage'





const MaxLengthCreator50 = MaxLength(50)
const MinLengthCreator5 = MinLength(5)


const LoginForm = (props) => {
    return (
        <form className="signForm" onSubmit={props.handleSubmit}>
            <h5 className="signHeadline">log-in</h5>
            <div className="form-group">
                <Field type="email" id="inputEmail" name={"email"} className="form-control" placeholder="Email adress"
                    required component={Input} validate={[required, MinLengthCreator5, MaxLengthCreator50]} />
            </div>
            <div>

                <Field type="password" id="inputPassword" name={"password"} className="form-control" placeholder="Password"
                    required component={Input} validate={[required, MinLengthCreator5, MaxLengthCreator50]} />
            </div>

            <div className="custom-control custom-checkbox d-flex " style={{padding:'0px'}}>
                <label className="d-flex align-items-center"><Field name={"rememberMe"} type="checkbox" className="checkbox" component={"input"} /> <span className="fake fakeSign" ></span><span className="checkText span">Remember Me<span>(Privacy
                    Policy)</span></span></label>
                <Link className="forgotPass" to="/forgotpassword">forgot password</Link>
                <button style={{color:'pink', fontWeight:'bold'}}>Login</button>
            </div>
            {props.errors&&props.errors.id === 'LOGIN_FAIL' ? <ErrorMessage message={props.errors.message}/>:null}
        </form>
    )
}

export const ReduxLoginForm = reduxForm({
    form: 'login'
})(LoginForm)