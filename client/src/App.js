import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Nav from './components/Nav/Nav';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Main from './pages/Main';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
