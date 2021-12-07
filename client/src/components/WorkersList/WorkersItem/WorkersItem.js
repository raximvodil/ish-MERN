import { Grid } from "@material-ui/core";
import React from "react";
import classes from "./WorkersItem.module.css";

const WorkersItem = () => {
  return (
    <div className={classes.WorkersItem}>
      <div className={classes.itemLeft}>
        <div className={classes.imgBox}>
          <img src={"asd"} alt={"IMG"} />
        </div>
        <div className={classes.itemStars}>*****</div>
        <span>7 отзывов</span>
      </div>
      <div className={classes.itemRight}>
        <h2>Worker name</h2>
        <p>Worker adress adress</p>
        <p>
          Worker comment = as dsa jas dkask dksj kdjsakj jksa jkdsakj dhaskjh
          dkjhs
        </p>
      </div>
    </div>
  );
};
export default WorkersItem;
