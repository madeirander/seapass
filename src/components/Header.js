import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const H1 = styled.h1`
  margin: 0;
  padding: 0;
`

const HeaderRaw = ({ className, title, icon }) => {
  return (
    <header className={className}>
      <H1>
        <FontAwesomeIcon icon={icon} style={{ marginRight: 10 }} />
        {title}
      </H1>
    </header>
  )
}

const Header = styled(HeaderRaw)`
  background: #fff;
  padding: 1em;
  margin-left: 1em;
  border: 1px solid rgba(0, 0, 0, 0.1);
`

export default Header
