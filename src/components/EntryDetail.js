import React from 'react';
import EntryForm from './EntryForm';
import { getEntry } from '../database';

export default function EntryDetail({ match }) {
  const { categoryId, entryId } = match.params;
  console.log('333 categoryId, entryId', categoryId, entryId);
  const entry = getEntry(categoryId, entryId);
  console.log('entry: ', entry);
  return (
    <div>
      <h3>{entry.name}</h3>
      <EntryForm />
    </div>
  );
}
