import { testAPI } from "../api/api";

const GET_GOODS_AC = "GET_GOODS_AC";
const GET_GOODBYID_AC = "GET_GOODBYID_AC";
const REMOVE_GOODBYID_AC = "REMOVE_GOODBYID_AC";
const CHANGE_PAGE_SIZE_GOODS = "CHANGE_PAGE_SIZE_GOODS";
const CHANGE_PAGE_NUMBER_GOODS = "CHANGE_PAGE_NUMBER_GOODS";
const CHANGE_SORT_BY = "CHANGE_SORT_BY";
const CHANGE_FILTER = "CHANGE_FILTER";
const ClEAR_GOODS_AC = "ClEAR_GOODS_AC";
const REMOVE_FILTER = "REMOVE_FILTER";
let initialState = {
  goods: [],
  filter: null,
  filterBy: ["Рекомендации"],
  pageSize: 3,
  totalCount: 0,
  pageNumber: 1,
  goodItem: [],
};

const CatalogReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GOODS_AC:
      return {
        ...state,
        goods: [...action.dataGoods.goods],
        totalCount: action.dataGoods.totalCount,
      };
    case GET_GOODBYID_AC:
      return { ...state, goodItem: [action.goodItem] };
    case REMOVE_GOODBYID_AC:
      return { ...state, goodItem: null };
    case ClEAR_GOODS_AC:
      return initialState;
    case CHANGE_PAGE_SIZE_GOODS:
      return { ...state, pageSize: action.pageSize };
    case CHANGE_PAGE_NUMBER_GOODS:
      return { ...state, pageNumber: action.pageNumber };
    case CHANGE_SORT_BY:
      return { ...state, filterBy: action.filterBy };
    case CHANGE_FILTER:
      return { ...state, filter: action.filter };
    case REMOVE_FILTER:
      return {
        ...state,
        filter: state.filter.filter((i) => i !== action.filter),
      };
    default:
      return state;
  }
};

export const ClearGoods = () => ({ type: ClEAR_GOODS_AC });
export const changePageSize = (pageSize) => ({
  type: CHANGE_PAGE_SIZE_GOODS,
  pageSize,
});
export const changePageNumber = (pageNumber) => ({
  type: CHANGE_PAGE_NUMBER_GOODS,
  pageNumber,
});
export const changeSortBy = (filterBy) => ({ type: CHANGE_SORT_BY, filterBy });

const changeFilter = (filter) => ({ type: CHANGE_FILTER, filter });

const getGoods = (dataGoods) => ({ type: GET_GOODS_AC, dataGoods });
const getGood = (goodItem) => ({ type: GET_GOODBYID_AC, goodItem });
export const removeGood = () => ({ type: REMOVE_GOODBYID_AC });

export const getGoodsForSlider = () => async (dispatch) => {
  let response = await testAPI.changeFilter();
  dispatch(getGoods(response.data));
};
export const getGoodsThunkById = (id) => async (dispatch) => {
  try {
    let response = await testAPI.getGood(id);
 
    var data = response.data.goods.data.good;
    data.reviews = response.data.goods.data.review;
    data.goodReviewsQuantity = response.data.reviewQuantity;
  dispatch(getGood(data));
  } catch (error) {
    console.log(error)
  }
 
};
export const getGoodsThunk = (pageNumber, pageSize, data) => (dispatch) => {
  testAPI.changeFilter(data, pageSize, pageNumber).then((response) => {
    dispatch(changePageNumber(pageNumber));
    dispatch(changePageSize(pageSize));
    dispatch(getGoods(response.data));
    dispatch(changeFilter(data));
  });
};
export const removeFilter = (filter) => (dispatch,getState) => {
  dispatch({ type: REMOVE_FILTER, filter });
  let data=getState().goods.filter
  testAPI.changeFilter(data, getState().goods.pageSize, getState().goods.pageNumber).then((response) => {}
  
  )
};
export default CatalogReducer;
