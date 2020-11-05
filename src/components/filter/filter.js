import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Checkbox } from "antd";
import TabPanel from "../tab-panel/tab-panel";
import classes from "./filter.module.scss";
import { pressCheck } from "../../action/checkboxes";
import { getCheck, getCheckLabel, getCheckId } from "./extra";

const { filter, header, aside, search } = classes;

export default function Filter() {
  const dispatch = useDispatch();
  const stateCheckboxes = useSelector((store) => store.checkboxes.items);
  const tickets = useSelector(store => {
    return store.loadTickets.tickets;
})
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

  return (
    <div className={filter}>
      <aside className={aside}>
        <h1 className={header}>Количество пересадок</h1>
        {checkboxes}
      </aside>
      <aside className={search}>
        <TabPanel />
      </aside>
    </div>
  );
}
