import {createSelector} from 'reselect'
import { sortBy } from '../utils/helperFunctions/sortBy'

const getGoods=(state)=>{
    return  state.goods.goods
} 
export const getFilterBy=(state)=>{
    return  state.goods.filterBy
}
export const getTotalGoods=createSelector([getGoods,getFilterBy],(items,filterBy)=>{
   return  sortBy(items,filterBy)
})