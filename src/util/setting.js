export const TOKEN_CBS = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCDEkMOgIE7hurVuZyAwNCIsIkhldEhhblN0cmluZyI6IjExLzA0LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4MTE3MTIwMDAwMCIsIm5iZiI6MTY1MjYzNDAwMCwiZXhwIjoxNjgxMzE4ODAwfQ.gSqRPtAGanL6NGpTCUadxaDv8iCWNHz1-5NHHkRP43A"
export const URL_API = 'https://jiranew.cybersoft.edu.vn/api'
export const ACCESS_TOKEN = 'accessToken'
export const USER_LOGIN = 'userLogin'
export const ID_TOKEN = localStorage.getItem(ACCESS_TOKEN)

export const STATUS_CODE = {
  SUCCESS: 200,
  CREATED: 201,
  UN_AUTHORIZED: 401,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
}