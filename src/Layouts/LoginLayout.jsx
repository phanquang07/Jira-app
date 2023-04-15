import React from "react";
import { Route } from "react-router-dom";

export default function LoginLayout(props) {
  return (
    <Route
      exact
      path={props.path}
      render={(propsRoute) => {
        return <props.component {...propsRoute} />;
      }}
    />
  );
}
