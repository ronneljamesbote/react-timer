import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Control from "../control";

function controlStop({ style = {}, ...restProps }) {
  const newStyles = { ...style, background: "#343a40" };

  return (
    <Control style={newStyles} {...restProps}>
      <FontAwesomeIcon icon={["fas", "stop"]} />
    </Control>
  );
}

export default controlStop;
