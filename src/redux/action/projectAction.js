import axios from 'axios'
import { history } from '../../util/libs/history';
import { ID_TOKEN, TOKEN_CBS } from '../../util/setting'
import { URL_API } from "../../util/setting";
import { CREATE_PROJECT, DELETE_PROJECT, EDIT_PROJECT, GET_ALL_PROJECT, PROJECT_DETAIL } from '../types/projectListType';

export const projectListAction = () => {
  return (dispatch2) => {
    axios({
      url: `${URL_API}/Project/getAllProject`,
      method: "GET",
      headers: {
        TokenCybersoft: TOKEN_CBS,
        Authorization: 'Bearer ' + ID_TOKEN
      }
    })
      .then((res) => {
        console.log('projectList: ', res.data.content);
        let action = {
          type: GET_ALL_PROJECT,
          projectList: res.data.content
        }
        dispatch2(action)
      })
      .catch((err) => {
        console.log('err projectAction: ', err);
      })

  }
}

export const createProjectAction = (values) => {
  console.log('values: ', values);
  return (dispatch2) => {
    axios({
      url: `${URL_API}/Project/createProjectAuthorize`,
      method: "POST",
      data: { ...values, creator: "Anonymous" },
      headers: {
        TokenCybersoft: TOKEN_CBS,
        Authorization: 'Bearer ' + ID_TOKEN
      }
    })
      .then((res) => {
        console.log('GET LIST: ', res.data.content);

        let action = {
          type: CREATE_PROJECT,
          newProject: {
            ...values,
            projectCategory: {
              id: values.categoryId,
            }
          }
        }
        // console.log("action.projectCategory.id: ", action);
        dispatch2(action)
        history.replace('/project-management')
      })
      .catch((err) => {
        console.log('err projectAction: ', err);
      })
  }
}

export const projectDetailAction = (id) => {
  return (dispatch2) => {
    axios({
      url: `${URL_API}/Project/getProjectDetail?id=${id}`,
      method: "GET",
      headers: {
        TokenCybersoft: TOKEN_CBS,
        Authorization: 'Bearer ' + ID_TOKEN
      }
    })
      .then((res) => {
        const action = {
          type: PROJECT_DETAIL,
          projectDetail: res.data.content
        }
        dispatch2(action)
      })
      .catch((err) => {
        console.log('Error Project Detail: ', err);
      })
  }
}

export const editProjectAction = (id, values) => {
  console.log('values edit: ', values);
  return (dispatch2) => {
    axios({
      url: `${URL_API}/Project/updateProject?projectId=${id}`,
      method: "PUT",
      data: {
        data: {
          id: values.id,
          projectName: values.projectName,
          creator: values.creator,
          description: values.description,
          categoryId: values.categoryId
        },
      },
      headers: {
        TokenCybersoft: TOKEN_CBS,
        Authorization: 'Bearer ' + ID_TOKEN
      }
    })
      .then((res) => {
        console.log('res: ', res)
        const action = {
          type: EDIT_PROJECT,
          editProject: res.data.content
        }
        dispatch2(action)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export const deleteProjectAction = (id) => {
  return (dispatch2) => {
    axios({
      url: `${URL_API}/Project/deleteProject?projectId=${id}`,
      method: "DELETE",
      headers: {
        TokenCybersoft: TOKEN_CBS,
        Authorization: 'Bearer ' + ID_TOKEN
      }
    })
      .then((res) => {
        console.log("res deleteProject: ", res);
        const action = {
          type: DELETE_PROJECT,
          // creator: creator.name,
          deleteProject: res.data.content.id
        }
        dispatch2(action)
      })
      .catch((err) => {
        console.log('err delete: ', err);
      })
  }
}


