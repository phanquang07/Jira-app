import { CREATE_PROJECT, DELETE_PROJECT, GET_ALL_PROJECT, GET_LIST_MEMBER, PROJECT_DETAIL } from "../../redux/types/projectListType";

const initialState = {
  projectList: [],
  members: [],
  projectDetail: {}
}


export const projectReducer = (state = initialState, action) => {
  // console.log("action: ", action);
  switch (action.type) {
    case GET_ALL_PROJECT:
      // console.log('action list project: ', action.projectList);
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
      console.log('action.deleteProject: ', action.deleteProject);
      state.deleteProject = [...state.projectList, action.deleteProject]
      return {...state}
    default:
      return state
  }
}