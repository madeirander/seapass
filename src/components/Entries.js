import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFileAlt,
  faPlus,
  faTrash,
  faSearch,
} from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import ContentWrapper from './ContentWrapper'
import Content from './Content'
import { fetchEntries } from '../actions/entries-actions'
import { Button } from './form'

const H1 = styled.h1`
  margin: 0;
  padding: 0;
`

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.75em 0.25em;
  border-bottom: 1px #ddd dashed;

  :last-child {
    border-bottom: 0;
  }
`

const ActionIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  margin-left: 0.5em;
  color: rgba(72, 72, 72, 0.8);
  transition: color 0.5s ease;
`

const ActionIconEdit = styled(ActionIcon)`
  :hover {
    color: #88c0cf;
  }
`

const ActionIconRemove = styled(ActionIcon)`
  :hover {
    color: #bf616a;
  }
`

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

  const entriesItems = entries
    ? entries.map(e => (
        <ListItem key={e._id}>
          <span style={{ flex: 1 }}>{e.name}</span>
          <div>
            <ActionIconEdit icon={faSearch} />
            <ActionIconRemove icon={faTrash} />
          </div>
        </ListItem>
      ))
    : []

  return (
    <ContentWrapper>
      <Content
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <H1 style={{ flex: 1 }}>
          <FontAwesomeIcon icon={faFileAlt} style={{ marginRight: 10 }} />
          Entries
        </H1>
        <Button size="xs">
          <FontAwesomeIcon icon={faPlus} fixedWidth />
          Add Entry
        </Button>
      </Content>
      <Content>
        <List>{entriesItems}</List>
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
