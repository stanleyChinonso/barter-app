import React, {useState, useEffect} from 'react'
import './Forms.css'
import { Link } from 'react-router-dom';
import LogoText from './images/LogoText.png';

const Login = () => {
    // const [errorMessages, setErrorMessages] = useState({});
    // const [isSubmitted, setIsSubmitted] = useState(false);

    // const errors = {
    //     email: "invalid email/phone number",
    //     psw: "invalid password"
    // };

    // const submitHandler = (e) => {
    //     e.preventDefault();

    //     var {email, psw} = document.forms[0];

    //     const userDetails = form.find((user) => user.email_address === email.value);

    //     if (userDetails) {
    //         if (userDetails.psw !== psw.value) {
    //             setErrorMessages({name: "psw", message:errors.psw});
    //         } else {
    //             setIsSubmitted(true);
    //         }
    //     } else {
    //         setErrorMessages({name: "email", message:errors.email});
    //     }
        
    // };

    // const renderErrorMessage = (name) => {
    //     name === errorMessages.name && (
    //         <div className="error">{errorMessages.message}</div>
    //     );
    // };
    
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
        sessionStorage.setItem('userDetails', JSON.stringify({...form}))

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
                        {/* {renderErrorMessage('email')} */}
                    </div>
                    <div>
                        <label htmlFor='psw'>enter your password</label>
                        <input type='password' name='psw' required onChange={handleChange}/>
                        {/* {renderErrorMessage('psw')} */}
                    </div>
                    <a href='#'><p>Forgot password?</p></a>
                    <button className= {formValid?"auth_login-active":"auth_login-submit"}>Log in</button>
                    <h4>Don't have an account? 
                        <Link to='/createaccount'><a> Register</a></Link>
                    </h4>
                </form>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Login