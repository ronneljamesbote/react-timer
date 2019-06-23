// Do not delete this file as this will serve as the top parent component
// of all components

import PropTypes from "prop-types";
import React from "react";
import "../fontawesome";
import "./styles.scss";

layout.propTypes = {
  children: PropTypes.node.isRequired
};

function layout({ children }) {
  return <div>{children}</div>;
}

export default layout;
