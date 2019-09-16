import React from 'react';
import { Route, Redirect } from 'react-router';

export default function RestrictedRoute({
  isAllowed = false,
  component: Component,
  render: RenderedComponent,
  redirectTo,
  ...routeProps
}) {
  return (
    <Route
      {...routeProps}
      render={(props) => {
        if (isAllowed) {
          // Compatibility with both Route render or Route component
          if (!!RenderedComponent) {
            return RenderedComponent(props);
          }
          return <Component {...props} />
        }

        return <Redirect to={redirectTo} />;
      }}
    />
  );
}