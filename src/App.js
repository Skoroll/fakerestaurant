import React from 'react';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import Header from './components/Layout/Header/Header.tsx';
import Footer from './components/Layout/Footer/Footer.tsx';
import Home from './pages/Home/Home.tsx';
import "./styles/base.scss"
function App() {
  return (
    <div className="App">
      <Header />
        <main>
          <Home />



        </main>
      <Footer />
    </div>
  );
}

export default App;
