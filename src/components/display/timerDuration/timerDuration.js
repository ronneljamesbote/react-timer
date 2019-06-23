import PropTypes from "prop-types";
import exact from "prop-types-exact";
import React from "react";
import styles from "./styles.module.scss";

timerDuration.propTypes = exact({
  time: PropTypes.string.isRequired,
  className: PropTypes.string
});

timerDuration.defaultProps = {
  className: ""
};

function timerDuration({ className, time }) {
  const classes = [styles.timerDuration, className];

  return <p className={classes.join(" ")}>{time}</p>;
}

export default timerDuration;
