import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import mainReducer from "./main";

const rootReducer = combineReducers({
  main: mainReducer,
  form: formReducer,
});

const store = createStore(rootReducer);

export default store;
