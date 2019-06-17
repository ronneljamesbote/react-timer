import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Control from "../control";

function controlStart({ style = {}, ...restProps }) {
  const newStyles = { ...style, background: "#28a745" };

  return (
    <Control style={newStyles} {...restProps}>
      <FontAwesomeIcon icon={["fas", "play"]} />
    </Control>
  );
}

export default controlStart;
