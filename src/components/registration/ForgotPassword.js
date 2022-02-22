import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

import AskITLogo from '../../images/AskITLogo.png';
import ResetPasswordModal from '../../modals/registration/ResetPasswordModal';

import '../../styles/registration/CustomNavBar.css';
import '../../styles/registration/ForgotResetPassword.css';

function ForgotPassword() {
  const [resetPasswordModalShow, resetPasswordSetModalShow] = useState(false);

  const initialValues = { forgotPasswordEmail: "" };
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
    if (!values.forgotPasswordEmail) {
      errors.forgotPasswordEmail = <em>Email is required!</em>;
    }
    else if (!regex.test(values.forgotPasswordEmail)) {
      errors.forgotPasswordEmail = <em>This is not a valid email format</em>;
    }

    //To detect a present email address
    if (values.forgotPasswordEmail && regex.test(values.forgotPasswordEmail)){
      history.push(resetPasswordSetModalShow(true))
    }

    return errors;
  }

  return (
    <div className="g-0 forgotResetPasswordPageMain">

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
      <Row className="g-0 forgotResetPasswordPageMainBox">
        <Col lg={3} xl={3} className="col forgotResetPasswordPageMainBoxBorderLine" />
        <Col xs={12} sm={12} md={12} lg={6} xl={6}>
          <form className="forgotResetPasswordPageInformationForm" onSubmit={handleSubmit}>
            <h2 className="forgotResetPasswordPageFormTitle">Forgot your Password?</h2><br />
            <br /><p>Please enter the email address you'd like your password reset information sent to</p>
            <hr className="forgotResetPasswordPageHorizontalRule" />

            <label htmlFor="emailForgot"><b>Email</b></label>
            <input
              type="email"
              placeholder="name@example.com"
              name="forgotPasswordEmail"
              className="forgotResetPasswordPageInputs"
              value={formValues.forgotPasswordEmail}
              onChange={handleChange} />
            <p style={{ color: 'red', padding: '0', margin: '0' }}> {formErrors.forgotPasswordEmail} </p>
            <br /><br /><br />

            <Row className="g-0" style={{ justifyContent: 'center' }}>
              <button
                type="submit"
                className="forgotResetPasswordPageButtons"
                style={{ width: '50%' }}
                /*onClick={() => resetPasswordSetModalShow(true)}*/><b>Send Reset Token</b>
              </button>
            </Row>

           <ResetPasswordModal show={resetPasswordModalShow} onHide={() => resetPasswordSetModalShow(false)} />
          </form>
        </Col>
        <Col lg={3} xl={3} className="col forgotResetPasswordPageMainBoxBorderLine" />
      </Row>

    </div>
  );
}

export default ForgotPassword;

<ResetPasswordModal />