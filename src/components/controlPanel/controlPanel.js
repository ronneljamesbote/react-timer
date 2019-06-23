import PropTypes from "prop-types";
import exact from "prop-types-exact";
import React from "react";
import { ControlReset, ControlStart, ControlStop } from "./control";
import styles from "./styles.module.scss";

controlPanel.propTypes = exact({
  onResetTimer: PropTypes.func.isRequired,
  onStartTimer: PropTypes.func.isRequired,
  onStopTimer: PropTypes.func.isRequired,
  started: PropTypes.bool.isRequired,
  className: PropTypes.string
});

controlPanel.defaultProps = {
  className: ""
};

function controlPanel({
  className,
  onResetTimer,
  onStartTimer,
  onStopTimer,
  started
}) {
  const classes = [styles.controlPanel, className];

  return (
    <div className={classes.join(" ")}>
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
