import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Control from "./control";

function controlReset({ style = {}, ...restProps }) {
  const newStyles = { ...style, background: "#007bff" };

  return (
    <Control style={newStyles} {...restProps}>
      <FontAwesomeIcon icon={["fas", "sync-alt"]} />
    </Control>
  );
}

export default controlReset;
