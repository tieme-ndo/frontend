import React from 'react';

export default function withRestrictionToNonLoggedIn(OriginalComponent) {
  return <OriginalComponent {...this.props} />;
}
