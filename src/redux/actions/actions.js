import ActionTypes from "../constants/ActionsTypes";
const API = "wqmUbKlFSgVu8OkDO8C3uIJyW7baVW48";
//this can be also be stored as process.env.REACT_APP_GIPHY_API_URL using local variables for security
export const searchByTerm = term => dispatch => {
  dispatch({
    type: ActionTypes.GETTING_DATA
  });
  fetch(`http://api.giphy.com/v1/gifs/search?q=${term}&api_key=${API}&limit=20`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data.data.length > 0) {
        dispatch({
          type: ActionTypes.RECEIVED_DATA,
          payload: data.data
        });
      } else {
        dispatch({
          type: ActionTypes.GET_ERRORS,
          payload: "No Results"
        });
      }
    })
    .catch(err =>
      dispatch({
        type: ActionTypes.GET_ERRORS,
        payload: err
      })
    );
};
