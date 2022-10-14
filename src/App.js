import React from "react";
import Header from "./layout/Header/Header";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-container">
        <Home />
      </div>
    </div>
  );
}

export default App;
