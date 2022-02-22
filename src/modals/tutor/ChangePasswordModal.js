import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Modal } from 'react-bootstrap';

import '../../styles/tutor/TutorPassword.css';

function TutorPasswordPageModalForChangePassword(ChangePasswordProp) {
  const initialValues = { tutorCurrentPassword: "", tutorNewPassword: "", tutorConfirmPassword: "" };
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
    if (!formValues.tutorCurrentPassword) {
      errors.tutorCurrentPassword = <em>Password is required!</em>;
    }
    else if (formValues.tutorCurrentPassword.length < 8) {
      errors.tutorCurrentPassword = <em>Password must have 8 or more characters</em>;
    }
    if (!formValues.tutorNewPassword) {
      errors.tutorNewPassword = <em>Password is required!</em>;
    }
    else if (formValues.tutorNewPassword.length < 8) {
      errors.tutorNewPassword = <em>Password must have 8 or more characters</em>;
    }
    if (!formValues.tutorConfirmPassword) {
      errors.tutorConfirmPassword = <em>Password is required!</em>;
    }
    else if (formValues.tutorConfirmPassword !== formValues.tutorNewPassword) {
      errors.tutorConfirmPassword = <em>Passwords do not match</em>;
    }

    //To make sure the passwords are updated
    if (formValues.tutorCurrentPassword && formValues.tutorNewPassword && formValues.tutorConfirmPassword &&
      formValues.tutorCurrentPassword.length >= 8 && formValues.tutorNewPassword.length >= 8 && formValues.tutorConfirmPassword === formValues.tutorNewPassword) {
      alert("Password changed successfully!")
      history.push("/")
    }
    return errors;
  }

  return (
    <Modal {...ChangePasswordProp} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h3 className="tutorPasswordPageHeadersTitle">Change Password</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <div className="g-0">
          <div className="g-0 tutorChangePassword">
            <form onSubmit={handleSubmit}>
              <label htmlFor="password"><b>Current Password</b></label>
              <input
                type="password"
                placeholder="Enter Current Password"
                name="tutorCurrentPassword"
                className="tutorChangePasswordPageInputs"
                value={formValues.tutorCurrentPassword}
                onChange={handleChange} />
              <p style={{ color: 'red', padding: '0', margin: '0' }}> {formErrors.tutorCurrentPassword} </p>
              <br /><br />
              <label htmlFor="password"><b>New Password</b></label>
              <input
                type="password"
                placeholder="Enter New Password"
                name="tutorNewPassword"
                className="tutorChangePasswordPageInputs"
                value={formValues.tutorNewPassword}
                onChange={handleChange} />
              <p style={{ color: 'red', padding: '0', margin: '0' }}> {formErrors.tutorNewPassword} </p>
              <br />
              <label htmlFor="password"><b>Confirm New Password</b></label>
              <input
                type="password"
                placeholder="Confirm New Password"
                name="tutorConfirmPassword"
                className="tutorChangePasswordPageInputs"
                value={formValues.tutorConfirmPassword}
                onChange={handleChange} />
              <p style={{ color: 'red', padding: '0', margin: '0' }}> {formErrors.tutorConfirmPassword} </p>
              <br /><br /><br />
              <Row className="g-0" style={{ justifyContent: 'center' }}>
                <button type="submit" className="tutorChangePasswordPageButton">
                  <b>Update Password</b>
                </button>
              </Row>
            </form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default TutorPasswordPageModalForChangePassword;