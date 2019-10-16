import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { isAuthenticated } from '../services/auth'
import { fetchCurrentUser } from '../actions/current-user-actions'

const UserInfoSpan = styled.span`
  color: rgba(72, 72, 72, 0.8);
  font-weight: 700;
  display: block;
  padding: 0.5rem;
`

const UserInfo = props => {
  const { loading, user } = props

  if (!loading && !user && isAuthenticated()) {
    props.fetchCurrentUser()
    return null
  }

  if (loading) {
    return <UserInfoSpan>Loading user info...</UserInfoSpan>
  }

  if (user) {
    return <UserInfoSpan>{user.name}</UserInfoSpan>
  }

  return null
}

const mapStateToProps = state => ({
  loading: state.currentUser.loading,
  user: state.currentUser.user,
})

export default connect(
  mapStateToProps,
  {
    fetchCurrentUser,
  }
)(UserInfo)
