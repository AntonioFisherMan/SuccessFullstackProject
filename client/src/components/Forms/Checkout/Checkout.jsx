import React from 'react'
import { connect } from 'react-redux'
import { ReduxCheckoutForm } from './CheckoutForm'
import { addOrdersThunk, addOrders, addUnloginOrdersThunk } from '../../../redux/OrdersReducer'
import { compose } from 'redux'
import { SuccessErrorsData } from '../../../hoc/SuccessErrorsData'
import {getInform} from '../../../redux/InformReducer'

class Checkout extends React.Component {
    onSubmit = (formData) => {
        let data;
        if (!this.props.auth.isAuth) {
            data = { items: this.props.items, formData }
            this.props.addUnloginOrdersThunk(data)
            this.props.history.push("/order")
        }
        else {
            data = { items: this.props.items, inform:formData, id: this.props.auth.userId }
            this.props.addOrdersThunk(data)
        }
    }

    render() {
        return (
            <>
            {this.props.userInform? <ReduxCheckoutForm initialValues={this.props.userInform.inform} onSubmit={this.onSubmit} success={this.props.success} errors={this.props.errors} />:<ReduxCheckoutForm  onSubmit={this.onSubmit} success={this.props.success} errors={this.props.errors} />}
           </>
        )
    }

}


let mapStateToProps = (state) => {
    return {
        errors: state.errors,
        items: state.card.items,
        auth: state.auth,
        userInform:state.auth.userInform
    }
}
export default compose(
   SuccessErrorsData,
   connect(mapStateToProps, { addOrdersThunk, addUnloginOrdersThunk, addOrders,getInform })
)(Checkout)