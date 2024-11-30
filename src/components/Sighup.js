import React from 'react';
import './Signup.css';
import { useFormik } from 'formik';
import { SignupValidation } from '../schemas/validation';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";


const initialValues = {
    name: "",
    email: "",
    password: "",
    cpassword: ""
};

const Signup = () => {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: SignupValidation,
        onSubmit: async (values) => {
            try {
                const response = await fetch('https://loginproject-nu.vercel.app/auth/signup', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: values.name,
                        email: values.email,
                        password: values.password,
                    }),
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.error || `Error ${response.status}`);
                }

                // Parse JSON response
                const data = await response.json();
               
                console.log(data);
                if(data){
                    // localStorage.setItem('token', data.authtoken);
                    navigate('/login');
                    toast.success("your account is created");
                    
                    
                }
                else{
                    toast.error("invalid credential");

                }

                } catch (error) {
                console.error("Error during submission:", error);
                alert(`Signup failed: ${error.message}`);
            }
        },
    });

    return (
        <div>
            <div className='maincontainer'>
                <h2>Signup Page</h2>
                <form onSubmit={formik.handleSubmit}>
                    {/* Name Input */}
                    <label>Enter your name</label>
                    <input
                        className='input'
                        name='name'
                        type='text'
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.name && formik.errors.name && (
                        <p className='error-line'>{formik.errors.name}</p>
                    )}

                    {/* Email Input */}
                    <label>Enter your Email</label>
                    <input
                        className='input'
                        name='email'
                        type='email'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && formik.errors.email && (
                        <p className='error-line'>{formik.errors.email}</p>
                    )}

                    {/* Password Input */}
                    <label>Enter your password</label>
                    <input
                        className='input'
                        name='password'
                        type='password'
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.password && formik.errors.password && (
                        <p className='error-line'>{formik.errors.password}</p>
                    )}

                    {/* Confirm Password Input */}
                    <label>Confirm password</label>
                    <input
                        className='input'
                        name='cpassword'
                        type='password'
                        value={formik.values.cpassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.cpassword && formik.errors.cpassword && (
                        <p className='error-line'>{formik.errors.cpassword}</p>
                    )}

                    {/* Submit Button */}
                    <button className='button' type='submit'>Signup</button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
