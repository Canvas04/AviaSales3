import { CHEAPEST, FASTEST } from "../constants";
import { filterOnLength, filterOnPrice, filterOnSpeed } from "../secondaryFunc";

export const getSpeedTickets = (state = null, action) => {
  switch (action.type) {
    case FASTEST:
      return filterOnLength(filterOnSpeed(action.payload));
    default:
      return state;
  }
};

export const getCheapTickets = (state = null, action) => {
  switch (action.type) {
    case CHEAPEST:
      return filterOnLength(filterOnPrice(action.payload));
    default:
      return state;
  }
};
