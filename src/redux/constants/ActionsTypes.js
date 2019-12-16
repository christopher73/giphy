import keyMirror from "keymirror"; //to return same string

const ActionTypes = keyMirror({
  GETTING_DATA: null,
  RECEIVED_DATA: null,
  GET_ERRORS: null
});

export default ActionTypes;
