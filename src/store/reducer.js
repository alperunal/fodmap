import * as actionTypes from "./actions";

const initialState = {
  selectedCategory: null,
  selectedFood: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SELECT_CATEGORY:
      return {
        ...state,
        selectedCategory: { ...action.payload }
      };
    case actionTypes.SELECT_FOOD:
      return {
        ...state,
        selectedFood: { ...action.payload }
      };
    case actionTypes.DESELECT_CATEGORY:
      return {
        ...state,
        selectedCategory: null
      };
    case actionTypes.DESELECT_FOOD:
      return {
        ...state,
        selectedFood: null
      };
    default:
      return { ...state };
  }
};

export default reducer;
