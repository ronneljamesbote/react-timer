import PropTypes from "prop-types";
import exact from "prop-types-exact";
import React from "react";
import styles from "./styles.module.scss";

timerCountdown.propTypes = exact({
  danger: PropTypes.bool.isRequired,
  time: PropTypes.string.isRequired,
  className: PropTypes.string
});

timerCountdown.defaultProps = {
  className: ""
};

function timerCountdown({ className, danger, time }) {
  const classes = [styles.timerCountdown, className, danger && styles.danger];

  return <h1 className={classes.join(" ")}>{time}</h1>;
}

export default timerCountdown;
