import React from 'react'
import { Layout } from 'antd'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Home, Sidebar, LocationHeader, EntryDetail, NewEntry, NotFound } from './components'

const { Content } = Layout

function App() {
  return (
    <Router>
      <Layout style={{ height: '100vh' }}>
        <Sidebar />
        <Layout style={{ padding: '0 24px 24px' }}>
          <LocationHeader />
          <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/new" component={NewEntry} />
              <Route exact path="/entry/:entryId" component={EntryDetail} />
              <Route exact path="*" component={NotFound} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Router>
  )
}

export default App
