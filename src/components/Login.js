import React from 'react'
import './Login.css';
import { useFormik } from 'formik';
import { LoginValidation } from '../schemas/validation';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const initialValues={
  email:"",
  password:""
}


const Login = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: LoginValidation,
    onSubmit:async (values, event)=>{

      console.log("login successfully ");
      
      console.log(values)

      let response = await fetch('https://loginproject-nu.vercel.app/auth/login',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({email:values.email, password:values.password})

      });
      const data = await response.json();
      console.log(data.authtoken);
      if(data){
        localStorage.setItem('token', data.authtoken);
       
        console.log("login successfully ");
        toast.success("login successfully");
        navigate('/');
      }
      else{
        console.log("invalid credential or there is any proble in response");
      }
      

    }

  })

  return (
    <div>
        <div className='maincontainer'>
        <h2>Login page</h2>
        <form onSubmit={formik.handleSubmit}>
           
            <label>Enter your Email</label>
            <input className='input' name="email" onChange={formik.handleChange} value={formik.values.email} type='text'></input>
            {formik.touched.email && formik.errors.email && (
                        <p className='error-line'>{formik.errors.email}</p>
                    )}
            <label>Enter your password</label>
            <input className='input' name='password' onChange={formik.handleChange} value={formik.values.password} type='text'></input>
            {formik.touched.password && formik.errors.password && (
                        <p className='error-line'>{formik.errors.password}</p>
                    )}
           
            <button className='button' type='submit'>Login</button>
            <ToastContainer />
           
        </form>
        
        
        </div>
        
      
    </div>
  )
}

export default Login
