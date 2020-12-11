import React, { Component } from 'react';
import Header from '../Header/Header';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

import './App.css';

export default class App extends Component {
  state = { hasError: false };

  render() {
    return (
      <div className="App">
        <div className="notification-container"></div>
        <Header />
        <main>
          <About />
          <Projects />
        </main>
        <footer className="flex">
          <Contact />
          <Footer />
        </footer>
      </div>
    );
  }
}
