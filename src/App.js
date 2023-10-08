import './App.css';

import { Routes, Route } from "react-router-dom"
import Home from './components/home/home.js';
import Login from './components/Login/Login';
import Notification from './components/Notification/Notification.js';
import JobOpening from './components/Job_opening/JobOpening.js';
import MyProfile from './components/Profile/MyProfile';
function App() {
  return (
    <div>
      <Routes>
            <Route exact strict path="/" element={ <Home /> } />
            <Route exact strict path="/login" element={ <Login /> } />
            <Route exact strict path="/myprofile" element={ <MyProfile /> } />
            
            <Route exact strict path="/notification" element={ <Notification /> } />
            <Route exact strict path='/JobOpening' element = {<JobOpening/>} />
      </Routes>
    </div>
    
  );
}

export default App;
