import { GET_PROJECT_CATEGOTY } from "../../redux/types/projectListType"

const initialState = {
  projectCategory: []
}

export const projectCategoryReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_PROJECT_CATEGOTY:
      // console.log('action.projectCategory: ', action.projectCategory);
      state.projectCategory = action.projectCategory
      return { ...state }

    default:
      return state
  }
}
