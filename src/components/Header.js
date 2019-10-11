import React from 'react'
import styled from 'styled-components'

const HeaderRaw = ({ className }) => {
  return <header className={className}>Page Title</header>
}

const Header = styled(HeaderRaw)`
  background: #fff;
  padding: 1em;
  margin-left: 1em;
  border: 1px solid rgba(0, 0, 0, 0.1);
`

export default Header
