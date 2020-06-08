import React from 'react'
import Button3 from '../../SiteButtons/Button3/Button3'
import {Button1} from '../../SiteButtons/Button1/Button1'
import './Checkout.css'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../../common/FormsControls/Input'
import { MaxLength, MinLength, required } from '../../../utils/Validators/validators'
import SuccessMessage from '../../common/ServerMessages/SuccessMessage'

const MaxLengthCreator50 = MaxLength(50)
const MinLengthCreator5 = MinLength(5)

const Checkout = (props) => {
    
const generateForm = () => {
        return (
            <form className="checkoutForm" style={{margin:'0px',marginTop:'50px',marginBottom:'50px'}} onSubmit={props.handleSubmit}>
                <div className="form-row">
                    <h5 className="formHeadline">Shipping address</h5>
                </div>
                <div className="form-row" >
                    <div className="form-group col-12 col-md-6" id="m">
                        <Field type="text" component={Input} className="form-control" validate={[required, MinLengthCreator5, MaxLengthCreator50]} name="name" placeholder="Имя" />
                    </div>
                    <div className="form-group col-md-6">
                        <Field type="text" component={Input} className="form-control" validate={[required, MinLengthCreator5, MaxLengthCreator50]} name="surname" placeholder="Фамилия" />
                    </div>
                </div>
                <div className="form-group">
                    <Field type="text" component={Input} className="form-control" validate={[required, MinLengthCreator5, MaxLengthCreator50]} name="city" placeholder="Город" />
                </div>

                <div className="form-group">
                    <Field type="text" component={Input} className="form-control" validate={[required]} name="post" placeholder="Номер новой почты" />
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
                        <Field type="text" component={Input} validate={[required]} className="form-control" name="code" placeholder="Post code" id="inputZip" />
                    </div>
                </div>
                <div className="form-group ">
                    <Field type="number" component={Input} validate={[required,MinLengthCreator5,MaxLengthCreator50]} className="form-control" name="phone" placeholder="Phone" />
                </div>
                <div className="form-row">
                    <h5 className="formHeadline">Billing Address</h5>
                </div>
                <div className="form-group">
                    <div className="form-check">
                        <label><Field type="checkbox"  component={"input"} name="check" className="form-check-label checkbox" /><span className="fake"></span><span id="checkText">same as Shipping Address</span></label>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-12 d-flex align-items-center justify-content-end">
                        <Button1 className="formBtn" >
                        Заказать
                        </Button1>
                    </div>
                    <div className="col-12 d-flex align-items-center">
                        <Button3 link="/catalog" text="Return to catalogue" />
                    </div>
                </div>

            </form>

        )
    }   
    return (
        <div className="container">
          <div className="row">
              <div className="col-12">
              {props.success&&props.success.id==='SUCCESS_ADD_ORDER'? <SuccessMessage message={props.success.message}/>: generateForm()}
              </div>
        </div>
        </div>
       

    )

}

export const ReduxCheckoutForm = reduxForm({
    form: 'checkout'
})(Checkout)

