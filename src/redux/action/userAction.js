import { GET_LIST_MEMBERS, ID_TOKEN, TOKEN_CBS, URL_API } from "../../util/setting"

export const getAllMembers = (idProject) => {
  return (dispatch2) => {
    axios({
      url: `${URL_API}/Users/getUserByProjectId`,
      method: "GET",
      headers: {
        TokenCybersoft: TOKEN_CBS,
        Authorization: 'Bearer ' + ID_TOKEN
      }
    })
      .then((res) => {
        // console.log('GET LIST: ', res.data.content);
        let action = {
          type: GET_LIST_MEMBERS,
          listUsers: res.data.content
        }
        dispatch2(action)
      })
      .catch((err) => {
        console.log('err projectAction: ', err);
      })

  }
}