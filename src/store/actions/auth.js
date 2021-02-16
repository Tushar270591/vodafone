/* eslint-disable no-console */

import * as actions from "../types";

export const setFilters = (filters) => ({
  type: actions.APPLY_FILTERS,
  filters,
});

export const setPage = (page) => ({
  type: actions.SET_PAGE,
  page,
});
