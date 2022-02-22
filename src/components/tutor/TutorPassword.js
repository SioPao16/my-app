import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

import ChangePasswordModal from '../../modals/tutor/ChangePasswordModal';

import '../../styles/CustomLayout.css';
import '../../styles/tutor/TutorPassword.css';

function TutorPassword() {
  const [tutorChangePasswordModalShow, tutorChangePasswordSetModalShow] = useState(false);

  return (
    <div className="g-0">
      <div className="g-0">
        <button className="tutorProfilePageButtons" onClick={() => tutorChangePasswordSetModalShow(true)}>
          <Row className="g-0">
            <Col md={3} lg={3} xl={3} className="ti-lock tutorProfileButtonIcon"></Col>
            <Col md={9} lg={9} xl={9} className="tutorProfileButtonName"><h2>Change Password</h2></Col>
          </Row>
        </button>

        <ChangePasswordModal show={tutorChangePasswordModalShow} onHide={() => tutorChangePasswordSetModalShow(false)} />
      </div>
    </div >
  );
}

export default TutorPassword;

<ChangePasswordModal />