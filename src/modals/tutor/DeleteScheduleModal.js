import React from 'react';
import { Row, Col, Modal } from 'react-bootstrap';

import '../../styles/tutor/TutorSchedule.css';

function TutorSchedulePageModalForDeleteSchedule(DeleteScheduleProp) {

  return (
    <Modal {...DeleteScheduleProp} size="sm" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body className="show-grid" style={{ backgroundColor: '#424242' }}>
        <div className="g-0">
          <Row className="g-0">
            <p style={{ color: 'white' }}>Are you sure you want to delete this schedule?</p>
          </Row>
          <Row className="g-0">
            <Col className="tutorDeleteSchedulePageAlert">
              <button className="tutorDeleteSchedulePageAlertButton" id="tutorDeleteSchedulePageAlertButtonYes">Yes</button>
            </Col>
            <Col className="tutorDeleteSchedulePageAlert">
              <button className="tutorDeleteSchedulePageAlertButton" id="tutorDeleteSchedulePageAlertButtonNo" onClick={DeleteScheduleProp.onHide}>No</button>
            </Col>
          </Row>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default TutorSchedulePageModalForDeleteSchedule;