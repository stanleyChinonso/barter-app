import React, {useState, useEffect} from 'react'
import './Forms.css'
import { Link } from 'react-router-dom';
import LogoText from './images/LogoText.png';

const Login = () => {
    
    // Form Validation 
    const [formValid, setFormValid] = useState({});
    const [form, setForm] = useState({
        email: "",
        psw: ""
    });

    useEffect(() => {       
        if (
            form.email !== "" &&
            form.psw !== ""
        ){
            setFormValid(true);
        } else {
            setFormValid(false);
        }
    }, [form])

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()

        setTimeout(() => {
            window.location="/"
        }, 5000);
    }

  return (
    <div className='main'>
        {/* Main Container  */}
        <div className='container'>

            {/* Logo and Title Section  */}
            <div className='logo-title'>
                <img className='logo' src={LogoText} alt=''/>
                <h1 className='title'>Login to your barter account</h1>
            </div>

            {/* Form Section  */}
            <div className='form-container'>
                <div>
                <form className='form' onSubmit={submitHandler}>
                    <div>
                        <label htmlFor='email'>email address / phone number</label>
                        <input type='text' name='email' required onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor='psw'>enter your password</label>
                        <input type='password' name='psw' required onChange={handleChange}/>
                    </div>
                    <a href='#'><p>Forgot password?</p></a>
                    <button className= {formValid?"auth_login-active":"auth_login-submit"}>Log in</button>
                    <h4>Don't have an account? 
                        <Link to='/signup'><a> Register</a></Link>
                    </h4>
                </form>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Login