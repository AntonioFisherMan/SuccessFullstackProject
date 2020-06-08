import {createSelector} from 'reselect'
import { uniqBy } from 'lodash'


export const getCardItems=(state)=>{
    return uniqBy(state.card.items, i => i._id)
}
export const getTotalPrice=createSelector(getCardItems,(items)=>{
    debugger
   return items.reduce((total,item) => total + item.price*item.quantity, 0);
})
