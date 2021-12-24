import React from 'react';
import { Route, Routes } from 'react-router';

//components
import Login from './components/Login';
import Chat from './components/Chat';
import ConfigContextProvider from './context/ConfigContextProvider';

//styles
import './App.css';

// contexts

function App() {
  return (
    <div>
      <ConfigContextProvider>
        <Routes>
          <Route path="/" element={<Login />} >
          </Route>
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </ConfigContextProvider>
    </div >
  )
};

export default App;
