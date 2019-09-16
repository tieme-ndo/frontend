import React from 'react';
import { Route, Redirect } from 'react-router';

export default function RestrictedRoute({
  isAllowed = false,
  component: Component,
  render: RenderedComponent, // Renaming render prop to avoid confusion + better readability.
  redirectTo,
  ...routeProps
}) {
  return (
    <Route
      // Passing along Route props (path, exact etc.) from invoked HOC to Route component
      {...routeProps}
      // Passing along props (history, location etc.) from Router to rendered component
      render={(props) => {        
        if (isAllowed) {
          // Compatibility with both Route render prop or Route component prop
          if (RenderedComponent) {
            return <RenderedComponent {...props} />;
          }
          return <Component {...props} />
        }

        return <Redirect to={redirectTo} />;
      }}
    />
  );
}