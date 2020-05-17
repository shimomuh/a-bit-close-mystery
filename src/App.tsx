import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="app">
      <header>
        <a href="/">
          <h1 className="appHeader">
            アビクロ<span className="appHeaderLogo">謎</span>解き
          </h1>
        </a>
      </header>
      <h2>謎解き一覧</h2>
      <p>
        Comming Soon...
      </p>
      <footer>
        Copyright &copy; 2020 <a className="author" href="https://twitter.com/shimomuh">@shimomuh</a>. All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;
