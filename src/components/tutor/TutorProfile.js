import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

import AskITLogo from '../../images/AskITLogo.png'
import TutorSchedule from './TutorSchedule';
import TutorVideos from './TutorVideos';
import TutorPassword from './TutorPassword';

import '../../styles/CustomLayout.css';
import '../../styles/tutor/TutorProfile.css';

function TutorProfile() {
  return (
    <div>
      <Row className="g-0 tutorProfilePageMain">

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
            <Link to="/tutorAppointment" style={{ textDecoration: "none" }}>
              <Row className="g-0 userSidePanelNavigationsOption">
                <Col className="col-2 ti-calendar userSidePanelNavigationsIcon"></Col>
                <Col className="col-10 userSidePanelNavigationsName">APPOINTMENTS</Col>
              </Row>
            </Link>
            <Link to="/tutorMessenger" style={{ textDecoration: "none" }}>
              <Row className="g-0 userSidePanelNavigationsOption">
                <Col className="col-2 ti-comments userSidePanelNavigationsIcon"></Col>
                <Col className="col-10 userSidePanelNavigationsName">MESSAGES</Col>
              </Row>
            </Link>
            <Row className="g-0 userSidePanelNavigationsOptionSelected">
              <Col className="col-2 ti-user userSidePanelNavigationsIcon"></Col>
              <Col className="col-10 userSidePanelNavigationsName">PROFILE</Col>
            </Row>

          </Row>
        </Col>

        {/* Comment: This is the Body Panel */}
        <Col md={10} lg={10} xl={10} className="userMainPanel">
          <nav className="userMainPanelNavBar">
            <Row className="g-0">
              <Col className="col userMainPanelNavBarTitle">
                PROFILE
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

          <div className="g-0">
            <Row className="g-0 tutorProfilePage">
              <TutorSchedule />
              <TutorVideos />
              <TutorPassword />
            </Row>
          </div>
        </Col>

      </Row>
    </div>
  );
}

export default TutorProfile;