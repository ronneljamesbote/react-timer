import React from "react";
import styles from "./styles.module.scss";

function timerDuration({ className = "", time = null, ...restProps }) {
  const classes = [styles.timerDuration, className];

  return (
    <p className={classes.join(" ")} {...restProps}>
      {time || "00:00:00:00"}
    </p>
  );
}

export default timerDuration;
