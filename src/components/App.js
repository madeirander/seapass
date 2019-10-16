import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { isAuthenticated } from '../services/auth'
import Dashboard from './Dashboard'
import Login from './Login'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/login', state: { from: props.location } }}
        />
      )
    }
  />
)

const App = () => (
  <BrowserRouter>
    <Switch>
      <Redirect path="/" to="/app" exact />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/app" component={Dashboard} />
    </Switch>
  </BrowserRouter>
)

export default App
