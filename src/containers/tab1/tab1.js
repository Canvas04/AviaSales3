import React ,{useEffect} from 'react';
import  {useDispatch,useSelector} from 'react-redux';
import { Checkbox } from "antd";
import { speedTickets } from '../../action/filters';
import {pressCheck} from '../../action/checkboxes'
import {getCheckId,getCheckLabel,getCheck} from './extra';
import classes from './tab1.module.scss';
import './tab1.scss';
const {aside,asideHeader} = classes;

export default function Tab1 () {
    const dispatch = useDispatch();
const tickets = useSelector(store => {
    return store.loadTickets.tickets;
})
    useEffect(() => {
dispatch(speedTickets(tickets))
    })

    const stateCheckboxes = useSelector((store) => store.checkboxes.items);

    const checkboxes = stateCheckboxes.map((el) => {
        return (
          <Checkbox
            key={el.id}
            onChange={() =>
              dispatch(pressCheck(getCheckId(el.id, stateCheckboxes),getCheckLabel(el.id, stateCheckboxes),tickets))
            }
            checked={getCheck(el.id, stateCheckboxes)}
          >
            {getCheckLabel(el.id, stateCheckboxes)}
          </Checkbox>
        );
      });
    
    return <>
    <aside  className={aside}>
        <h1 className={asideHeader}>Количество пересадок</h1>
        {checkboxes}
      </aside> 
    </>
}