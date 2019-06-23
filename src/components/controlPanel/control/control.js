import PropTypes from "prop-types";
import React from "react";
import styles from "./styles.module.scss";

control.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

control.defaultProps = {
  className: ""
};

function control({ children, className, ...restProps }) {
  const classes = [styles.control, className];

  return (
    <button className={classes.join(" ")} {...restProps}>
      {children}
    </button>
  );
}

export default control;
