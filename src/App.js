import React from 'react';
import { Layout } from 'antd';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Home, Sidebar, LocationHeader, EntryDetail, NewEntry } from './components';

const { Content } = Layout;

function App() {
  return (
    <Router>
      <Layout style={{ height: '100vh' }}>
        <Sidebar />
        <Layout style={{ padding: '0 24px 24px' }}>
          <LocationHeader />
          <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
            <Route exact path="/" component={Home} />
            <Route path="/new" component={NewEntry} />
            <Route path="/entry/:entryId" component={EntryDetail} />
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
