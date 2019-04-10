import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setActiveEntry } from '../actions';

class NotFound extends React.Component {
  componentDidMount() {
    const { updateActiveEntry } = this.props;
    updateActiveEntry(-1);
  }

  render() {
    return (
      <div>
        <h3>Wops, not found!</h3>
      </div>
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
)(NotFound);
