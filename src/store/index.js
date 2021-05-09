import { createStore } from "redux";

const INITIAL_STATE = {
  TOTAL_VALUE: 0,
  CLIENT_NAME: "",
};

function ROOT_REDUCER(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_TOTAL_VALUE":
      return { ...state, TOTAL_VALUE: action.value };
    case "SET_CLIENT_NAME":
      return { ...state, CLIENT_NAME: action.name };
    case "CLEAR_STORE":
      return INITIAL_STATE;
    default:
      return state;
  }
}

const store = createStore(ROOT_REDUCER);

export default store;
