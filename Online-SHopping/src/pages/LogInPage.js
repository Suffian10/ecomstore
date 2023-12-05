import React from 'react'
import { Link } from 'react-router-dom'
import "../page styles/Signup.css"

export default function LogInPage() {
  const showpassword = () => {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  return (

    <div className='signup-wrapper'>
      <div className='signup-container'>
        <h1>Welcome to WebCart</h1>
        <div className='Signup-form'>
          <form>
            <div className='signup-field'>
              <label className='label-tag'>
                Email
              </label>
              <input
                className='signup-inputfield'
                type='email'
                placeholder='Enter Email'
              />
            </div>
            <div className='signup-field'>
              <label className='label-tag'>
                Password
              </label>
              <input
              id="myInput"
                className='signup-inputfield'
                type='passowrd'
                placeholder='Enter password'
              />
            </div>
            {/* <button onClick={showpassword}>Show Password</button> */}
            {/* <button>Submit</button> */}
            <h1 className='text-btn-2'>
              You want to create an account?
              <br />
              <Link className='kuch-bhi' to={"/signup"}>
                Sign Up
              </Link>
            </h1>
          </form>

        </div>
      </div>
    </div>
  )
}
