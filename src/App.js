import React from 'react';
import './App.css';
import Jobs from './jobs';

function App() {
  return (
    <diV className="App">
      <h2>Current Vacancies</h2>
    <Jobs jobTitle="Software Developer" yearsOfExp="3" shift="Morning" />
    <hr />
    <Jobs jobTitle="Accountant" yearsOfExp="2" shift="Night" />
    </diV>
  );
}

export default App;
