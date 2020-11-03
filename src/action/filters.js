import { CHEAPEST, FASTEST } from "../constants";

export const speedTickets = (payload) => {
  return {
    type: FASTEST,
    payload,
  };
};

export const cheapTickets = (payload) => {
  return { type: CHEAPEST, payload };
};
