import React, {useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import ContactsList from './containers/ContactsList/ContactsList';
import Form from './containers/Form/Form';
import { getContacts } from './store/contacts/contacts.slice';
import { useAppDispatch } from './store/store';

const App: React.FunctionComponent = (): React.ReactElement => {

  const dispatch = useAppDispatch()

  useEffect(()=>{
    dispatch(getContacts())
  },[])

  return (
    <div className="App">
      <Routes>
        <Route element={<Layout/>}>
        <Route path='/' element={<ContactsList/>}/>
          <Route path='/add-form' element={<Form/>}/>
          <Route path='/:key/edit' element={<Form/>}/>
          <Route path='*' element={<div><h1>Page not found</h1></div>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
