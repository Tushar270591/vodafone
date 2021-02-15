import * as actions from '../types';

export const INITIAL_STATE = {
  filters: {
    'Brand' : []
  },
  usersList: [],
  loadingLogin: false,
  testAction: '',
  loadingUsers: true,
  loadingUsersError: '',
  showSuccess: false,
  showToast: {
    display: false,
    message: '',
    severity: 'info',
  },
  region: '',
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.TEST_ACTION:
      return {
        ...state,
        testAction: action.testAction,
      };
    case actions.APPLY_FILTERS:
      return {
        ...state,
        filters: {...action.filters,}
      };
    
    default:
      return state;
  }
};

export default reducer;
