import React, { useState, useEffect } from 'react';
import { Row, Modal, Form } from 'react-bootstrap';

import '../../styles/tutor/TutorVideos.css';

function TutorVideoPageModalForAddVideo(AddVideoProp) {
  const initialValues = { addVideoTitle: "", addVideoDescription: "", addVideoAboutAuthor: "" };
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
    if (!values.addVideoTitle) {
      errors.addVideoTitle = <em>Title is required!</em>;
    }

    if (!values.addVideoDescription) {
      errors.addVideoDescription = <em>Description is required!</em>;
    }

    return errors;
  }

  return (
    <Modal {...AddVideoProp} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h3 className="tutorVideoPageHeadersTitle">Add Video</h3>
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

            <label htmlFor="videoTitle"><b>Title</b><i className="tutorAddVideoPageRequiredTextField"> (required)</i></label>
            <input
              type="text"
              placeholder="Title"
              name="addVideoTitle"
              className="tutorAddVideoPageVideoInputs"
              value={formValues.addVideoTitle}
              onChange={handleChange} />
            <p style={{ color: 'red', padding: '0', margin: '0' }}> {formErrors.addVideoTitle} </p>
            <br />

            <label htmlFor="videoDescription"><b>Description </b><i className="tutorAddVideoPageRequiredTextField"> (required)</i></label>
            <textarea
              placeholder="Description"
              name="addVideoDescription"
              className="tutorAddVideoPageVideoInputsLarge"
              value={formValues.addVideoDescription}
              onChange={handleChange} />
            <p style={{ color: 'red', padding: '0', margin: '0' }}> {formErrors.addVideoDescription} </p>
            <br />

            <label htmlFor="videoAboutAuthor"><b>About the Author</b></label>
            <textarea
              placeholder="About the Author"
              name="addVideoAboutAuthor"
              className="tutorAddVideoPageVideoInputsLarge"
              value={formValues.addVideoAboutAuthor}
              onChange={handleChange} />
            <p style={{ color: 'red', padding: '0', margin: '0' }}> {formErrors.addVideoAboutAuthor} </p>
            <br />
            <Row className="g-0" style={{ justifyContent: 'center' }}>
              <button type="submit" className="tutorAddVideoPageFooterButton" ><b>Add Video</b></button>
            </Row>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default TutorVideoPageModalForAddVideo;