import React from 'react';
import './App.css';
import WindowTile from './WindowTile/WindowTiles';
import WindowMaterial from './WindowTile/WindowMaterial';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Router>
        <Switch>
          <Route path="/" exact component={WindowTile} />
          <Route path="/tile" component={WindowTile} />
          <Route path="/material" component={WindowMaterial} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
