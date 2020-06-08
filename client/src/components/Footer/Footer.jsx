import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'
import { Field, reduxForm } from 'redux-form'
import {required, MaxLength,MinLength} from '../../utils/Validators/validators'
import { Input } from '../common/FormsControls/Input'
import ErrorMessage from '../common/ServerMessages/ErrorMessage'
import SuccessMessage from '../common/ServerMessages/SuccessMessage'
import {Button1} from '../SiteButtons/Button1/Button1'

const maxLengthCreator30=MaxLength(30)
const minLengthCreator5=MinLength(5)



const Footer = (props) => {
    const onSubmitBLL = (formData) => {
      props.subscribeNewUser(formData.submitEmail)
    }
    return (
        <div>
            <footer className="footer">
                <section>
                    <div className="container">
                        <hr style={{ border: '0.5px solid #111111 !important' }} />
                        <div className="row">
                            <div className="col-12 col-sm-6 col-lg-3 d-flex flex-column align-items-center">
                                <div className={styles.footerItem}>
                                    <p>Help</p>
                                    <Link to="/">
                                        <li>How it Works</li>
                                    </Link>
                                    <Link to="/">
                                        <li>FAQs</li>
                                    </Link>
                                    <Link to="/">
                                        <li>Size Charts</li>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-2">
                                <div className={styles.footerItem}>
                                    <p>About Us</p>
                                    <Link to="/">
                                        <li>About Dress IT Box</li>
                                    </Link>
                                    <Link to="/">
                                        <li>Privacy & Cookie Policy</li>
                                    </Link>
                                    <Link to="/">
                                        <li>Terms & Conditions</li>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-12 d-flex flex-column align-items-center col-sm-6 col-lg-3">
                                <div className={styles.footerItem}>
                                    <p>Quick Links</p>
                                    <Link to="/">
                                        <li>Blog</li>
                                    </Link>
                                    <Link to="/">
                                        <li>Refer a friend</li>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4">
                                <div className={styles.footerItem}>
                                    <p className={styles.span}> Subscribe and<span> get 10% off</span> your first rental</p>
                                   {props.success&&props.success.id==="SUBSCRIBER_SUCCESS"?<SuccessMessage message={props.success.message}/>:<ReduxFormEmailSent errors={props.errors} onSubmit={onSubmitBLL} />} 
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.footerBottom}>
                    <div className="container">
                        <div className="row">
                            <div className="col-1"></div>
                            <div className="col-11">
                                <p>© 2020 dressitbox.com</p>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>
        </div>

    )
}

const FormEmail = (props) => {
    return (
        <form className={styles.footerForm} onSubmit={props.handleSubmit}>
            <Field name={"submitEmail"} type="email" component={Input} placeholder="Your email" validate={[required,maxLengthCreator30,minLengthCreator5]} />
           
            <Button1  >
            Send
                        </Button1>
            {props.errors &&props.errors.id === 'SUBSCRIBER_FAIL' ? <ErrorMessage message={props.errors.message}/>:null}
        </form>
    )
}


const ReduxFormEmailSent = reduxForm({
    form: 'submitEmail'
})(FormEmail)

export default Footer