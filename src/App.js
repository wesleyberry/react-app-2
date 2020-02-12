import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import PageContent from './components/PageContent';

function App() {
  return (
    <div className="App">
      <Navigation />
      <PageContent />
    </div>
  );
}

export default App;
