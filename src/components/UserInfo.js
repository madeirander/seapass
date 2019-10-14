import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

const UserInfoRaw = props => {
  const { className, loading, user } = props

  const userInfoText = loading ? 'Loading...' : user.name

  return <span className={className}>{userInfoText}</span>
}

const UserInfo = styled(UserInfoRaw)`
  color: rgba(72, 72, 72, 0.8);
  font-weight: 700;
  display: block;
  padding: 0.5rem;
`

const mapStateToProps = state => ({
  loading: state.auth.userLoading,
  user: state.auth.user,
})

export default connect(mapStateToProps)(UserInfo)
