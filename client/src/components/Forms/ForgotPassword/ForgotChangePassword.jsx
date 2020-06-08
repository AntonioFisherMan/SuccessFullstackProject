import React from 'react'
import { connect } from 'react-redux'
import { resetPass } from '../../../redux/AuthReducer'
import { Input } from '../../common/FormsControls/Input'
import { Field, reduxForm } from 'redux-form'
import { Alert } from 'reactstrap'
import { compose } from 'redux'
import { SuccessErrorsData } from '../../../hoc/SuccessErrorsData'
import SuccessMessage from '../../common/ServerMessages/SuccessMessage'

class ForgotChangePassword extends React.Component {
    onSubmit = (formData) => {
        const token = this.props.match.params.token
        this.props.resetPass(formData.newPassword, formData.verifyPassword, token)
    }
    generateForm = () => {
        return (
            <ReduxForgotChangePassword onSubmit={this.onSubmit} errors={this.props.errors} />
        )
    }
    render() {
        return (
            <div>
                {this.props.success&&this.props.success.id==='SUCCESS_RESET' ? <SuccessMessage message={this.props.success.message}/> : this.generateForm()}
            </div>

        )
    }
}


const ForgotChangePasswordForm = (props) => {
    return (
        <div className="container" style={{marginBottom:"20px"}}>
            <div className="row">
                <div className="col-12 d-flex justif-content-center flex-column align-items-center">
                    <div><h3>Password confirmation!</h3>
                        <form onSubmit={props.handleSubmit} style={{marginTop:"20px"}}>
                            <label for="newPassword">New Password</label>
                            <Field className="form-control" type="text" component={Input} name="newPassword" id="newPassword" required />
                            <label for="verifyPassword">Confirm Password</label>
                            <Field className="form-control" type="text" component={Input} name="verifyPassword" id="verifyPassword" required />
                            <button className="btn btn-success" style={{ marginTop: "10px", width: "100%" }}>  Reset Password</button>
                            
                        </form>
                    </div>
                </div>
            </div>

            <div className="row d-flex justify-content-center">
                {props.errors&&props.errors.id === 'RESET_ERROR' ? <Alert color="danger">{props.errors.message.message}</Alert> : null}
            </div>
        </div>
    )
}

const ReduxForgotChangePassword = reduxForm({
    form: 'forgotForm'
})(ForgotChangePasswordForm)


export default compose(
    SuccessErrorsData,
    connect(null, { resetPass })
)(ForgotChangePassword)
