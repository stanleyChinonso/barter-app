import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import LogoText from './images/LogoText.png'
import './Forms.css'

const Signup = () => {
    // Form Validation 
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

        {/* Main Container  */}
        <div className='container-2'>

            {/* Logo and Title Section  */}
            <div className='logo-title'>
                <img src={LogoText}  alt=''/>
                <h1 className='title'>Create your barter account</h1>
            </div>

            {/* Form Section  */}
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
                            <select className='country' required onChange={handleChange}>
                                <option value='' selected>Select Country</option>
                                <option value='NG'>Nigeria</option>
                                <option value='USA'>United States</option>
                                <option value='UK'>United Kingdom</option>
                                <option value='IR'>Ireland</option>
                                <option value='GH'>Ghana</option>
                                <option value='KE'>Kenya</option>
                                <option value='UG'>Uganda</option>
                                <option value='CAM'>Cameroon</option>
                                <option value='CI'>Côte d'Ivoire</option>
                                <option value='FR'>France</option>
                                <option value='GER'>Germany</option>
                                <option value='IT'>Italy</option>
                                <option value='VI'>Vietnam</option>
                                <option value='BU'>Burkina Faso</option>
                                <option value='SE'>Senegal</option>
                                <option value='SA'>South Africa</option>
                                <option value='HU'>Hungary</option>
                                <option value='BE'>Belgium</option>
                                <option value='SW'>Sweden</option>
                                <option value='SP'>Spain</option>
                                <option value='SL'>Slovakia</option>
                                <option value='GR'>Greece</option>
                                <option value='RO'>Romania</option>
                                <option value='SV'>Slovenia</option>
                                <option value='LU'>Luxembourg</option>
                                <option value='CR'>Croatia</option>
                                <option value='ES'>Estonia</option>
                                <option value='PO'>Portugal</option>
                                <option value='FI'>Finland</option>
                                <option value='MA'>Malta</option>
                                <option value='CY'>Cyprus</option>
                                <option value='CZ'>Czechia</option>
                                <option value='NE'>Netherlands</option>
                                <option value='PL'>Poland</option>
                                <option value='LI'>Lithunia</option>
                                <option value='BU'>Bulgaria</option>
                                <option value='DE'>Denmark</option>
                                <option value='AS'>Austria</option>
                                <option value='CA'>Canada</option>
                                <option value='UO'>United States MINOR outlying Islands</option>
                            </select>
                        </div>
                        <div>
                            <label for='ref'>referral code</label>
                            <input type='text' name='ref'/>
                        </div>
                    </div>
                    <button className= {formValid?"auth_signup-active":"auth_signup-submit"}>Create account</button>
                    <h4>Already have an account?  
                        <Link to='/login'><a> Login</a></Link>
                    </h4>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Signup