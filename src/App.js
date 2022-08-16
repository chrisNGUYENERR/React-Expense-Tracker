import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExpenseTracker from './components/ExpenseTracker';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>GuapNarc</h1>
      </header>
      <ExpenseTracker />
    </div>
  );
}

export default App;
