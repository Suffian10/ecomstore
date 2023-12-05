import React from 'react'
import { Link } from 'react-router-dom'
import "../page styles/Signup.css"

export default function SignUp() {

    return (
        <div className='signup-wrapper'>
            <div className='signup-container'>
                <h1>Welcome to WebCart</h1>
                <div className='Signup-form'>
                    <form>
                        <div className='signup-field'>

                            <label className='label-tag'>
                                Username
                            </label>
                            <input
                                className='signup-inputfield'
                                type='text'
                                placeholder='Enter Your Name'
                            />
                        </div>
                        <div className='signup-field'>

                            <label className='label-tag'>
                                Email
                            </label>
                            <input
                                className='signup-inputfield'
                                type='email'
                                placeholder='Enter Your Email'
                            />
                        </div>
                        <div className='signup-field'>
                            <label className='label-tag'>
                                Password
                            </label>
                            <input
                                id="myInput"
                                className='signup-inputfield'
                                type='password'
                                placeholder='Enter Your Password'
                             />
                            <h1 className='text-btn'>
                                Already have an account then what are you waiting for?
                                <br />
                                <Link className='kuch-bhi' to={"/"}>

                                    Log In

                                </Link>
                            </h1>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}
