import ActionType from "../constants/ActionsTypes";

//initial state is = [] (empty array)
const initialState = { data: [], loading: false };

export default function(state = initialState, action) {
  switch (action.type) {
    case ActionType.GETTING_DATA:
      return {
        ...state,
        loading: true
      };
    case ActionType.RECEIVED_DATA:
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}
