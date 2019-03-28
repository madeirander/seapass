import React from 'react';
import { Layout } from 'antd';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Home, Sidebar, LocationHeader, EntryDetail, NewEntry } from './components';

const { Content } = Layout;

const MenuItems = [
  {
    id: 1,
    name: 'CategoryOne',
    entries: [
      {
        id: 1,
        catId: 1,
        name: 'EntryOne',
        link: 'one',
      },
      {
        id: 2,
        catId: 1,
        name: 'EntryTwo',
        link: 'two',
      },
      {
        id: 3,
        catId: 1,
        name: 'EntryThree',
        link: 'three',
      },
    ],
  },
  {
    id: 2,
    name: 'CategoryTwo',
    entries: [
      {
        id: 4,
        catId: 2,
        name: 'EntryFour',
        link: 'four',
      },
      {
        id: 5,
        catId: 2,
        name: 'EntryFive',
        link: 'five',
      },
      {
        id: 6,
        catId: 2,
        name: 'EntrySix',
        link: 'six',
      },
    ],
  },
  {
    id: 3,
    name: 'CategoryThree',
    entries: [
      {
        id: 7,
        catId: 3,
        name: 'EntrySeven',
        link: 'seven',
      },
      {
        id: 8,
        catId: 3,
        name: 'EntryEight',
        link: 'eight',
      },
      {
        id: 9,
        catId: 3,
        name: 'EntryNine',
        link: 'nine',
      },
    ],
  },
];

function App() {
  return (
    <Router>
      <Layout style={{ height: '100vh' }}>
        <Sidebar menuItems={MenuItems} />
        <Layout style={{ padding: '0 24px 24px' }}>
          <LocationHeader />
          <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
            <Route exact path="/" component={Home} />
            <Route path="/new" component={NewEntry} />
            <Route path="/entry/:cat/:id" component={EntryDetail} />
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
