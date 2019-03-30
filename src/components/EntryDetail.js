/* eslint react/prop-types: 0 */

import React from 'react';
import EntryForm from './EntryForm';

export default function EntryDetail({ match }) {
  return (
    <div>
      <h3>Entry Detail for: {match.params.id}</h3>
      <EntryForm />
    </div>
  );
}
