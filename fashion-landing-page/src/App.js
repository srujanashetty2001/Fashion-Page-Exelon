import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Info from './components/Info';
import './App.css';

function App() {
  return (
    <div>
      <div className='main-container'> 
      
      <Header />
      <Hero />
      </div>
      <Info />
    </div>
  );
}

export default App;
