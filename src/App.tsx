import React from 'react';
import Header from './layout/Header/Header';
import Movies from './pages/Movies/Movies';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-container">
        <Movies />
      </div>
    </div>
  );
}

export default App;
