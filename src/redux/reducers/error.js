import ActionType from "../constants/ActionsTypes";

const initialState = { message: "no error !!! keep waiting =)", status: false };

export default function(state = initialState, action) {
  switch (action.type) {
    case ActionType.GET_ERRORS:
      return { message: action.payload, status: true };
    default:
      return state;
  }
}
