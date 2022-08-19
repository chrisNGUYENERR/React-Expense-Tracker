import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExpenseTracker from './components/ExpenseTracker';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import NavBar from './components/NavBar';


function App() {
  return (
    <BrowserRouter>
          <NavBar />
      <div className="App">
        <Routes>
          <Route path='/' element={ <LoginForm /> } />
          <Route path='/register' element={ <RegisterForm /> } />
          <Route path='/guapnarc' element={ <ExpenseTracker /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
