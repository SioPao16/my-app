import React, { useState, useEffect } from 'react';
import { Row, Modal, Form } from 'react-bootstrap';

import '../../styles/tutor/TutorVideos.css';

function TutorVideoPageModalForEditVideo(EditVideoProp) {
  const initialValues = { editVideoTitle: "", editVideoDescription: "", editVideoAboutAuthor: "" };
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

  const validate = (values) => {
    const errors = {};
    if (!values.editVideoTitle) {
      errors.editVideoTitle = <em>Title is required!</em>;
    }

    if (!values.editVideoDescription) {
      errors.editVideoDescription = <em>Description is required!</em>;
    }

    return errors;
  }

  return (
    <Modal {...EditVideoProp} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h3 className="tutorVideoPageHeadersTitle">Edit Video</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <div className="g-0">
          <form onSubmit={handleSubmit}>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label><b>Upload Video</b></Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <br />

            <label htmlFor="videoTitle"><b>Title</b><i className="tutorEditVideoPageRequiredTextField"> (required)</i></label>
            <input
              type="text"
              placeholder="Title"
              name="editVideoTitle"
              className="tutorEditVideoPageVideoInputs"
              value={formValues.editVideoTitle}
              onChange={handleChange} />
            <p style={{ color: 'red', padding: '0', margin: '0' }}> {formErrors.editVideoTitle} </p>
            <br />

            <label htmlFor="videoDescription"><b>Description </b><i className="tutorEditVideoPageRequiredTextField"> (required)</i></label>
            <textarea
              placeholder="Description"
              name="editVideoDescription"
              className="tutorEditVideoPageVideoInputsLarge"
              value={formValues.editVideoDescription}
              onChange={handleChange} />
            <p style={{ color: 'red', padding: '0', margin: '0' }}> {formErrors.editVideoDescription} </p>
            <br />

            <label htmlFor="videoAboutAuthor"><b>About the Author</b></label>
            <textarea
              placeholder="About the Author"
              name="editVideoAboutAuthor"
              className="tutorEditVideoPageVideoInputsLarge"
              value={formValues.editVideoAboutAuthor}
              onChange={handleChange} />
            <p style={{ color: 'red', padding: '0', margin: '0' }}> {formErrors.editVideoAboutAuthor} </p>
            <br />
            <Row className="g-0" style={{ justifyContent: 'center' }}>
              <button type="submit" className="tutorEditVideoPageFooterButton" ><b>Save Video</b></button>
            </Row>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default TutorVideoPageModalForEditVideo;