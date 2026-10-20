import { useUserContext } from '@/context/AuthContext';
import axios from 'axios';
import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function Login() {
  const [loginData, setLoginData] = useState({email: "", password: ""});
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const {login} = useUserContext();

  const navigate = useNavigate();
  const location = useLocation();

  // Extract the original path, or fallback to the home/dashboard page
  const from = location.state?.from?.pathname || "/";

  function handleChange(e) {
    setLoginData(
      {...loginData, [e.target.name]: e.target.value}
    );
  }

   //Simulate set user data in the context API and localstorage
  const userData = {"id": "c2576d53-e5c5-46e4-b6b5-8743ec59db64", "email": "emanuelnnko@gmail.com", "firstName": "Emanuel", "lastName": "Nnko", "password": 123, "role": "admin"};

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
        setLoading(true);
        const response = await axios.post("http://localhost:5000/api/users/login", {
                                          loginEmail: loginData.email,
                                          loginPassword: loginData.password
                                        });
      console.log(response.data.users);
      
      login(userData);
      navigate(from, { replace: true });
    } catch (error) {
      setError(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }  

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && ( 
          <p className="text-red-500" > Error: {error}</p>
      )}

      <div className='form-container'>
        <div className="form-main">
              <div id="notification-message">
              </div>
              <div className="form-main-content">
                <h1>Sign in to Your Account</h1>
                <h3 id="fail-login-message">Fail to log in, your login email or password are incorrect</h3>
                <form onSubmit={handleLogin}>
                    <label htmlFor="login-email">Email</label> <br />
                      <input type="text" id="login-email" name="email" value={loginData.email} onChange={handleChange} title="Please fill out this field." required /> <br />
                      {console.log(loginData.email)}
                      <p id="login-email-correction" className="input-correction-message"></p>
                      
                      <label htmlFor="login-password">Password</label> <br/>
                      <input type="password" id="login-password" name="password" value={loginData.password} onChange={handleChange} title="Please fill out this field." required /> <br/>
                      {console.log(loginData.password)}
                      <p id="login-password-correction" className="input-correction-message"></p>
                      <div className="login-form-middle-part">
                          <div>
                              <input type="checkbox" id="stay-signed" name="stay-signed" value="true" />                    
                              <label htmlFor="stay-signed">Stay signed in</label>
                          </div>
                          <p><Link to="#">Forgot username</Link></p>
                      </div>
                      <button type="submit" id="login-btn" name="submit">Log in</button>
                </form>
                <div className="separating-lines">
                      <hr/><p> or </p><hr/>
                  </div>
                  <Link to="google.com"><button className="google-button">Sing in with Google</button></Link>
                </div>
        </div>
      </div>
                
    </>

    
  )
}

export default Login