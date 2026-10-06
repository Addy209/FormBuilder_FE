import { SET_USER } from "../actions/actionsTypes";

export const setUserData = (dispatch, value) => {
  dispatch({ type: SET_USER, payload: value });
};
