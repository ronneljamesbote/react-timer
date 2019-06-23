import PropTypes from "prop-types";
import exact from "prop-types-exact";
import React from "react";
import styles from "./styles.module.scss";
import TimerCountdown from "./timerCountdown";
import TimerDuration from "./timerDuration";
import TimerInput from "./timerInput";

display.propTypes = exact({
  onInputChange: PropTypes.func.isRequired,
  seconds: PropTypes.number.isRequired,
  started: PropTypes.bool.isRequired,
  time: PropTypes.string.isRequired,
  className: PropTypes.string
});

display.defaultProps = {
  className: ""
};

function display({ className, onInputChange, seconds, started, time }) {
  const classes = [styles.display, className];

  return (
    <div className={classes.join(" ")}>
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
