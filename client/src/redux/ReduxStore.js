import {createStore,combineReducers, applyMiddleware,compose} from 'redux'
import AuthReducer from './AuthReducer';
import CatalogReducer from './CatalogReducer';
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import AppReducer from './AppReducer';
import CardReducer from './CardReducer'
import OrdersReducer from './OrdersReducer';
import InformReducer from './InformReducer';
import SuccessErrorReducer from './SuccessErrorReducer';
import ReviewsReducer from './ReviewsReducer';


let reducers=combineReducers({
    auth:AuthReducer,
    goods:CatalogReducer,
    form: formReducer,
    app:AppReducer,
   card:CardReducer,
   orders:OrdersReducer,
   inform:InformReducer,
   successErrors:SuccessErrorReducer,
   reviews:ReviewsReducer
});



 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(reducers,composeEnhancers( applyMiddleware(thunkMiddleware)))

window.store=store;
export default store