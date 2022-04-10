import React from "react";
import "./Button1.scss";

function Button1(props) {
  const { children } = props;

  return <button className="container">{children}</button>;
}

export default Button1;
