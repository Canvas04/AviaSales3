import React,{useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {loadId} from '../action/searchId'
import {loadTickets} from '../action/loadTickets';
export default function App() {
const dispatch = useDispatch();
useEffect(() => {
 dispatch(loadId());
 dispatch(loadTickets())
},[dispatch])
    return <>
   
    </>
}