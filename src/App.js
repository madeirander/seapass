import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, Sidebar, LocationHeader, EntryDetail } from './components';
import './App.css';

const { Content } = Layout;

const MenuItems = [
  {
    id: 11,
    name: 'CategoryOne',
    entries: [
      {
        id: 1,
        name: 'EntryOne',
        link: 'one',
      },
      {
        id: 2,
        name: 'EntryTwo',
        link: 'two',
      },
      {
        id: 3,
        name: 'EntryThree',
        link: 'three',
      },
    ],
  },
  {
    id: 22,
    name: 'CategoryTwo',
    entries: [
      {
        id: 4,
        name: 'EntryFour',
        link: 'four',
      },
      {
        id: 5,
        name: 'EntryFive',
        link: 'five',
      },
      {
        id: 6,
        name: 'EntrySix',
        link: 'six',
      },
    ],
  },
  {
    id: 33,
    name: 'CategoryThree',
    entries: [
      {
        id: 7,
        name: 'EntrySeven',
        link: 'seven',
      },
      {
        id: 8,
        name: 'EntryEight',
        link: 'eight',
      },
      {
        id: 9,
        name: 'EntryNine',
        link: 'nine',
      },
    ],
  },
];

function App() {
  return (
    <Router>
      <Layout className="main-wrapper">
        <Sidebar menuItems={MenuItems} />
        <Layout className="content-wrapper">
          <LocationHeader />
          <Content className="main-content">
            <Route exact path="/" component={Home} />
            <Route path="/entry/:id" component={EntryDetail} />
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
