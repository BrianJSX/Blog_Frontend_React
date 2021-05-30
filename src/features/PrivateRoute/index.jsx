import React from "react";
import { Redirect, Route } from "react-router";

function PrivateRoute({ children, ...rest }) {
    const token = localStorage.getItem("token");
  return (
    <Route {...rest} render={({ location }) => token != null ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
