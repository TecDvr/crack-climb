import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing/Landing';
import Crack from './components/Crack/Crack';
import Footer from './components/Footer/Footer';

// streamline as function

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Route 
          exact
          path='/'
          component={Landing}
        />

        <Route 
          exact
          path='/crack'
          component={Crack}
        />

      </div>
    )
  }
}
