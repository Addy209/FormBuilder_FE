import { SET_USER } from "../actions/actionsTypes";

export const userInitialState = {
  userId: null,
  name: null,
  isAdmin: null,
  isDev: null,
};

export const userReducer = (state, action) => {
  switch (action.type) {
    case SET_USER: {
      return { ...state, ...action.payload };
    }
    default: {
      return state;
    }
  }
};
