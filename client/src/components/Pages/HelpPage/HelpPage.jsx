import React from 'react'
import './HelpPage.css'
import HeaderBottom from '../../HeaderBottom/HeaderBottom'
import Sidebar from '../../Sidebar/Sidebar'
import SiteHeadline from '../../SiteHeadline/SiteHeadline'
import Button3 from '../../SiteButtons/Button3/Button3'
import {Button1} from '../../SiteButtons/Button1/Button1'
import { compose } from 'redux'
import { WithAuthRedirect } from '../../../hoc/WithAuthRedirect'
import { SuccessErrorsData } from '../../../hoc/SuccessErrorsData'
import { Textarea } from '../../common/FormsControls/Textarea'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { sendHelpMessage } from '../../../redux/InformReducer'
import { required } from '../../../utils/Validators/validators'
import SuccessMessage from '../../common/ServerMessages/SuccessMessage'
import ErrorMessage from '../../common/ServerMessages/ErrorMessage'

const HelpPage = (props) => {

    const onSubmit = (formData) => {
        props.sendHelpMessage(formData.helpMessage)
    }

    return (
        <div>
            <HeaderBottom />

            <section className="helpBlock">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <SiteHeadline text="Help & Contact" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-3">
                            <Sidebar />
                        </div>
                        <div className="col-2"></div>
                        {props.success && props.success.id==='SUCCESS_HELP_MESSAGE' ? <SuccessMessage message={props.success.message} /> : <ReduxHelpForm onSubmit={onSubmit} errors={props.errors} />}
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="returnLink">
                                <Button3 link="/catalog" text="Return to catalogue" />
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

const HelpForm = (props) => {
    return (
        <form className="col-12 col-md-7 helpInform" onSubmit={props.handleSubmit}>
            <p className="helpText">Your question</p>
            <Field component={Textarea} name="helpMessage" validate={[required]} className="form-control" placeholder="text..." />
            <Button1 style={{ marginTop: '20px' }}>
            Send
            </Button1>
            {props.errors && props.errors.id === 'ERROR_HELP_MESSAGE' ? <ErrorMessage message={props.errors.message} /> : null}

        </form>
    )

}

export const ReduxHelpForm = reduxForm({
    form: 'help'
})(HelpForm)


export default compose(
    SuccessErrorsData,
    WithAuthRedirect,
    connect(null, { sendHelpMessage })
)(HelpPage)