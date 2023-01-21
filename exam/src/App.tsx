import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout/>}>
        <Route path='/' element={<div>Contacts</div>}/>
          <Route path='/add-form' element={<div>Add form</div>}/>
          <Route path='/:key/edit' element={<div>Edit form</div>}/>
          <Route path='*' element={<div><h1>Page not found</h1></div>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
