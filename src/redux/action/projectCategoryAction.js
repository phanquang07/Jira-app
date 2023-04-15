import axios from 'axios'
import { TOKEN_CBS, URL_API } from '../../util/setting'
import { GET_PROJECT_CATEGOTY } from '../types/projectListType'

export const projectCategoryAction = () => {
  return (dispatch2) => {
    axios({
      method: 'GET',
      url: `${URL_API}/ProjectCategory`,
      headers: {
        TokenCybersoft: TOKEN_CBS
      }
    })
      .then((res) => {
        // console.log('category res: ', res.data.content);
        let action = {
          type: GET_PROJECT_CATEGOTY,
          projectCategory: res.data.content
        }
        dispatch2(action)
      })
      .catch((error) => {
        console.log('category err :', error);
      })
  }
}
