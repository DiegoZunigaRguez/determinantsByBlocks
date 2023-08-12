import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Welcome from './components/welcome/welcome';
import Developers from './components/developers/developers';
import Footer from './components/footer/footer';

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <Welcome/>
      <Developers/>
      <Footer/>
    </>
  );
}

export default App;
