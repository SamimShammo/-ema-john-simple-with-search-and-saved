import React from 'react';
import './Login.css';
import img from './bg_1.jpg';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import useFirebase from '../../hooks/useFirebase';
import useAuth from '../../useAuth/useAuth';

const Login = () => {

const {signInUsingGoogle, submitHandler, setUser, setError} = useAuth();
const location = useLocation()
const history = useHistory()

const redirect_uri = location.state?.from || './shop'

const signIngoogle = () => {
  signInUsingGoogle()
  .then(result => {
    console.log(result.user);
    setUser(result.user);
    history.push(redirect_uri)
    
})
  .catch(error => {
      setError(error.message);
  })
}

    return (
     
  <div className="d-md-flex half">
  <div className="bg" style={{img}}></div>
  <div className="contents">

    <div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="col-md-12">
          <div className="form-block mx-auto">
            <div className="text-center mb-5">
              <h3 className="text-uppercase">Login to <strong>Ema JoHn</strong></h3>
            </div>
            <form  onSubmit={submitHandler}>
              <div className="form-group first">
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control" placeholder="your-email@gmail.com" id="username" />
              </div>
              <div className="form-group last mb-3">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" placeholder="Your Password" id="password" />
              </div>

              <div className="form-group last mb-3">
                    <label htmlFor="retype">Re-type your Password</label>
                    <input type="password" className="form-control" placeholder="Re-type your Password" id="retype" />
                  </div>
              <div className="d-sm-flex mb-5 align-items-center">
                <label className="control control--checkbox mb-3 mb-sm-0"><span className="caption">Remember me</span>
                  <input type="checkbox"/>
                  <div className="control__indicator"></div>
                </label>
                {/* <span className="ml-auto"><Link to="/Shop" className="forgot-pass">Forgot Password</Link></span>  */}
              </div>

              <button type="submit"  className="btn btn-block py-2 btn-primary mr-5" >Login</button>
              <Link to="/register"> Create A New Account</Link>

              <span className="text-center my-3 d-block">or</span>
          
              <div className="">
              <button  className="btn btn-block py-2 btn-facebook  w-100 mb-2">
                <span className="icon-facebook mr-3 "></span> Login with facebook
              </button>
              <button className="btn  py-2 btn-google w-100" onClick={signIngoogle} >Login with Google</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

  
</div>
    );
};

export default Login;