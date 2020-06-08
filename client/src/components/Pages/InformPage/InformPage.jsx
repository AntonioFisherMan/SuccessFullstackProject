import React from 'react'
import HeaderBottom from '../../HeaderBottom/HeaderBottom'
import Sidebar from '../../Sidebar/Sidebar'
import SiteHeadline from '../../SiteHeadline/SiteHeadline'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../../common/FormsControls/Input'
import Button3 from '../../SiteButtons/Button3/Button3'
import {Button1} from '../../SiteButtons/Button1/Button1'
import UploadFile from '../../common/UploadFile/UploadFile'
import SuccessMessage from '../../common/ServerMessages/SuccessMessage'
import ErrorMessage from '../../common/ServerMessages/ErrorMessage'
import { required } from '../../../utils/Validators/validators'


const InformPage = (props) => {
    const updateInform = (formData) => {
        var data = new FormData();
        if (formData.userImage != null) {
            data.append("file", formData.userImage[0])
        }
        else {
            data.append("file", props.inform.userImage)
        }
        data.append("city", formData.city)
        data.append("code", formData.code)
        data.append("name", formData.name)
        data.append("phone", formData.phone)
        data.append("post", formData.post)
        data.append("surname", formData.surname)
        data.append("country", formData.country)
        props.updateInform(data)
    }
    const setInform = (formData) => {
        var data = new FormData();
        if (formData.userImage) {
            data.append("file", formData.userImage[0])
        }
        else {
            data.append("file", props.inform.userImage)
        }
        data.append("city", formData.city)
        data.append("code", formData.code)
        data.append("name", formData.name)
        data.append("phone", formData.phone)
        data.append("post", formData.post)
        data.append("surname", formData.surname)
        data.append("country", formData.country)
        props.setInform(data)
    }
    return (
        <div>
            <HeaderBottom />
            <section className="checkoutBlock">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <SiteHeadline text="My information" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <Sidebar />
                        </div>
                        <div className="col-12 col-md-8">
                            {props.success && props.success.message != null ? <SuccessMessage message={props.success.message} /> : props.inform ? <ReduxUserInform onSubmit={updateInform} errors={props.errors} isAddInform={props.isAddInform} initialValues={props.inform.inform} /> : <ReduxUserInform isAddInform={props.isAddInform} onSubmit={setInform} errors={props.errors} />}
                        </div>

                    </div>
                </div>
            </section>
        </div>


    )
}

const UserInformForm = (props) => {
    return (
        <form className="checkoutForm" onSubmit={props.handleSubmit}>
            {props.initialValues && props.initialValues.userImage ? <img alt="" style={{ width: '100px', height: '100px', margin: '0 auto' }} src={`${props.initialValues.userImage}`} /> : <p>Here will be your photo</p>}
            <div className="form-row">
                <h5 className="formHeadline">Shipping address</h5>
            </div>
            <div className="form-row" >
                <div className="form-group col-12 col-md-6" id="m">
                    <Field validate={[required]} type="text" component={Input} className="form-control" name="name" placeholder="Имя" />
                </div>
                <div className="form-group col-md-6">
                    <Field validate={[required]} type="text" component={Input} className="form-control" name="surname" placeholder="Фамилия" />
                </div>
            </div>
            <div className="form-group">
                <Field validate={[required]} type="text" component={Input} className="form-control" name="city" placeholder="Город" />
            </div>

            <div className="form-group">
                <Field validate={[required]} type="text" component={Input} className="form-control" name="post" placeholder="Номер новой почты" />
            </div>
            <div className="form-row" >
                <div className="form-group col-md-6">
                    <select className="form-control">
                        <option defaultValue>Country</option>
                        <option>Ukraine</option>
                        <option>Russia</option>
                    </select>
                </div>
                <div className="form-group col-md-6">
                    <Field validate={[required]} type="text" component={Input} className="form-control" name="code" placeholder="Post code" id="inputZip" />
                </div>
            </div>
            <div className="form-group ">
                <Field validate={[required]} type="number" component={Input} className="form-control" name="phone" placeholder="Phone" />
            </div>
            <div className="form-row">
                <h5 className="formHeadline">Billing Address</h5>
            </div>
            <div className="form-group">
                <div className="form-check">
                    <label><Field type="checkbox" component={"input"} name="check" className="form-check-label checkbox" /><span className="fake"></span><span id="checkText">same as Shipping Address</span></label>
                </div>
                <UploadFile name={"userImage"} />
            </div>
            <div className="form-row d-flex align-items-center">
                <div className="returnLink">
                    <Button3 link="/catalog" text="Return to catalogue" />
                </div>
                {props.isAddInform === true ? <div className="ml-auto">
               
                    <Button1 >
                    Обновить
                                         </Button1>
                </div> : <div className="ml-auto">
                     
                        <Button1 >
                        Сохранить
                                         </Button1>
                    </div>}
            </div>
            {props.errors && props.errors.id === 'ERROR_USER_INFORM_SET' || props.errors.id === 'USER_INFORM_CHANGE_ERROR' ? <ErrorMessage message={props.errors.message} /> : null}
        </form>

    )
}

export const ReduxUserInform = reduxForm({
    form: 'userInform'
})(UserInformForm)


export default InformPage