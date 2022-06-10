import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import LogoText from '../Images/LogoText.png'
import './Forms.css'

const Signup = () => {
    const [formValid, setFormValid] = useState(false)
    const [form, setForm] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        psw: "",
        psw2: "",
        country: "",
        ref: ""
    });

    useEffect(()=>{
        if (
            form.fname !== "" &&
            form.lname !== "" &&
            form.email !== "" &&
            form.phone !== "" &&
            form.psw !== "" &&
            form.psw2 !== form.psw &&
            form.country !== "" 
        ){
            setFormValid(true)
        } else {
            setFormValid(false)
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
        <div className='container-2'>
            <div className='logo-title'>
                <img src={LogoText}  alt=''/>
                <h1 className='title'>Create your barter account</h1>
            </div>
            <div className='form-container'>
                <form  className='form' onSubmit={submitHandler}>
                    <div className='row'>
                        <div>
                            <label for='fname'>first name</label>
                            <input type='text' name='fname' onChange={handleChange}/>
                        </div>
                        <div>
                            <label for='lname'>last name</label>
                            <input type='text' name='lname' onChange={handleChange}/>
                        </div>
                    </div>
                    <div className='row'>
                        <div>
                            <label for='email'>email address</label>
                            <input type='email' name='email' onChange={handleChange}/>
                        </div>
                        <div>
                            <label for='phone'>phone number</label>
                            <input type='text' name='phone' onChange={handleChange}/>
                        </div>
                    </div>
                    <div className='row'>
                        <div>
                            <label for='psw'>password</label>
                            <input type='password' name='psw' onChange={handleChange}/>
                        </div>
                        <div>
                            <label for='psw2'>confirm password</label>
                            <input type='password' name='psw2' onChange={handleChange}/>
                        </div>
                    </div>
                    <div className='row'>
                        <div>
                            <label for='country'>country</label>
                            <input type='text' name='country' onChange={handleChange}/>
                        </div>
                        <div>
                            <label for='ref'>referral code</label>
                            <input type='text' name='ref'/>
                        </div>
                    </div>
                    <button className= {formValid?"auth_signup-active":"auth_signup-submit"}>Create account</button>
                    <h4>Already have an account?  
                        <a> Login</a>
                    </h4>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Signup