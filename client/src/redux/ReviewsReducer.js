import { testAPI } from "../api/api";

import { returnErrors, returnSuccess } from "./SuccessErrorReducer";
const SET_REVIEWS = "SET_REVIEW";
const INITIAL_REVIEWS = "INITIAL_REVIEWS";
let initialState = {
  reviews: [],
};

const ReviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIAL_REVIEWS:
      return initialState;
    case SET_REVIEWS:
      return { ...state, reviews: [action.item] };
    default:
      return state;
  }
};

export const setItemOfReview = (item) => ({ type: SET_REVIEWS, item });
export const clearReview = () => ({ type: INITIAL_REVIEWS });

export const setReviews = (data, goodsId, reviewText, rating) => (
  dispatch,
  getState
) => {
  let userImage;
  if (getState().auth.userInform) {
    userImage = getState().auth.userInform.userImage;
  }
  testAPI
    .setReviews(
      getState().auth.user.name,
      userImage,
      data,
      goodsId,
      reviewText,
      rating
    )
    .then((response) => {
      if (response.data.success) {
        dispatch(
          returnSuccess(
            response.data.message,
            response.status,
            "SUCCESS_FILE_UPLOAD"
          )
        );
        dispatch(clearReview());
      } else {
        dispatch(
          returnErrors(
            response.data.message,
            response.status,
            "ERRORS_FILE_UPLOAD"
          )
        );
      }
    });
};

export default ReviewsReducer;
