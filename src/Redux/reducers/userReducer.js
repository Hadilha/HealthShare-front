import { ActionTypes } from "../constants/ActionTypes";

const initialState = {
  user: null,
  error: null,
};

export const userReducer = (state = { initialState }, { type, payload }) => {
  switch (type) {
    case ActionTypes.AUTH_SUCCESS:
      return {
        ...state,
        user: payload,
        error: null,
      };
    case ActionTypes.AUTH_FAILURE:
      return { error: payload };
    case ActionTypes.LOGOUT:
      return { ...state, user: null };
    default:
      return state;
  }
};

export default userReducer;
