import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Signup.css'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const [name , setName] = useState()
    const [email , setEmail] = useState()
    const [password , setPassword] = useState()
     const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
       axios.post('http://localhost:3001/register',{name,email,password})
       .then(result =>{ console.log(result)
            navigate('/login')
    })
       .catch(error => console.log(error ))
    }
  return (
    <section className=' align-items-center vh-100 parent-style  ' >
        <div className='img-bck' ></div>
        <div className='style-box' >
        
        <div className='bg-white p-3 rounded w-25 input-container '>
        <div className='parent_style'><img src="./logo.png" width={200} height={105} alt="logo" /></div>
          
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor='email'>
                        <strong>Name</strong>
                    </label>
                    <input 
                    type='text'
                    placeholder='Enter Your Name'
                    autoComplete='off'
                    name='email'
                    className='form-control rounded'
                    onChange={(e)=> setName(e.target.value)}
                    />
                </div>
                <div className='mb-3'>
                <label htmlFor='email'>
                        <strong>Email</strong>
                    </label>
                    <input 
                    type='email'
                    placeholder='Enter Your Email'
                    autoComplete='off'
                    name='email'
                    className='form-control rounded'
                    onChange={(e)=> setEmail(e.target.value)}
                    />
                </div>
                <div className='mb-3'>
                <label htmlFor='email'>
                        <strong>Password</strong>
                    </label>
                    <input 
                    type='password'
                    placeholder='Enter Your Password'
                    autoComplete='off'
                    name='password'
                    className='form-control rounded'
                    onChange={(e)=> setPassword(e.target.value)}
                    />
                </div>
                <button type='submit' className='btn btn-success w-100 rounded-0'>
                    Register
                </button>
                </form>
                <p>Already Have an Account</p>
                <Link to={'/Login'} className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
            
        </div>
    </div>
    </section>
    
  )
}

export default Signup