import {
  FETCH_REQUEST_TICKETS,
  FETCH_RECEIVE_TICKETS,
  FETCH_FAILURE_TICKETS,
  TICKETS_URL,
} from "../constants";

const requestTickets = () => {
  return {
    type: FETCH_REQUEST_TICKETS,
  };
};
const receiveTickets = (payload) => {
  return {
    type: FETCH_RECEIVE_TICKETS,
    status: "success",
    payload,
  };
};
const errorLoadTickets = (error) => {
  return {
    type: FETCH_FAILURE_TICKETS,
    status: "error",
    error,
  };
};

export function loadTickets(id) {
  console.log(id);
  return (dispatch) => {
    dispatch(requestTickets());
    if (id.searchId) {
      return fetch(`${TICKETS_URL}=${id.searchId}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Something went wrong");
          }
        })
        .then((json) => dispatch(receiveTickets(json)))
        .catch((e) => dispatch(errorLoadTickets(e)));
    }
  };
}
