import React,{useEffect} from 'react';
import  {useDispatch,useSelector} from 'react-redux';
import { cheapTickets } from '../../action/filters';

export default function Tab2 () {
     const dispatch = useDispatch();
    const tickets = useSelector(store => {
        return store.loadTickets.tickets;
    })
    useEffect(() => {
        dispatch(cheapTickets(tickets))
    })
    return <>
    
    </>
}