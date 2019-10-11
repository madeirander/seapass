import React from 'react'
import styled from 'styled-components'
import Sidebar from './Sidebar'
import ContentWrapper from './ContentWrapper'

const MainRaw = ({ className }) => {
  return (
    <section className={className}>
      <Sidebar />
      <ContentWrapper />
    </section>
  )
}

const Main = styled(MainRaw)`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 1024px;
`

export default Main
