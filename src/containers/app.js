import React,{useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {loadTickets} from '../action/loadTickets';
export default function App() {
const dispatch = useDispatch();
useEffect(() => {
 dispatch(loadTickets())
},[dispatch])
    return <>
   
    </>
}