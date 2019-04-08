import React from 'react';
import EntryForm from './EntryForm';
import { getEntryById } from '../database';

export default function EntryDetail({ match }) {
  const { entryId } = match.params;
  const entry = getEntryById(entryId);
  return (
    <div>
      <h3>{entry.name}</h3>
      <EntryForm />
    </div>
  );
}
