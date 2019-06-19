import React from "react";
import styles from "./styles.module.scss";

function control({ children, className = "", onClick, ...restProps }) {
  const classes = [styles.control, className];

  return (
    <button className={classes.join(" ")} onClick={onClick} {...restProps}>
      {children || "Control"}
    </button>
  );
}

export default control;
