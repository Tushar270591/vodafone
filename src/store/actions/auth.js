/* eslint-disable no-console */

import * as actions from '../types';



export const setTestAction = (testAction: string) => ({
  type: actions.TEST_ACTION,
  testAction,
});

export const setFilters = (filters) => ({
  type: actions.APPLY_FILTERS,
  filters,
});
