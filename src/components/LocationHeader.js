import React from 'react';
import { Breadcrumb } from 'antd';
import { connect } from 'react-redux';
import { getEntryById } from '../database';

function LocationHeader(props) {
  const { activeEntryId } = props;
  console.log('activeEntryId', activeEntryId);
  const entry = getEntryById(activeEntryId);
  console.log('Entry: ', entry);
  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>Category</Breadcrumb.Item>
      <Breadcrumb.Item>{entry ? entry.name : 'Entry'}</Breadcrumb.Item>
    </Breadcrumb>
  );
}

const mapStateToProps = store => ({
  activeEntryId: store.activeEntry.entryId,
});

export default connect(mapStateToProps)(LocationHeader);
