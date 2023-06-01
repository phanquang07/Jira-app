import { CREATE_PROJECT, DELETE_PROJECT, GET_ALL_PROJECT, GET_LIST_MEMBER, PROJECT_DETAIL } from "../../redux/types/projectListType";

const initialState = {
  projectList: [],
  members: [],
  projectDetail: {}
}


export const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PROJECT:
      state.projectList = action.projectList
      return { ...state }
    case CREATE_PROJECT:
      state.newProject = [...state.projectList, action.newProject]
      return { ...state }
    case GET_LIST_MEMBER:
      state.members = action.members
      return { ...state }
    // return { ...state, members: action.members }
    case PROJECT_DETAIL:
      state.projectDetail = action.projectDetail
      // console.log("action.projectDetail: ", action.projectDetail);
      console.log('state.projectDetail: ', state.projectDetail);
      return { ...state }
    case DELETE_PROJECT:
      state.deleteProject = state.projectList.filter((item) => item.id !== action.deleteProject)
      return {...state}
    default:
      return state
  }
}