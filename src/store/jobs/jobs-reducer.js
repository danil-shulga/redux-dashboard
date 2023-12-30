import { ADD_JOBS } from "./jobs-actions"

export const jobReducer = ( state = [], action) => {
  switch(action.type) {
    case ADD_JOBS: {
      return action.jobs
    }
    default: return state
  }
}