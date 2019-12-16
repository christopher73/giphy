import ActionTypes from "../constants/ActionsTypes";

export const searchByTerm = term => dispatch => {
  dispatch({
    type: ActionTypes.GETTING_DATA
  });
  fetch(
    `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=wqmUbKlFSgVu8OkDO8C3uIJyW7baVW48&limit=20`
  )
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
