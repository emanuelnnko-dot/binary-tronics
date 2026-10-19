import React from 'react'

function Register() {
return (
    <>
      <div className="form-container">
         <div className="form-main">
            <div id="notification-message">
                
            </div>
            <div className="form-main-content">
                <h1>Create your account</h1>
                <form>
                      <label for="register-email">Existing email</label> <br/>
                      <input type="email" id="register-email" name="register-email" title="Please fill out this field." required /> <br/>
                      <p id="register-email-correction" className="input-correction-message"></p>
                      
                      <label for="f-name">Fist name</label> <br/>
                      <input type="text" id="f-name" name="f-name" title="Please fill out this field." required /> <br/>
                      <p id="f-name-correction" className="input-correction-message"></p>

                      <label for="l-name">Last name</label> <br/>
                      <input type="text" id="l-name" name="l-name" title="Please fill out this field." required /> <br/>
                      <p id="l-name-correction" className="input-correction-message"></p>

                      <label for="register-password">Password</label> <br/>
                      <input type="password" id="register-password" name="register-password" title="Please fill out this field." required /> <br/>
                      <p id="register-password-correction" className="input-correction-message"></p>

                      <label for="confirm-password">Confirm password</label> <br/>
                      <input type="password" id="confirm-password" name="confirm-password" title="Please fill out this field." required /> <br/>
                      <p id="confirm-password-correction" className="input-correction-message"></p>


                      <button type="submit" id="register-btn" name="register-btn">Create account</button>
                </form>
                <div className="separating-lines">
                    <hr/><p> or </p><hr/>
                </div>
                <a href="login.html"><button>Sign in instead</button></a>
            </div>
        </div>

      </div>

    </>
)

}

export default Register