import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Content from './Content'

const ContentWrapperRaw = ({ className }) => {
  return (
    <section className={className}>
      <Header />
      <Content />
    </section>
  )
}

const ContentWrapper = styled(ContentWrapperRaw)`
  display: inline-block;
  vertical-align: top;
  width: 75%;
`

export default ContentWrapper
