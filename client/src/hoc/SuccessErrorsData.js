

import React from 'react';
import { connect } from 'react-redux';
import {clearErrors,clearSuccess} from '../redux/SuccessErrorReducer'
let mapStateToProps=(state)=>{
    return{
     errors:state.successErrors.errorsMessage,
     success:state.successErrors.successMessage
    }
}

 export const SuccessErrorsData=(Component)=>{
    class RedirectComponent extends React.Component {
         componentWillMount(){
            this.props.clearErrors();
            this.props.clearSuccess();
         }
          render(){
          return(
            <Component {...this.props}/>
          )
        } 
    }  
    let Connect=connect(mapStateToProps,{clearSuccess,clearErrors})(RedirectComponent)
    return Connect
}

