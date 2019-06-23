import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React from "react";
import Control from "./control";

controlStart.propTypes = {
  style: PropTypes.object
};

controlStart.defaultProps = {
  style: {}
};
function controlStart({ style = {}, ...restProps }) {
  const newStyles = { ...style, background: "#28a745" };

  return (
    <Control style={newStyles} {...restProps}>
      <FontAwesomeIcon icon={["fas", "play"]} />
    </Control>
  );
}

export default controlStart;
