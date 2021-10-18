import { combineReducers } from "redux"
import { imageReducer } from "./reducers/imageReducers"

const reducer = combineReducers({
  //files
  image: imageReducer,
})

export default reducer
