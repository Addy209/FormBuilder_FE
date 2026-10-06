import { TOGGLE_DARK_MODE } from "../actions/actionsTypes";

export const toggleDarkMode = (dispatch) => {
  dispatch({ type: TOGGLE_DARK_MODE });
};
