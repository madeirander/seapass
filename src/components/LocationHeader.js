import React from 'react';
import { Breadcrumb } from 'antd';
import { connect } from 'react-redux';
import { getCategory, getEntry } from '../database';

function LocationHeader(props) {
  const { activeEntry } = props;
  console.log('112 categoryId, entryId', activeEntry.catId, activeEntry.id);
  const cat = getCategory(activeEntry.catId);
  const entry = getEntry(activeEntry.id);
  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>{cat ? cat.name : 'Category'}</Breadcrumb.Item>
      <Breadcrumb.Item>{entry ? entry.name : 'Entry'}</Breadcrumb.Item>
    </Breadcrumb>
  );
}

const mapStateToProps = store => ({
  activeEntry: store.activeEntry.entry,
});

export default connect(mapStateToProps)(LocationHeader);
