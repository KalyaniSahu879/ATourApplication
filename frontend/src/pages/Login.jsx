import React from 'react'
 import { useState , useEffect } from 'react'

 import {
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCardFooter,
    MDBValidation,
    MDBBtn,
    MDBIcon,
    MDBSpinner,
  } from "mdb-react-ui-kit";
  import {Link} from 'react-router-dom';

  const initialstate = {
      email:"",
      password:""
  }

const Login = () => {
    const [formValue , setFormValue] = useState(initialstate);
    const {email , password} = formValue;
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    const onInputChange = (e) => {
       let {name,value} = e.target;
       setFormValue({...formValue , [name] : value}) 
    };
  return (
    <div style = {{margin:"auto" , padding:"15px" , maxWidth:"450px" , alignContent:" center" , marginTop:"120px"}}>
        <MDBCard alignment="center">
        <MDBIcon fas icon="user-circle" className="fa-2x" />
        <h5>Sign In</h5>
        <MDBCardBody>
          <MDBValidation onSubmit={handleSubmit} noValidate className="row g-3">
            <div className="col-md-12">
              <MDBInput
                label="Email"
                type="email"
                value={email}
                name="email"
                onChange={onInputChange}
                required
                invalid
                validation="Please provide your email"
              />
            </div>
            <div className="col-md-12">
              <MDBInput
                label="Password"
                type="password"
                value={password}
                name="password"
                onChange={onInputChange}
                required
                invalid
                validation="Please provide your password"
              />
            </div>
            <div className="col-12">
              <MDBBtn style={{ width: "100%" }} className="mt-2">
                { (
                  <MDBSpinner
                    size="sm"
                    role="status"
                    tag="span"
                    className="me-2"
                  />
                )}
                Login
              </MDBBtn>
            </div>
          </MDBValidation>
          <br />
          
        </MDBCardBody>
        <MDBCardFooter>
          <Link to="/register">
            <p>Don't have an account ? Sign Up</p>
          </Link>
        </MDBCardFooter>
      </MDBCard>
    </div>
  )
}

export default Login