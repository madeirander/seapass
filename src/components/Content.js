import React from 'react'
import styled from 'styled-components'

const ContentRaw = ({ className }) => {
  return (
    <section className={className}>
      List of entries
      <br />
      right
      <br />
      HERE...
    </section>
  )
}

const Content = styled(ContentRaw)`
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1em;
  margin-left: 1em;
  margin-top: 1em;
`

export default Content
