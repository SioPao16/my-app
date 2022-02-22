import React from 'react';
import { Row, Col, Modal } from 'react-bootstrap';

import '../../styles/tutor/TutorVideos.css';

function TutorVideoPageModalForDeleteVideo(DeleteVideoProp) {

  return (
    <Modal {...DeleteVideoProp} size="sm" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body className="show-grid" style={{ backgroundColor: '#424242' }}>
        <div className="g-0">
          <Row className="g-0">
            <p style={{ color: 'white' }}>Are you sure you want to delete this video?</p>
          </Row>
          <Row className="g-0">
            <Col className="tutorDeleteVideoPageAlert">
              <button className="tutorDeleteVideoPageAlertButton" id="tutorDeleteVideoPageAlertButtonYes">Yes</button>
            </Col>
            <Col className="tutorDeleteVideoPageAlert">
              <button className="tutorDeleteVideoPageAlertButton" id="tutorDeleteVideoPageAlertButtonNo" onClick={DeleteVideoProp.onHide}>No</button>
            </Col>
          </Row>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default TutorVideoPageModalForDeleteVideo;