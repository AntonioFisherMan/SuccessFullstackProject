import React from 'react'
import CardPage from './CardPage'
import { connect } from 'react-redux'
import { removeProduct,changeQuantity,addInsurance,removeInsurance } from '../../../redux/CardReducer'

import {getCardItems,getTotalPrice} from '../../../redux/CardSelector'


let mapStateToProps = (state) => {
    return {
        items:getCardItems(state),
        totalPrice:getTotalPrice(state),
        isLoaded: state.card.isLoaded,
    }
}
export default connect(mapStateToProps, {changeQuantity,addInsurance,removeInsurance, removeProduct })(CardPage)