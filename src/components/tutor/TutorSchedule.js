import React, { useState } from 'react';
import { Row, Col, Modal } from 'react-bootstrap';

import ScheduleListModal from '../../modals/tutor/ScheduleListModal';

import '../../styles/CustomLayout.css';
import '../../styles/tutor/TutorSchedule.css';

function TutorSchedule() {
  const [tutorScheduleListModalShow, tutorScheduleListSetModalShow] = useState(false);

  return (
    <div className="g-0">
      <div className="g-0">
        <button className="tutorProfilePageButtons" onClick={() => tutorScheduleListSetModalShow(true)}>
          <Row className="g-0">
            <Col md={3} lg={3} xl={3} className="ti-calendar tutorProfileButtonIcon"></Col>
            <Col md={9} lg={9} xl={9} className="tutorProfileButtonName"><h2>Schedules</h2></Col>
          </Row>
        </button>

        <ScheduleListModal show={tutorScheduleListModalShow} onHide={() => tutorScheduleListSetModalShow(false)} />
      </div>
    </div >
  );
}

export default TutorSchedule;

<ScheduleListModal />