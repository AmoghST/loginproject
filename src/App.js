import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Sighup from './components/Sighup';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import RefrshHandler from './components/RefrshHandler';

function App() {
  const [isAuthenticate, setAuthenticate] = useState(false);
  const PrivateComponent=({element})=>{
    return isAuthenticate ? element : <Navigate to='/login'/>

  }
  return (
    <div className="App">
    <Router>
      <Navbar/>
      <RefrshHandler setIsAuthenticated={setAuthenticate}/>
      <Routes> 
          <Route path='/' element={<PrivateComponent element={<Home/>}/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Sighup/>}/>
          <Route path='/about' element={<PrivateComponent element={<About/>}/>}/>
          <Route path='/contact' element={<PrivateComponent element={<Contact/>}/>}/>

      </Routes>
  
    </Router>
     
    </div>
  );
}

export default App;
