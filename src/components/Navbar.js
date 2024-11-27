import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import {toast } from "react-toastify";

const Navbar = () => {
    const navigate = useNavigate();
    const data = localStorage.getItem('token');

    const handleOnclick=()=>{
        localStorage.removeItem('token');
        toast.success("Logout Successfully");
        navigate('/login');
    }
  return (
    <div className='nav'>
        <ul>
            <div className='nav-item'>
                <li className='li-tag'><Link to='/'>home</Link></li>
            </div>
           
            <div className='nav-item'>
                <li ><Link to='/about'>about</Link></li>
            </div>
            
            <div className='nav-item'>
                <li><Link to='/contact'>contact</Link></li>
            </div>
            
            {data ?<button id='logoutbutton' onClick={handleOnclick} className='nav-item' >Logout</button>:<form style={{display:'flex'}}>
                <div className='nav-item'>
                <li className='li-tag'><Link to='/login' >login</Link></li>
            </div>
            <div className='nav-item'>
                <li className='li-tag'><Link to='/signup'>singup</Link></li>
            </div></form>}
            
            
           
        </ul>
        
       
    </div>
  )
}

export default Navbar
