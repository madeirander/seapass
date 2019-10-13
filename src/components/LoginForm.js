import React, { useState } from 'react'
import styled from 'styled-components'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import { useHistory, useLocation, Redirect } from 'react-router-dom'
import { FormControl, H3, Button } from './form'
import api from '../services/api'
import { login, isAuthenticated } from '../services/auth'

const ErrorMessage = styled.p`
  color: #bf616a;
`

const LoginFormRaw = ({ className }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const history = useHistory()
  const location = useLocation()

  const { from } = location.state || { from: { pathname: '/' } }

  if (isAuthenticated()) {
    return <Redirect to="/" />
  }

  const errorMessage = error ? (
    <ErrorMessage>Check your credentials and try again</ErrorMessage>
  ) : null

  const onFormSubmit = event => {
    event.preventDefault()

    setLoading(true)
    setError(false)

    api
      .post('/auth/login', {
        username,
        password,
      })
      .then(
        response => {
          login(response.data.token)
          setLoading(false)
          history.replace(from)
        },
        errorResponse => {
          setError(errorResponse)
          setLoading(false)
        }
      )
  }

  return (
    <div className={className}>
      <form onSubmit={onFormSubmit}>
        <H3>Login</H3>
        <FormControl
          icon={faUser}
          placeholder="Username"
          name="username"
          type="text"
          value={username}
          disabled={loading}
          onChange={event => setUsername(event.target.value)}
        />
        <FormControl
          icon={faLock}
          placeholder="Password"
          name="password"
          type="password"
          value={password}
          disabled={loading}
          onChange={event => setPassword(event.target.value)}
        />
        {errorMessage}
        <Button type="submit" loading={loading}>
          Login
        </Button>
      </form>
    </div>
  )
}

const LoginForm = styled(LoginFormRaw)`
  vertical-align: middle;
  background: #fff;
  box-shadow: rgba(184, 194, 215, 0.35) 0px 6px 9px 0px;
  width: 400px;
  padding: 2em;
  border-radius: 8px;
`

export default LoginForm
