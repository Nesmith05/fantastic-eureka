import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact-Me";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
          <About />
          <Skills />
          <Portfolio />
          <Experience />
          <Contact />
          <Footer />
      </div>
    );
  }
}

export default App;
