import React ,{useEffect} from 'react';
import  {useDispatch,useSelector} from 'react-redux';
import { speedTickets } from '../../action/filters';

export default function Tab1 () {
    const dispatch = useDispatch();
const tickets = useSelector(store => {
    return store.loadTickets.tickets;
})
    useEffect(() => {
dispatch(speedTickets(tickets))
    })
    return <>
    </>
}