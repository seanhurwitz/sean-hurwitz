import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Header } from './components';
import { Home, About, Gallery, Contact } from './containers';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
