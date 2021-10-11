import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../useAuth/useAuth';

const Register = () => {
  const {signInUsingGoogle, submitHandler} = useAuth()
    return (
      <div className="d-md-flex half">
      <div className="bg" ></div>
      <div className="contents">
    
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-12">
              <div className="form-block mx-auto">
                <div className="text-center mb-5">
                  <h3 className="text-uppercase">Create A New Account <strong>Ema JoHn</strong></h3>
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
                  
                  <div className="d-sm-flex mb-5 align-items-center">
                    <label className="control control--checkbox mb-3 mb-sm-0"><span className="caption">Remember me</span>
                      <input type="checkbox"/>
                      <div className="control__indicator"></div>
                    </label>
                    {/* <span className="ml-auto"><Link to="/Shop" className="forgot-pass">Forgot Password</Link></span>  */}
                  </div>
    
                  <button type="submit"  className="btn btn-block py-2 btn-primary mr-5" >Login</button>
                  <Link to="/login"> Create A New Account</Link>
    
                  <span className="text-center my-3 d-block">or</span>
              
                  <div className="">
                  <button  className="btn btn-block py-2 btn-facebook  w-100 mb-2">
                    <span className="icon-facebook mr-3 "></span> Login with facebook
                  </button>
                  <button className="btn  py-2 btn-google w-100" onClick={signInUsingGoogle} >Login with Google</button>
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

export default Register;