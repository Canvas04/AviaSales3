import React from "react";
import TabPanel from "../tab-panel/tab-panel";
import classes from "./filter.module.scss";
import './filter.scss';

const { filter, aside, search } = classes;

export default function Filter() {
  
  return (
    <div className={filter}>
      <aside className={search}>
        <TabPanel />
      </aside>
    </div>
  );
}
