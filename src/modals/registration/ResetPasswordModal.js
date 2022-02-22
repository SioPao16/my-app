import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Modal } from 'react-bootstrap';

import '../../styles/registration/ForgotResetPassword.css';

function ForgotPasswordPageModalForResetPassword(resetPasswordProp) {
  const initialValues = { resetToken: "", resetNewPassword: "", resetConfirmPassword: "" };
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
    if (!values.resetToken) {
      errors.resetToken = <em>Token is required!</em>;
    }
    if (!values.resetNewPassword) {
      errors.resetNewPassword = <em>Password is required!</em>;
    }
    else if (values.resetNewPassword.length < 8) {
      errors.resetNewPassword = <em>Password must have 8 or more characters</em>;
    }
    if (!values.resetConfirmPassword) {
      errors.resetConfirmPassword = <em>Password is required!</em>;
    }
    else if (values.resetConfirmPassword !== values.resetNewPassword) {
      errors.resetConfirmPassword = <em>Passwords are not the same</em>;
    }

    //To detect a present token and password
    if (values.resetToken && values.resetNewPassword && values.resetConfirmPassword &&
      values.resetNewPassword.length >= 8 && values.resetConfirmPassword === values.resetNewPassword) {
      alert("Password reset successfully!")
      history.push("/")
    }

    return errors;
  }

  return (
    <Modal {...resetPasswordProp} size="lg" aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h2 className="resetPasswordHeadersTitle">Reset your Password</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <div className="g-0">
          <div className="resetPasswordMain">
            <form onSubmit={handleSubmit}>
              <label for="resetToken"><b>Reset Token</b></label>
              <input
                type="text"
                placeholder="Enter Reset Token"
                name="resetToken"
                className="forgotResetPasswordPageInputs"
                value={formValues.resetToken}
                onChange={handleChange} />
              <p style={{ color: 'red', padding: '0', margin: '0' }}> {formErrors.resetToken} </p>
              <br /><br />

              <label for="newPassword"><b>New Password</b></label>
              <input
                type="password"
                placeholder="********"
                name="resetNewPassword"
                className="forgotResetPasswordPageInputs"
                value={formValues.resetNewPassword}
                onChange={handleChange} />
              <p style={{ color: 'red', padding: '0', margin: '0' }}> {formErrors.resetNewPassword} </p>
              <br />

              <label for="confirmPassword"><b>Confirm New Password</b></label>
              <input
                type="password"
                placeholder="********"
                name="resetConfirmPassword"
                className="forgotResetPasswordPageInputs"
                value={formValues.resetConfirmPassword}
                onChange={handleChange} />
              <p style={{ color: 'red', padding: '0', margin: '0' }}> {formErrors.resetConfirmPassword} </p>
              <br /><br />

              <br /><br />
              <Row className="row g-0" style={{ justifyContent: 'center' }}>
                <button
                  type="submit"
                  className="forgotResetPasswordPageButtons"
                  style={{ width: '50%' }}><b>Change Password</b>
                </button>
              </Row>
            </form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ForgotPasswordPageModalForResetPassword;