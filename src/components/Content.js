import React from 'react'
import styled from 'styled-components'
import { useRouteMatch, Switch, Route } from 'react-router-dom'

const ContentRaw = ({ className }) => {
  const { path } = useRouteMatch()

  return (
    <section className={className}>
      <Switch>
        <Route path={path} exact>
          <p>This is the home</p>
        </Route>
        <Route path={`${path}/teams`}>
          <p>And here you can see the teams</p>
        </Route>
        <Route path={`${path}/categories`}>
          <p>Here are a list of all cats</p>
        </Route>
        <Route path={`${path}/entries`}>
          <p>Some entries here</p>
        </Route>
      </Switch>
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
