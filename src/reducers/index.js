import { combineReducers } from "redux";
import loadTickets from './loadTickets';
import {getCheapTickets,getSpeedTickets} from './filters';

export default combineReducers({ loadTickets,getSpeedTickets,getCheapTickets});

