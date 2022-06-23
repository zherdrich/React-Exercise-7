import React from 'react';
import './App.css';
import Header from './components/Header';
import MenuList from './components/MenuList';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Header/>
<main>
      <MenuList/>
      <Sidebar/>
      
</main>


    </div>
  );
}

export default App;
