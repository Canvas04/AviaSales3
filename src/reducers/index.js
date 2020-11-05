import { combineReducers } from "redux";
import loadTickets from './loadTickets';
import {getCheapTickets,getSpeedTickets} from './filters';
import {checkboxes} from './checkboxes';
import {getTicketsOnCheck} from './filters';

export default combineReducers({ loadTickets,getSpeedTickets,getCheapTickets,checkboxes,getTicketsOnCheck});

