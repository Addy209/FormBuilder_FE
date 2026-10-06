import { TOGGLE_DARK_MODE } from "../actions/actionsTypes";

export const uiInitialState = {
  darkMode: false,
  showDarkModeToggle: false,
};

export const uiModeReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_DARK_MODE: {
      return { ...state, darkMode: !state.darkMode };
    }
    default: {
      return state;
    }
  }
};
