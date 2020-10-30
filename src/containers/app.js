import React,{useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {loadId} from '../action/searchId'
export default function App() {
const dispatch = useDispatch();
useEffect(() => {
 dispatch(loadId());
},[dispatch])
    return <>
   
    </>
}