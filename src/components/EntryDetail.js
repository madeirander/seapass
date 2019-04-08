import React from 'react';
import EntryForm from './EntryForm';
import { getEntryById } from '../database';

export default function EntryDetail({ match }) {
  const { entryId } = match.params;
  console.log('entryId', entryId);
  const entry = getEntryById(entryId);
  console.log('entry: ', entry);
  return (
    <div>
      <h3>{entry.name}</h3>
      <EntryForm />
    </div>
  );
}
