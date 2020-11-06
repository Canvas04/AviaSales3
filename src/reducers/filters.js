import { CHEAPEST, FASTEST, PRESS_CHECK } from "../constants";
import { filterOnLabel, filterOnLength, filterOnPrice, filterOnSpeed } from "../secondaryFunc";

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

export const getTicketsOnCheck = (state=null,action) => {
  switch(action.type) {
    case PRESS_CHECK:
return filterOnLength(filterOnLabel(action.payload,action.label));
    default:
      return state;
  }
}