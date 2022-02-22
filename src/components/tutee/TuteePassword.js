import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

import AskITLogo from '../../images/AskITLogo.png';

import '../../styles/CustomLayout.css';
import '../../styles/tutee/TuteePassword.css';

function TuteePasword() {
  const initialValues = { tuteeCurrentPassword: "", tuteeNewPassword: "", tuteeConfirmPassword: "" };
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
  const validate = (formValues) => {
    const errors = {};
    if (!formValues.tuteeCurrentPassword) {
      errors.tuteeCurrentPassword = <em>Password is required!</em>;
    }
    else if (formValues.tuteeCurrentPassword.length < 8) {
      errors.tuteeCurrentPassword = <em>Password must have 8 or more characters</em>;
    }
    if (!formValues.tuteeNewPassword) {
      errors.tuteeNewPassword = <em>Password is required!</em>;
    }
    else if (formValues.tuteeNewPassword.length < 8) {
      errors.tuteeNewPassword = <em>Password must have 8 or more characters</em>;
    }
    if (!formValues.tuteeConfirmPassword) {
      errors.tuteeConfirmPassword = <em>Password is required!</em>;
    }
    else if (formValues.tuteeConfirmPassword !== formValues.tuteeNewPassword) {
      errors.tuteeConfirmPassword = <em>Passwords do not match</em>;
    }

    //To make sure the passwords are updated
    if (formValues.tuteeCurrentPassword && formValues.tuteeNewPassword && formValues.tuteeConfirmPassword &&
      formValues.tuteeCurrentPassword.length >= 8 && formValues.tuteeNewPassword.length >= 8 && formValues.tuteeConfirmPassword === formValues.tuteeNewPassword) {
      alert("Password changed successfully!")
      history.push("/")
    }

    return errors;
  }

  return (
    <div>
      <Row className="g-0 tuteeChangePasswordPageMain">

        {/* Comment: This is the Side Panel */}
        <Col md={2} lg={2} xl={2} className="userSidePanel">
          <nav className="userSidePanelNavBar">
            <Row className="g-0">
              <Col className="col" style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={AskITLogo} alt="Ask IT Logo" className="userSidePanelNavBarAskITLogo" height="100px" />
              </Col>
            </Row>
          </nav>

          {/* Comment: Navigations */}
          <Row className="g-0 userSidePanelNavigations">
            <Link to="/tuteeAppointment" style={{ textDecoration: "none" }}>
              <Row className="g-0 userSidePanelNavigationsOption">
                <Col className="col-2 ti-calendar userSidePanelNavigationsIcon"></Col>
                <Col className="col-10 userSidePanelNavigationsName">APPOINTMENTS</Col>
              </Row>
            </Link>
            <Link to="/tuteeMessenger" style={{ textDecoration: "none" }}>
              <Row className="g-0 userSidePanelNavigationsOption">
                <Col className="col-2 ti-comments userSidePanelNavigationsIcon"></Col>
                <Col className="col-10 userSidePanelNavigationsName">MESSAGES</Col>
              </Row>
            </Link>
            <Link to="/tuteeConsult" style={{ textDecoration: "none" }}>
              <Row className="g-0 userSidePanelNavigationsOption">
                <Col className="col-2 ti-blackboard userSidePanelNavigationsIcon"></Col>
                <Col className="col-10 userSidePanelNavigationsName">CONSULT WITH A TUTOR</Col>
              </Row>
            </Link>
            <Link to="/tuteeWatch" style={{ textDecoration: "none" }}>
              <Row className="g-0 userSidePanelNavigationsOption">
                <Col className="col-2 ti-video-camera userSidePanelNavigationsIcon"></Col>
                <Col className="col-10 userSidePanelNavigationsName">WATCH TUTORIAL VIDEOS</Col>
              </Row>
            </Link>
            <Row className="g-0 userSidePanelNavigationsOptionSelected">
              <Col className="col-2 ti-lock userSidePanelNavigationsIcon"></Col>
              <Col className="col-10 userSidePanelNavigationsName">CHANGE PASSWORD</Col>
            </Row>

          </Row>
        </Col>

        {/* Comment: This is the Body Panel */}
        <Col md={10} lg={10} xl={10} className="userMainPanel">
          <nav className="userMainPanelNavBar">
            <Row className="g-0">
              <Col className="col userMainPanelNavBarTitle">
                CHANGE PASSWORD
              </Col>

              <Col className="col">
                <div className="userMainPanelNavBarButton">
                  <button className="userMainPanelNavBarLogOutButton">
                    <Link to="/" style={{ textDecoration: "none", color: 'black' }}>
                      <b className="userMainPanelNavBarLogOutButtonText">Log Out</b>
                    </Link>
                  </button>
                </div>
              </Col>
            </Row>
          </nav>

          <Col xs={9} sm={7} md={7} lg={6} xl={4} className="g-0 tuteeChangePassword">
            <form onSubmit={handleSubmit}>
              <label htmlFor="password"><b>Current Password</b></label>
              <input
                type="password"
                placeholder="Enter Current Password"
                name="tuteeCurrentPassword"
                className="tuteeChangePasswordPageInputs"
                value={formValues.tuteeCurrentPassword}
                onChange={handleChange} />
              <p style={{ color: 'red', padding: '0', margin: '0' }}> {formErrors.tuteeCurrentPassword} </p>
              <br /><br />
              <label htmlFor="password"><b>New Password</b></label>
              <input
                type="password"
                placeholder="Enter New Password"
                name="tuteeNewPassword"
                className="tuteeChangePasswordPageInputs"
                value={formValues.tuteeNewPassword}
                onChange={handleChange} />
              <p style={{ color: 'red', padding: '0', margin: '0' }}> {formErrors.tuteeNewPassword} </p>
              <br />
              <label htmlFor="password"><b>Confirm New Password</b></label>
              <input
                type="password"
                placeholder="Confirm New Password"
                name="tuteeConfirmPassword"
                className="tuteeChangePasswordPageInputs"
                value={formValues.tuteeConfirmPassword}
                onChange={handleChange} />
              <p style={{ color: 'red', padding: '0', margin: '0' }}> {formErrors.tuteeConfirmPassword} </p>
              <br /><br /><br />
              <Row className="g-0" style={{ justifyContent: 'center' }}>
                <button type="submit" className="tuteeChangePasswordPageButton">
                  <b>Update Password</b>
                </button>
              </Row>
            </form>
          </Col>
        </Col >

      </Row >
    </div >
  );
}

export default TuteePasword;