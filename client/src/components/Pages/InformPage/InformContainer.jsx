import React from 'react'
import {connect} from 'react-redux'
import InformPage from './InformPage';
import {getInform,updateInform,setInform} from '../../../redux/InformReducer'
import { compose } from 'redux';
import { WithAuthRedirect } from '../../../hoc/WithAuthRedirect';
import {SuccessErrorsData} from '../../../hoc/SuccessErrorsData'

class InformPageContainer extends React.Component{
  componentDidMount(){
    this.props.getInform(this.props.userId);
  }
 
  render(){
      return(
        <>
        <InformPage {...this.props} isAddInform={this.props.isAddInform} updateInform={this.props.updateInform} setInform={this.props.setInform}success={this.props.success} errors={this.props.errors}
        />
        </>
      )
  }
}

let mapDispatchToProps=(state)=>{
    return{
        inform:state.inform.inform,
        userId:state.auth.user.id,
        isAddInform:state.inform.isAddInform
    }
}


export default compose(
  WithAuthRedirect,
  SuccessErrorsData,
  connect(mapDispatchToProps,{getInform,updateInform,setInform})
)(InformPageContainer)

