import React,{useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {loadTickets} from '../action/loadTickets';
import TabPanel from '../components/tab-panel/tab-panel';
import ErrorBoundary from '../errorBoundary/ErrorBoundary.js/ErrorBoundary';
export default function App() {
const dispatch = useDispatch();
useEffect(() => {
 dispatch(loadTickets())
},[dispatch])
    return <>
   <ErrorBoundary >
       <TabPanel />
   </ErrorBoundary>
    </>
}