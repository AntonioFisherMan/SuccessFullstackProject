import React from 'react'
import FeedbackPage from './FeedbackPage'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { WithAuthRedirect } from '../../../hoc/WithAuthRedirect'
import {setReviews,clearReview} from '../../../redux/ReviewsReducer'
import {SuccessErrorsData} from '../../../hoc/SuccessErrorsData'

class FeedbackContainer extends React.Component{
   
    render(){
        return(
            <FeedbackPage {...this.props} />
        )
    }
}
let mapStateToProps=(state)=>{
    return{
       review:state.reviews.reviews
    }
}
export default compose(WithAuthRedirect,SuccessErrorsData,connect(mapStateToProps,{setReviews,clearReview}))(FeedbackContainer)