import React from "react";
import styles from "./styles.module.scss";
import TimerCountdown from "./timerCountdown";
import TimerDuration from "./timerDuration";
import TimerInput from "./timerInput";

function display({
  className = "",
  started = false,
  onInputChange,
  seconds = 0,
  time = 0,
  ...restProps
}) {
  const classes = [styles.display, className];

  return (
    <div className={classes.join(" ")} {...restProps}>
      {started ? (
        <TimerCountdown time={time} danger={started && seconds < 10} />
      ) : (
        <React.Fragment>
          <TimerDuration time={time} />
          <TimerInput onChange={onInputChange} value={seconds} />
        </React.Fragment>
      )}
    </div>
  );
}

export default display;
