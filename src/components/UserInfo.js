import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

const UserInfoSpan = styled.span`
  color: rgba(72, 72, 72, 0.8);
  font-weight: 700;
  display: block;
  padding: 0.5rem;
`

const UserInfo = props => {
  const { loading, user, error } = props

  if (loading) {
    return <UserInfoSpan>Loading user info...</UserInfoSpan>
  }

  if (user) {
    return <UserInfoSpan>{user.name}</UserInfoSpan>
  }

  if (error) {
    return (
      <UserInfoSpan style={{ color: 'red' }}>
        Error loading user data!
      </UserInfoSpan>
    )
  }

  return null
}

const mapStateToProps = state => ({
  error: state.currentUser.error,
  loading: state.currentUser.loading,
  user: state.currentUser.user,
})

export default connect(mapStateToProps)(UserInfo)
