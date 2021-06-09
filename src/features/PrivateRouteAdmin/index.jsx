import React from "react";
import { Redirect, Route } from "react-router";

function PrivateRouteAdmin({ children, ...rest }) {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  return (
    <Route {...rest} render={({ location }) => token != null && role == "ROLE_ADMIN" ? (
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

export default PrivateRouteAdmin;
