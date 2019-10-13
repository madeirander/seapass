import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import Top from './Top'
import Main from './Main'
import Sidebar from './Sidebar'
import Teams from './Teams'
import Categories from './Categories'
import Entries from './Entries'
import Home from './Home'

const Dashboard = () => {
  const { path } = useRouteMatch()

  return (
    <>
      <Top />
      <Main>
        <Sidebar />
        <Switch>
          <Route path={path} exact>
            <Home />
          </Route>
          <Route path={`${path}/teams`}>
            <Teams />
          </Route>
          <Route path={`${path}/categories`}>
            <Categories />
          </Route>
          <Route path={`${path}/entries`}>
            <Entries />
          </Route>
        </Switch>
      </Main>
    </>
  )
}

export default Dashboard
