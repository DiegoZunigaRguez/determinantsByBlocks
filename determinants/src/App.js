import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Welcome from './components/welcome/welcome';
import About from './components/about/about';

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <Welcome/>
      <About/>
    </>
  );
}

export default App;
