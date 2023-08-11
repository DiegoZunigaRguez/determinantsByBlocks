import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Welcome from './components/welcome/welcome';

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <Welcome/>
    </>
  );
}

export default App;
