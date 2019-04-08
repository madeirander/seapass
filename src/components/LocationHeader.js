import React from 'react';
import { Breadcrumb } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getEntryById, getCategoryById } from '../database';
import { getEntryIdFromPath } from '../util';

function getItems(props) {
  const { activeEntryId, location } = props;

  const entryId = activeEntryId === -1 ? getEntryIdFromPath(location.pathname) : activeEntryId;
  const entry = getEntryById(entryId);
  const category = getCategoryById(entry ? entry.catId : 0);

  return [
    <Breadcrumb.Item key={1}>{category ? category.name : 'Category'}</Breadcrumb.Item>,
    <Breadcrumb.Item key={2}>{entry ? entry.name : 'Entry'}</Breadcrumb.Item>,
  ];
}

function LocationHeader(props) {
  const items = getItems(props);

  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      {items}
    </Breadcrumb>
  );
}

const mapStateToProps = store => ({
  activeEntryId: store.activeEntry.entryId,
});

export default connect(mapStateToProps)(withRouter(LocationHeader));
