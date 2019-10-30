import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'
import ContentWrapper from './ContentWrapper'
import Header from './Header'
import Content from './Content'
import { fetchEntries } from '../actions/entries-actions'

const Entries = props => {
  const { entries, loading, error, requestEntries } = props

  useEffect(() => {
    requestEntries()
  }, [requestEntries])

  let msg = null

  if (loading) {
    msg = <p>Loading...</p>
  }

  if (error) {
    msg = <p style={{ color: 'red' }}>Error loading entries</p>
  }

  const entriesList = entries
    ? entries.map(e => (
        <div key={e._id}>
          <h3 style={{ marginTop: 0 }}>{e.name}</h3>
          <p>{e.description}</p>
          <ul>
            <li>Hostname: {e.credentials.hostname}</li>
            <li>Username: {e.credentials.username}</li>
            <li>Password: {e.credentials.password}</li>
          </ul>
        </div>
      ))
    : []

  return (
    <ContentWrapper>
      <Header title="Entries" icon={faFileAlt} />
      <Content>
        {entriesList}
        {msg}
      </Content>
    </ContentWrapper>
  )
}

const mapStateToProps = state => {
  return {
    entries: state.entries.items,
    loading: state.entries.loading,
    error: state.entries.error,
  }
}

export default connect(
  mapStateToProps,
  { requestEntries: fetchEntries }
)(Entries)
