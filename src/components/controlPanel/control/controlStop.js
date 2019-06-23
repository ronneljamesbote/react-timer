import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React from "react";
import Control from "./control";

controlStop.propTypes = {
  style: PropTypes.object
};

controlStop.defaultProps = {
  style: {}
};

function controlStop({ style = {}, ...restProps }) {
  const newStyles = { ...style, background: "#343a40" };

  return (
    <Control style={newStyles} {...restProps}>
      <FontAwesomeIcon icon={["fas", "stop"]} />
    </Control>
  );
}

export default controlStop;
