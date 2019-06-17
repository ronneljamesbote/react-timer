import React from "react";
import styles from "./styles.module.scss";

function timerInput({ className = "", onChange, value = 0, ...restProps }) {
  const classes = [styles.timerInput, className];

  return (
    <input
      className={classes.join(" ")}
      onChange={onChange}
      value={value}
      {...restProps}
    />
  );
}

export default timerInput;
