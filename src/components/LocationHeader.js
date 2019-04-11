import React from 'react';
import { Breadcrumb } from 'antd';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { getEntryById, getCategoryById } from '../database';
import { getEntryIdFromPath } from '../util';
import { setActiveEntry } from '../actions';

function getItems(props) {
  const { activeEntryId, location } = props;

  const entryId = activeEntryId === -1 ? getEntryIdFromPath(location.pathname) : activeEntryId;
  const entry = getEntryById(entryId);
  const category = getCategoryById(entry ? entry.catId : 0);

  console.log('activeEntryId: ', activeEntryId);

  if (activeEntryId === -1) {
    return [];
  }

  if (activeEntryId === 0) {
    return [<Breadcrumb.Item key={2}>New Entry</Breadcrumb.Item>];
  }

  return [
    <Breadcrumb.Item key={1}>{category ? category.name : 'Category'}</Breadcrumb.Item>,
    <Breadcrumb.Item key={2}>{entry ? entry.name : 'Entry'}</Breadcrumb.Item>,
  ];
}

class LocationHeader extends React.Component {
  componentDidMount() {
    const { updateActiveEntry, activeEntryId, location } = this.props;

    if (activeEntryId === -1) {
      updateActiveEntry(getEntryIdFromPath(location.pathname));
    }
  }

  render() {
    const items = getItems(this.props);

    return (
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        {items}
      </Breadcrumb>
    );
  }
}

const mapStateToProps = store => ({
  activeEntryId: store.activeEntry.entryId,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ updateActiveEntry: setActiveEntry }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(LocationHeader));
