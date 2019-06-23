import PropTypes from "prop-types";
import exact from "prop-types-exact";
import React from "react";
import styles from "./styles.module.scss";

timerInput.propTypes = exact({
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  className: PropTypes.string
});

timerInput.defaultProps = {
  className: ""
};

function timerInput({ className, onChange, value }) {
  const classes = [styles.timerInput, className];

  return (
    <input className={classes.join(" ")} onChange={onChange} value={value} />
  );
}

export default timerInput;
