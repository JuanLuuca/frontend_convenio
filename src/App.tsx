import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import { ConveniadoPessoa } from './pages/conveniado-pessoa';

const App = () => {
  return (
    <Routes>
      <Route path='/retaguarda-convenio/login' element={<Login />} ></Route>
      <Route path='/retaguarda-convenio/conveniado-pessoa' element={<ConveniadoPessoa />} ></Route>
    </Routes>
  )
};

export default App;