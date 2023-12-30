import { combineReducers } from "redux";

import { jobReducer } from "./jobs/jobs-reducer";
import { filterReducer } from "./filters/filters-reducer";

export const rootReducer = combineReducers({
  jobs: jobReducer,
  filters: filterReducer,
})