import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Welcome from './components/welcome/welcome';
import About from './components/about/about';
import Developers from './components/developers/developers';
import Determinants from './components/determinants/det';
import Simulation from './components/simulation/Simulation';
import Space from './components/space/space';
/*import Footer from './components/footer/footer';
import Determinants from './components/determinants/det';
import Simulation from './components/simulation/Simulation';*/
//import Footer from './components/footer/footer';

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <Welcome/>
      <About/>
      <Determinants/>
      <Simulation/>
      <Space/>
      <Developers/>
    </>
  );
}

export default App;
