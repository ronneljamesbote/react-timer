import React from "react";
import styles from "./styles.module.scss";

function timerCountdown({
  className = "",
  danger = null,
  time = null,
  ...restProps
}) {
  const classes = [styles.timerCountdown, className, danger && styles.danger];

  return (
    <h1 className={classes.join(" ")} {...restProps}>
      {time || "00:00:00:00"}
    </h1>
  );
}

export default timerCountdown;
