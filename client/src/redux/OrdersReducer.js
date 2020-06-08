import {clearCardItems} from './CardReducer'
import { testAPI } from "../api/api";
import { returnSuccess } from './SuccessErrorReducer';


const ADD_ORDERS="ADD_ORDERS"
const ADD_UNLOGINORDER="ADD_UNLOGINORDER"

let initialState = {
  orders: [],
  unloginOrder:null,
  inform:null
};

let OrdersReducer = (state = initialState, action) => {
  switch (action.type) {
      case ADD_ORDERS:
          return{...state,orders:[...action.data]}
          case ADD_UNLOGINORDER:
          return{...state,unloginOrder:action.data}
    default:
      return state;
  }
};


 export const addOrders=(data)=>({type:ADD_ORDERS,data})
  const addUnloginOrders=(data)=>({type:ADD_UNLOGINORDER,data})


 export const addUnloginOrdersThunk=(data)=>dispatch=>{
   testAPI.setUnloginOrders(data).then(response=>{
    dispatch(addUnloginOrders(response.data.item.inform))
    dispatch(clearCardItems(null,null,null))
})
}
export const getOrders=(id)=>dispatch=>{
 testAPI.getOrders(id).then(response=>{
   if(response.data.orders){

    dispatch(addOrders(response.data.orders));
   }
 })
}

export const addOrdersThunk=({items,inform,id})=>(dispatch,getState)=>{
    testAPI.setOrders(items,inform,getState().auth.user.id).then(response=>{
        dispatch(clearCardItems(null,null,null))
        dispatch(returnSuccess(response.data.message,response.status,'SUCCESS_ADD_ORDER'))
    })
    
}

export default OrdersReducer