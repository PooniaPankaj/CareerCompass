import './App.css';

import { Routes, Route } from "react-router-dom"
import Home from './components/home/home.js';
import Login from './components/Login/Login';
import Notification from './components/Notification/Notification.js';
import JobOpening from './components/Job_opening/JobOpening.js';
import MyProfile from './components/Profile/MyProfile';
import Register from './components/Register/Register';
import Email from './components/VerifyEmail/Email';
function App() {
  return (
    <div>
      <Routes>
            <Route exact strict path="/" element={ <Home /> } />
            <Route exact strict path="/login" element={ <Login /> } />
            <Route exact strict path="/register" element={ <Register /> } />
            
            <Route exact strict path="/myprofile" element={ <MyProfile /> } />
            
            <Route exact strict path="/notification" element={ <Notification /> } />
            <Route exact strict path='/JobOpening' element = {<JobOpening/>} />
            <Route  exact strict path='/users/:id/verify/:token' element = {<Email/>} />
      </Routes>
    </div>
    
  );
}

export default App;
