import { testAPI } from "../api/api";
import {returnErrors,returnSuccess} from './SuccessErrorReducer'
const GET_INFORM_OF_USER = "GET_INFORM_OF_USER";



let initialState = {
  inform: null,
  isAddInform:false,
  sendHelpMessage:false
};

let InformReducer = (state = initialState, action) => {
  switch (action.type) {
   
    case GET_INFORM_OF_USER:
      return { ...state, inform: action.inform,isAddInform:action.isAddInform};
    default:
      return state;
  }
};

const addInform=(inform,isAddInform)=>({type:GET_INFORM_OF_USER,inform,isAddInform})

export const getInform=(id)=>(dispatch)=>{
   testAPI.getInform(id).then(response=>{
       dispatch(addInform(response.data.inform,response.data.isAddInform))
   })
}
export const updateInform=(inform)=>(dispatch,getState)=>{
   testAPI.updateInform((getState().auth.user.id),inform).then(response=>{
       dispatch(returnSuccess(response.data.message,response.status,'SUCCESS_USER_INFORM_CHANGE'))
   }).catch(err=>{
    debugger
    dispatch(returnErrors(err.response.data.message,err.response.status,'USER_INFORM_CHANGE_ERROR'))
  })
}
export const setInform=(inform,isAddInform=true)=>(dispatch,getState)=>{
  testAPI.setInform((getState().auth.user.id),inform,isAddInform).then(response=>{
    debugger
    dispatch(returnSuccess(response.data.message,response.status,'SUCCESS_USER_INFORM_SET'))
    dispatch(addInform(response.data))
  }).catch(err=>{
   
    dispatch(returnErrors(err.response.data.message,err.response.status,'ERROR_USER_INFORM_SET'))
  })
}

export const sendHelpMessage=(helpMessage)=>(dispatch,getState)=>{
  testAPI.sendHelpMessage(helpMessage,getState().auth.userId).then(response=>{
    dispatch(returnSuccess(response.data.message,response.status,'SUCCESS_HELP_MESSAGE'))
  }).catch(err=>{
    dispatch(returnErrors(err.response.data.message,err.response.status,'ERROR_HELP_MESSAGE'))
  })
}

export default InformReducer