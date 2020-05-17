import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import '../styles/Base.scss'
import Index from './Index';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route exact path='/' component={Index} />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

const Header: React.FC = () => {
  return (
    <header>
      <a href="/">
        <h1>アビクロ<span className="headerLogo">謎</span>解き</h1>
      </a>
    </header>
  );
}

const Footer: React.FC = () => {
  return (
    <footer>
      Copyright &copy; 2020 <a href="https://twitter.com/shimomuh">@shimomuh</a>. All Rights Reserved.
    </footer>
  );
}

export default Router;
