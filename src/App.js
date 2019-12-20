import React from 'react';
import './App.css';
import Landing from './components/Landing/Landing';
import Crack from './components/Crack/Crack';
import Footer from './components/Footer/Footer';

// streamline as function

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Landing />
        <Crack />
        <Footer />
      </div>
    )
  }
}
