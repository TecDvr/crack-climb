import React from 'react';
import './App.css';
import Landing from './components/Landing/Landing';

// streamline as function

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Landing />
      </div>
    )
  }
}
