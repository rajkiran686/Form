import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './Home'
import Signin from './Signin';
import Signup from './Signup';
import Success from './Success';
import Forget from './Forget';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/setpassword' element={<Forget/>} />
        <Route path='/signin/success' element={<Success/>}/> 
      </Routes>
      
    </div>
  );
}

export default App;
