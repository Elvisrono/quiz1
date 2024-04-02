import React from "react"

function Login(){
    return(
        <div className="login-box">
            <h2><b>Login</b></h2>
            <br></br>
            <h3>Welcome to Serena Beach</h3>
            <br></br>
            <h4><i>Login to Book your Services</i></h4>
            <br></br>
            <form>
                <div className="user-box">
                    <input className="input" type="text" name="username" placeholder="username" />
                    <br></br>
                    <input className="input" type="password" name="password" placeholder="Password"  />
                    <br></br>
                    <div className="button-form">
                        <button id="formBtn" type="submit">LOGIN</button>
                        <div className="register">
                            <p className="signup"><h5>Don't have an account?</h5><br />
                            <a id="signupLink" href="/users/new">Register</a></p>
                        </div>
                    </div>
                </div>
                
                
            </form>

        </div>
    )
}

export default Login