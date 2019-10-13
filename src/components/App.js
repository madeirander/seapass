import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import { isAuthenticated } from '../services/auth'

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
      <PrivateRoute path="/" component={Home} exact />
      <Route path="/login" component={Login} />
    </Switch>
  </BrowserRouter>
)

export default App
