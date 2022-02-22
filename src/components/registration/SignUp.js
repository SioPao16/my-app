import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

import AskITLogo from '../../images/AskITLogo.png';

import '../../styles/registration/CustomNavBar.css';
import '../../styles/registration/SignUp.css';

function CreateAccount() {
  const initialValues = { signUpFirstName: "", signUpLastName: "", signUpEmail: "", signUpPassword: "" };
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
    if (!values.signUpFirstName) {
      errors.signUpFirstName = <em>First Name is required!</em>;
    }

    if (!values.signUpLastName) {
      errors.signUpLastName = <em>Last Name is required!</em>;
    }

    if (!values.signUpEmail) {
      errors.signUpEmail = <em>Email is required!</em>;
    }
    else if (!regex.test(values.signUpEmail)) {
      errors.signUpEmail = <em>This is not a valid email format</em>;
    }

    if (!values.signUpPassword) {
      errors.signUpPassword = <em>Password is required!</em>;
    }
    else if (values.signUpPassword.length < 8) {
      errors.signUpPassword = <em>Password must have 8 or more characters</em>;
    }

    //For Signing Up
    if (values.signUpFirstName && values.signUpPassword && regex.test(values.signUpEmail) && values.signUpPassword.length >= 8) {
      alert("Account created successfully!")
      history.push("/")

    }

    return errors;
  }
  return (
    <div className="g-0 signUpPageMain">

      {/* Comment: This is the Nav Bar */}
      <nav className="customNavBar">
        <Row className="g-0">
          <Col className="col">
            <img src={AskITLogo} alt="Ask IT Logo" className="customNavBarAskITLogo" height="100px" />
          </Col>
          <Col className="col">
            <p className="customNavBarAskITName">AskIT</p>
          </Col>
          <Col className="col">
            <div className="customNavBarButton">
              <button className="customNavBarLoginButton">
                <Link to="/" style={{ textDecoration: "none", color: 'black' }}>
                  <b className="customNavBarLoginButtonText">Log In</b>
                </Link>
              </button>
            </div>
          </Col>
        </Row>
      </nav >

      {/* Comment: This is the Body */}
      <Row className="g-0 signUpPageMainBox">
        <Col lg={1} xl={3} className="col signUpPageMainBoxBorderLine" />
        <Col xs={12} sm={12} md={12} lg={10} xl={6}>
          <form className="signUpPageInformationForm" onSubmit={handleSubmit}>
            <h2 className="signUpPageFormTitle">Create your Account</h2><br />
            <hr className="signUpPageHorizontalRule" />

            <label htmlFor="role"><b>Role </b><em>(Tutor or Tutee)</em></label>
            <br />
            <select className="signUpPageRoleDropdown">
              <option value="1">Tutee</option>
              <option value="2">Tutor</option>
            </select><br /><br />

            <label htmlFor="firstName"><b>First Name</b></label>
            <input
              type="text"
              placeholder="Enter First Name"
              name="signUpFirstName"
              className="signUpPageInputs"
              value={formValues.signUpFirstName}
              onChange={handleChange} />
            <p style={{ color: 'red', padding: '0', margin: '0' }}> {formErrors.signUpFirstName} </p>
            <br />

            <label htmlFor="lastName"><b>Last Name</b></label>
            <input
              type="text"
              placeholder="Enter Last Name"
              name="signUpLastName"
              className="signUpPageInputs"
              value={formValues.signUpLastName}
              onChange={handleChange} />
            <p style={{ color: 'red', padding: '0', margin: '0' }}> {formErrors.signUpLastName} </p>
            <br />

            <label htmlFor="email"><b>Email</b></label>
            <input
              type="email"
              placeholder="name@example.com"
              name="signUpEmail"
              className="signUpPageInputs"
              value={formValues.signUpEmail}
              onChange={handleChange} />
            <p style={{ color: 'red', padding: '0', margin: '0' }}> {formErrors.signUpEmail} </p>
            <br />

            <label htmlFor="password"><b>Password</b></label>
            <input
              type="password"
              placeholder="********"
              name="signUpPassword"
              className="signUpPageInputs"
              value={formValues.signUpPassword}
              onChange={handleChange} />
            <p style={{ color: 'red', padding: '0', margin: '0' }}> {formErrors.signUpPassword} </p>
            <br /><br />

            <Row className="row g-0" style={{ justifyContent: 'center' }}>
              <button
                type="submit"
                className="signUpPageButtons"
                style={{ width: '50%' }}><b>Create Account</b>
              </button>
            </Row>
          </form>
        </Col>
        <Col lg={1} xl={3} className="col signUpPageMainBoxBorderLine" />
      </Row>

    </div>
  );
}

export default CreateAccount;