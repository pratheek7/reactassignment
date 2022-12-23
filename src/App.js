import React from 'react';
import Navbar from './components/Navbar';
import './App.scss';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Components from './components/pages/Components';
import Assemble from './components/pages/Assemble';
import Final from './components/pages/Final';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/components' component={Components} />
          <Route path='/assemble' component={Assemble} />
          <Route path='/final' component={Final} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
