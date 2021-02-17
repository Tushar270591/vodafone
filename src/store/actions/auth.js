import * as actions from "../types";

export const setFilters = (filters) => ({
  type: actions.APPLY_FILTERS,
  filters,
});

export const setPhonesJson = (phonesJson) => ({
  type: actions.SET_PHONES_JSON,
  phonesJson,
});

export const setPage = (page) => ({
  type: actions.SET_PAGE,
  page,
});

export const setSortBy = (sortBy) => ({
  type: actions.SET_SORT_BY,
  sortBy,
});
