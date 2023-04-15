export const TOKEN_CBS = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCDEkMOgIE7hurVuZyAwNCIsIkhldEhhblN0cmluZyI6IjExLzA0LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4MTE3MTIwMDAwMCIsIm5iZiI6MTY1MjYzNDAwMCwiZXhwIjoxNjgxMzE4ODAwfQ.gSqRPtAGanL6NGpTCUadxaDv8iCWNHz1-5NHHkRP43A"
export const URL_API = 'https://jiranew.cybersoft.edu.vn/api'
export const ACCESS_TOKEN = 'accessToken'
export const USER_LOGIN = 'userLogin'
export const ID_TOKEN = localStorage.getItem(ACCESS_TOKEN)

// export const GET_ALL_PROJECT = 'GET_ALL_PROJECT'
// export const GET_PROJECT_CATEGOTY = 'GET_PROJECT_CATEGOTY'
// export const CREATE_PROJECT = 'CREATE_PROJECT'
// export const PROJECT_DETAIL = 'PROJECT_DETAIL'

// export const GET_LIST_MEMBER = 'GET_LIST_MEMBER'
// export const USER_SEARCHED = 'USER_SEARCHED'

// export const SEARCH_USER = 'SEARCH_USER'

export const STATUS_CODE = {
  SUCCESS: 200,
  CREATED: 201,
  UN_AUTHORIZED: 401,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
}