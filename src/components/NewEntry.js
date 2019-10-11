import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setActiveEntry } from '../actions'

class NewEntry extends React.Component {
  componentDidMount() {
    const { updateActiveEntry } = this.props
    updateActiveEntry(0)
  }

  render() {
    return (
      <div>
        <p>New Entry</p>
      </div>
    )
  }
}

const mapStateToProps = store => ({
  activeEntryId: store.activeEntry.entryId,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ updateActiveEntry: setActiveEntry }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewEntry)
