import React from "react";
import { ControlReset, ControlStart, ControlStop } from "./controls";
import styles from "./styles.module.scss";

function controlPanel({
  className = "",
  onResetTimer,
  onStartTimer,
  onStopTimer,
  started = false,
  ...restProps
}) {
  const classes = [styles.controlPanel, className];

  return (
    <div className={classes.join(" ")} {...restProps}>
      {started ? (
        <ControlStop onClick={onStopTimer} />
      ) : (
        <ControlStart onClick={onStartTimer} />
      )}
      <ControlReset onClick={onResetTimer} />
    </div>
  );
}

export default controlPanel;
