import Header from './util/Header';
import Route from './util/Route';
import Insert from './components/Insert';
import Home from './components/Home';
import React, { Component } from 'react';
import './App.css';
 class App extends Component {

  render() {

    return (
      <div>
        <div className="ui container">
          <Header />
          <Route path="/">
           <Home/>
          </Route>
          <Route path="/insert">
            <Insert />
          </Route>
        </div>
      </div>
    );
  }
}
export default App