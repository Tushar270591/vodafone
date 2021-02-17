import * as actions from "../types";

export const INITIAL_STATE = {
  filters: {
    Brand: [],
    "Operation System": [],
  },
  phonesJson: [],
  page: 1,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.APPLY_FILTERS:
      return {
        ...state,
        filters: { ...action.filters },
      };
    case actions.SET_PHONES_JSON:
      return {
        ...state,
        phonesJson: { ...action.phonesJson },
      };
    case actions.SET_PAGE:
      return {
        ...state,
        page: action.page,
      };
    default:
      return state;
  }
};

export default reducer;
