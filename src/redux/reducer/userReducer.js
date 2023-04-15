import { USER_SEARCHED } from "../types/projectListType"

const initialState = {
  usersSearched: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_SEARCHED:
      return { ...state, usersSearched: action.usersSearched }
    default:
      return state
  }
}
