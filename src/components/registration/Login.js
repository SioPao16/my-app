import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

import AskITLogoWithName from '../../images/AskITLogoWithName.png';
import CollaborationPicture from '../../images/CollaborationPicture.png';

import '../../styles/registration/Login.css';

function Login() {
  const initialValues = { logInEmail: "", logInPassword: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {

    }
  }, [formErrors]);

  const history = useHistory();
  const validate = (values) => {
    const errors = {};
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i; //    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    if (!values.logInEmail) {
      errors.logInEmail = <em>Email is required!</em>;
    }
    else if (!regex.test(values.logInEmail)) {
      errors.logInEmail = <em>This is not a valid email format</em>;
    }
    if (!values.logInPassword) {
      errors.logInPassword = <em>Password is required!</em>;
    }
    else if (values.logInPassword.length < 8) {
      errors.logInPassword = <em>Password must have 8 or more characters</em>;
    }
    
    //For Logging In
    if (values.logInEmail === "tutee@domain.com" && values.logInPassword === "tutee123") {
      alert("Log In successful!")
      history.push("/tuteeAppointment")
    }
    else if (values.logInEmail === "tutor@domain.com" && values.logInPassword === "tutor123") {
      alert("Log In successful!")
      history.push("/tutorAppointment")
    }
    else if (values.logInEmail === "admin@domain.com" && values.logInPassword === "admin123") {
      alert("Logged in successfully!")
      history.push("/adminDashboard")
    }
    else{
      alert("The email or password is incorrect")
    }

    return errors;
    
  }

  return (
    <div>
      <Row className="g-0 logInPageMain">

        {/* Comment: This is the Credentials Area */}
        <Col xs={12} sm={12} md={4} lg={4} xl={4} className="logInPageCredentials">
          <Row className="g-0">
            <Col />
            <Col className="col-10">
              <div className="logInPageImgAskITLogoWithName">
                <img src={AskITLogoWithName} alt="Ask IT logo with name" width="300px" height="300px" />
              </div>
              <form className="logInPageInformationForm" onSubmit={handleSubmit}>
                <div>

                  <label htmlFor="email"><b>Email</b></label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    name="logInEmail"
                    className="logInPageInputs"
                    value={formValues.logInEmail}
                    onChange={handleChange} />
                  <p style={{ color: 'red', padding: '0', margin: '0' }}> {formErrors.logInEmail} </p>
                  <br /><br />

                  <label htmlFor="password"><b>Password</b></label>
                  <input
                    type="password"
                    placeholder="********"
                    name="logInPassword"
                    className="logInPageInputs"
                    value={formValues.logInPassword}
                    onChange={handleChange} />
                  <p style={{ color: 'red', padding: '0', margin: '0' }}> {formErrors.logInPassword} </p>
                  <br /><br />

                  <Row className="g-0">
                    <div>
                      <Link to="/forgotPassword">
                        <p className="logInPageForgotPasswordLink">Forgot Password?</p>
                      </Link>
                    </div>
                  </Row>
                  <button type="submit" className="logInPageLogInButton"><b>Log In</b></button>

                  <Link to="/signUp">
                    <button className="logInPageCreateAccountButton"><b>Create Account</b></button>
                  </Link>
                </div>
              </form>
            </Col>
            <Col />
          </Row>
        </Col>

        {/* Comment: This is the Photo Only Area */}
        <Col lg={8} xl={8} className="logInPageCollaborationPicture">
          <div className="logInPageImgCollaborationPicture">
            <img src={CollaborationPicture} alt="Collaboration" height="800px" />
          </div>
        </Col>

      </Row>
    </div>
  );
}

export default Login;