import React from 'react'
import { changePass, requestToken, resetEmailSentClear } from '../../../redux/AuthReducer'
import { compose } from 'redux';
import { SuccessErrorsData } from '../../../hoc/SuccessErrorsData';
import { connect } from 'react-redux';
import {clearErrors,clearSuccess} from '../../../redux/SuccessErrorReducer'
import SuccessMessage from '../../common/ServerMessages/SuccessMessage';
import ErrorMessage from '../../common/ServerMessages/ErrorMessage';

class ForgotPassword extends React.Component {
    componentDidMount() {
        this.props.resetEmailSentClear()
    }
    changePassword = (e) => {
        this.props.changePass(e.target.value)
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.requestToken();
    }
    generateForm = () => {
        return (
            <div>
                <div className="container">
                <div className="row ">
                    <div className="col-12 d-flex justify-content-center">
                        <form onSubmit={this.handleSubmit}>
                            <input className="form-control" type="email" onChange={this.changePassword} placeholder="Enter your email" />
                            <input className="btn btn-success" style={{ width: "100%", marginTop: '20px' }} type="submit" value="Отправить" />
                        </form>

                    </div>
                </div>
                <div className="d-flex justify-content-center">
                {this.props.errors.id === 'FORGOT_ERROR' ? <ErrorMessage message={this.props.errors.message}/>:null}
                </div>
            </div>
            </div>
            

        )
    }
    render() {
        return (
            <div>
                {this.props.emailSent ?<SuccessMessage message={"If account exist you will recieve message with instructions"}/> : this.generateForm()}
            </div>

        )
    }
}



let mapStateToProps = (state) => {
    return {
        email: state.auth.forgotEmail,
        emailSent: state.auth.emailSent
    }
}


export default compose(
    SuccessErrorsData,
    connect(mapStateToProps,{clearSuccess,clearErrors,changePass, requestToken, resetEmailSentClear})
)(ForgotPassword)

