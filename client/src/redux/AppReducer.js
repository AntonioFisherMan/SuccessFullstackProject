import {getAuth} from './AuthReducer'
import {testAPI} from '../api/api'
const SET_INITIALIZED="SET_INITIALIZED"
const APP_IS_POPUP="APP_IS_POPUP"
const GET_USERS="GET_USERS"
let initialState={
      initialized:false,
      isPopUp:false,
      users:[]
}

const AppReducer=(state=initialState,action)=>{
   switch(action.type) {
     case SET_INITIALIZED:
      return{
          ...state,initialized:true
      }
      case GET_USERS:
        return{
            ...state,users:[action.users]
        }
      case APP_IS_POPUP:
          return{...state,isPopUp:action.isPopUp}

    default:return state
   }
}

export const setInitialize=()=>({type:SET_INITIALIZED})
export const isPopUp=(isPopUp)=>({type:APP_IS_POPUP,isPopUp})
const getUsers=(users)=>({type:GET_USERS,users})

export const initializeThunkApp=()=>(dispatch)=>{
    let promise=dispatch(getAuth())
    Promise.all([promise]).then(()=>{
        dispatch(setInitialize());
    })
}
export const getUsersThunk=()=>(dispatch)=>{
    testAPI.getMyUsers().then(res=>{
        debugger
        dispatch(getUsers(res.data))
    })
   
}

export default AppReducer