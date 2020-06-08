import React from 'react'
import DetailsPage from './DetailsPage'
import { connect } from 'react-redux'
import { getGoodsThunkById,removeGood } from '../../../redux/CatalogReducer'
import { addToCart } from '../../../redux/CardReducer'
import {setItemOfReview} from '../../../redux/ReviewsReducer'


class DetailsContainer extends React.Component {
    refreshProfile() {
        const id = this.props.match.params.id;
        if (id) {
            this.props.getGoodsThunkById(id)
        }
    
    }
    componentDidMount() {
        this.refreshProfile();
    }
    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.refreshProfile();
        }
    }
    render() {
        return (
         <DetailsPage {...this.props} />
        )
    }
}
let mapStateToProps = (state) => {
    return {
        goodItem: state.goods.goodItem,
        items:state.card.items
    }
}

export default connect(mapStateToProps, {getGoodsThunkById, addToCart ,removeGood,setItemOfReview})(DetailsContainer)

