import './App.css';

import { Routes, Route } from "react-router-dom"
import Home from './components/home/home.js';
import Login from './components/Login/Login';
function App() {
  return (
    <div>
      <Routes>
            <Route exact strict path="/" element={ <Home /> } />
            <Route exact strict path="/login" element={ <Login /> } />
            
      </Routes>
    </div>
    
  );
}

export default App;
