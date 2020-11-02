import React from 'react';
import {useSelector} from 'react-redux';

export default function ErrorBoundary  () {

    const error = useSelector(store => {
       return  store.loadTickets.isError;
    })
    return <>
    {error ? <h1 style={{margin:'auto'}}>The server is temporarily down</h1> : null}
    </>
}