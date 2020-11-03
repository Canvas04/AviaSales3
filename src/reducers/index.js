import { combineReducers } from "redux";
import loadTickets from './loadTickets';
import {getCheapTickets,getSpeedTickets} from './filters';
import {checkboxes} from './checkboxes';

export default combineReducers({ loadTickets,getSpeedTickets,getCheapTickets,checkboxes});

