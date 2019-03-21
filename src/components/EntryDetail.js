/* eslint react/prop-types: 0 */

import React from 'react';

export default function EntryDetail({ match }) {
  return (
    <div>
      <p>Entry Detail for: {match.params.id}</p>
    </div>
  );
}
