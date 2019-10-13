import React from 'react'
import Top from './Top'
import Main from './Main'
import Sidebar from './Sidebar'
import ContentWrapper from './ContentWrapper'
import Header from './Header'
import Content from './Content'

const Home = () => (
  <>
    <Top />
    <Main>
      <Sidebar />
      <ContentWrapper>
        <Header />
        <Content />
      </ContentWrapper>
    </Main>
  </>
)

export default Home
