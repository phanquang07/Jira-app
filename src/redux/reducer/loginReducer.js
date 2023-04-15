import { USER_LOGIN } from "../../util/setting"
import { LOGIN, LOGOUT } from "../types/userType"

let uLogin = null
if (localStorage.getItem(USER_LOGIN)) {
  uLogin = JSON.parse(localStorage.getItem(USER_LOGIN))
}
const initialState = {
  uLogin
}

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      state.uLogin = action.uLogin
      return { ...state }
    case LOGOUT:
      state.uLogin = null
      return { ...state }
    default:
      return state
  }
}