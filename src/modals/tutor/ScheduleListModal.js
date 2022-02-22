import React, { useState } from 'react';
import { Row, Col, Modal } from 'react-bootstrap';

import AddScheduleModal from './AddScheduleModal';
import EditScheduleModal from './EditScheduleModal';
import DeleteScheduleModal from './DeleteScheduleModal';

import '../../styles/tutor/TutorSchedule.css';

function TutorSchedulePageModalForScheduleList(ScheduleListProp) {
  const [tutorAddScheduleModalShow, tutorAddScheduleSetModalShow] = useState(false);
  const [tutorEditScheduleModalShow, tutorEditScheduleSetModalShow] = useState(false);
  const [tutorDeleteScheduleModalShow, tutorDeleteScheduleSetModalShow] = useState(false);

  return (
    <Modal {...ScheduleListProp} size="lg" aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h3 className="tutorSchedulePageHeadersTitle">My Schedules</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <div className="g-0">
          <div className="tutorSchedulePageScheduleCardMain">

            {/* Comment: Start of Schedule Cards */}
            <div className="tutorSchedulePageScheduleCard">

              <div classNames="tutorSchedulePageScheduleCardContainer">
                <Row className="g-0">
                  <Col xs={10} sm={10} md={10} lg={10} xl={10} className="col-10" />
                  <Col xs={1} sm={1} md={1} lg={1} xl={1} className="col-1 tutorSchedulePageSchedDelEdit">
                    <p className="tutorSchedulePageSchedDelEditText" style={{ color: '#f44336' }} onClick={tutorDeleteScheduleSetModalShow}>Delete</p>

                    <DeleteScheduleModal show={tutorDeleteScheduleModalShow} onHide={() => tutorDeleteScheduleSetModalShow(false)} />
                  </Col >
                  <Col xs={1} sm={1} md={1} lg={1} xl={1} className="col-1 tutorSchedulePageSchedDelEdit">
                    <p className="tutorSchedulePageSchedDelEditText" style={{ color: '#2196f3' }} onClick={() => tutorEditScheduleSetModalShow(true)}>Edit</p>

                    <EditScheduleModal show={tutorEditScheduleModalShow} onHide={() => tutorEditScheduleSetModalShow(false)} />
                  </Col>
                </Row>
                <Row className="g-0 tutorSchedulePageSchedContainer">
                  <p className="tutorSchedulePageSchedContainerText">Subject: Java Programming</p>
                  <p className="tutorSchedulePageSchedContainerText">Date: January 1</p>
                  <p className="tutorSchedulePageSchedContainerText">Time: 8:30AM - 10:30AM</p>
                </Row>
              </div>
            </div>

          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button type="submit" className="tutorSchedulePageFooterButton" onClick={() => tutorAddScheduleSetModalShow(true)}><b>Add a Schedule</b></button>

        <AddScheduleModal show={tutorAddScheduleModalShow} onHide={() => tutorAddScheduleSetModalShow(false)} />
      </Modal.Footer>
    </Modal>
  );
}

export default TutorSchedulePageModalForScheduleList;

<AddScheduleModal />;

<EditScheduleModal />;

<DeleteScheduleModal />