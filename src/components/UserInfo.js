import React from 'react'
import styled from 'styled-components'

const UserInfoRaw = ({ className }) => {
  return <span className={className}>Username</span>
}

const UserInfo = styled(UserInfoRaw)`
  color: rgba(72, 72, 72, 0.8);
  font-weight: 700;
  display: block;
  padding: 0.5rem;
`

export default UserInfo
