import { CHEAPEST, FASTEST } from "../constants";
const getSpeedTickets = (payload) => {
  return {
    type: FASTEST,
    payload,
  };
};

export const speedTickets = (payload) => {
  return (dispatch) => {
    dispatch(getSpeedTickets(payload));
  };
};


export const cheapTickets = (payload) => {
  return { type: CHEAPEST, payload };
};
