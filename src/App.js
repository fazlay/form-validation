import React, { useState } from 'react';
import './App.css';

function App() {
  let userInfo = { username: '', email: '', password: '' };
  let error = { username: '', email: '', password: '' };

  const [updatedInfo, setUpdatedInfo] = useState({});

  const [errorMessage, setErrorMessage] = useState({ error });
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
   
    userInfo = { ...userInfo, [name]: value };
  };
  const handleSubmit = (e) => {
    e.preventDefault();
   
    validation(userInfo);
    if (isSubmit) {
      setUpdatedInfo(userInfo);
      alert('user Account Information send to server');
    } else {
      console.log('Infromtation is Worng');
    }
  };
  const validation = (userInfo) => {
    const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    console.log(userInfo.password);
    console.log(regex.test(userInfo.password));

    if (userInfo?.username === '') {
      error.username = 'User Name is Required';
     ;
    }
    if (userInfo?.email === '') {
      error.email = 'Email is Required';
 
    }
    if (userInfo?.password === '') {
      error.password = 'Password is Required';
     
    } else if (!regex.test(userInfo?.password)) {
      error.password = 
      
      `Password 7 - 15 characters with one 
       numeric and a special character`;
     
    }
    setErrorMessage(error);
    if (errorMessage.length < 0) {
      setIsSubmit(true);
    }
  };
  return (
    <div className='App'>
      <div className='container'>
        <div className='form-container'>
          <h2 className='heading '>Create a New Account</h2>
          <div className='from-group'>
            <form onSubmit={handleSubmit}>
              <h4 className='label'>Name :</h4>
              <input
                type='name'
                name='username'
                placeholder='Enter Your Name'
                onChange={handleChange}
              />
              <p className='warning'>
                {errorMessage.username && errorMessage.username}
              </p>
              <h4 className='label'>E-mail :</h4>

              <input
                type='email'
                name='email'
                placeholder='Enter Your E-mail'
                onChange={handleChange}
              />
              <p className='warning'>
                {errorMessage.email && errorMessage.email}
              </p>
              <h4 className='label'>Password :</h4>

              <input
                type='password'
                name='password'
                placeholder='Enter Your Password'
                onChange={handleChange}
              />
              <pre className='warning'>
                {errorMessage.password && 
                errorMessage.password}
              </pre>
              <input className='submitBtn' type='submit' value='Sign Up' />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
