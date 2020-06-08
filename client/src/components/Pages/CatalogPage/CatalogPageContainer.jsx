import React from 'react'
import { connect } from 'react-redux'
import CatalogPage from './CatalogPage'
import { compose } from 'redux'
import { getGoodsThunk, changeSortBy,removeFilter,getGoodsThunkById, changePageNumber, ClearGoods } from '../../../redux/CatalogReducer'
import { IsPopUpHook } from '../../../hoc/IsPopUpHook'
import { isPopUp } from '../../../redux/AppReducer'
import { getFilterBy,getTotalGoods } from '../../../redux/CatalogSelector'
import {reset} from 'redux-form';


class CatalogPageContainer extends React.Component {
  componentWillUnmount() {
    this.props.ClearGoods();
  }
  componentDidMount() {
    const { pageNumber, pageSize } = this.props;
    this.props.getGoodsThunk(pageNumber,pageSize,this.props.filter);
  }
  componentDidUpdate(prevProps){
    const { pageNumber, pageSize } = this.props;
    if(prevProps.filter!==this.props.filter){
      this.props.getGoodsThunk(pageNumber,pageSize,this.props.filter);
    }
  }
  onPageChanged = (pageNumber) => {
    const { pageSize } = this.props;
    this.props.getGoodsThunk(pageNumber, pageSize,this.props.filter)
    this.props.changePageNumber(pageNumber)
  }
  changePageSize = (pageSize, pageNumber=1) => {
    this.props.getGoodsThunk(pageNumber,pageSize,this.props.filter)
  }
  changeFilter=(filter)=>{
     this.props.reset('filter')
     this.props.getGoodsThunk(this.props.pageNumber,this.props.pageSize,filter)
  }
  render() {
    return (
      <>
        <CatalogPage  {...this.props} onPageChanged={this.onPageChanged}changeFilter={this.changeFilter} removeFilter={this.props.removeFilter} changeSortBy={this.props.changeSortBy} changePageSize={this.changePageSize}
        />
      </>
    )
  }
}


let mapStateToProps = (state) => {
  return {
    goods: getTotalGoods(state),
    filterBy:getFilterBy(state),
    filter:state.goods.filter,
    token: state.auth.token,
    items: state.card.items,
    pageSize: state.goods.pageSize,
    pageNumber: state.goods.pageNumber,
    totalCount: state.goods.totalCount
  }
}

export default compose(
  IsPopUpHook,
  connect(mapStateToProps, { getGoodsThunk, getGoodsThunkById, changePageNumber,removeFilter, isPopUp, changeSortBy,reset, ClearGoods })
)(CatalogPageContainer)

