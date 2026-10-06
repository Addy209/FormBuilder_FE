import { uiInitialState, uiModeReducer } from "../users/uiModeReduces";
import { userInitialState, userReducer } from "../users/userReducer";

export const initialState = {
  user: userInitialState,
  ui: uiInitialState,
};

export const rootReducer = (state, action) => {
  return {
    user: userReducer(state.user, action),
    ui: uiModeReducer(state.ui, action),
  };
};
