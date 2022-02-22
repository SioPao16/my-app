import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

import AskITLogo from '../../images/AskITLogo.png';
import TutorListModal from '../../modals/tutee/TutorListModal';
import TutorNoListModal from '../../modals/tutee/TutorNoListModal';

import '../../styles/CustomLayout.css';
import '../../styles/tutee/TuteeConsult.css';

function TuteeConsult() {
  const [tuteeTutorListModalShow, tuteeTutorListSetModalShow] = useState(false);

  return (
    <div>
      <Row className="g-0 tuteeConsultPageMain">

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
            <Link to="/tuteeAppointment" style={{ textDecoration: "none" }}>
              <Row className="g-0 userSidePanelNavigationsOption">
                <Col className="col-2 ti-calendar userSidePanelNavigationsIcon"></Col>
                <Col className="col-10 userSidePanelNavigationsName">APPOINTMENTS</Col>
              </Row>
            </Link>
            <Link to="/tuteeMessenger" style={{ textDecoration: "none" }}>
              <Row className="g-0 userSidePanelNavigationsOption">
                <Col className="col-2 ti-comments userSidePanelNavigationsIcon"></Col>
                <Col className="col-10 userSidePanelNavigationsName">MESSAGES</Col>
              </Row>
            </Link>
            <Row className="g-0 userSidePanelNavigationsOptionSelected">
              <Col className="col-2 ti-blackboard userSidePanelNavigationsIcon"></Col>
              <Col className="col-10 userSidePanelNavigationsName">CONSULT WITH A TUTOR</Col>
            </Row>
            <Link to="/tuteeWatch" style={{ textDecoration: "none" }}>
              <Row className="g-0 userSidePanelNavigationsOption">
                <Col className="col-2 ti-video-camera userSidePanelNavigationsIcon"></Col>
                <Col className="col-10 userSidePanelNavigationsName">WATCH TUTORIAL VIDEOS</Col>
              </Row>
            </Link>
            <Link to="/tuteePassword" style={{ textDecoration: "none" }}>
              <Row className="g-0 userSidePanelNavigationsOption">
                <Col className="col-2 ti-lock userSidePanelNavigationsIcon"></Col>
                <Col className="col-10 userSidePanelNavigationsName">CHANGE PASSWORD</Col>
              </Row>
            </Link>
          </Row>
        </Col>

        {/* Comment: This is the Body Panel */}
        <Col md={10} lg={10} xl={10} className="userMainPanel">
          <nav className="userMainPanelNavBar">
            <Row className="g-0">
              <Col className="col userMainPanelNavBarTitle">
                CONSULT WITH A TUTOR
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

          <Col xs={11} sm={11} md={9} lg={7} xl={6} className="g-0 tuteeConsultPageConsultation">
            <Row className="g-0 tuteeConsultPageSubjectsTitle">
              <h3 className="tuteeConsultPageHeadersTitle">What do you want to learn?</h3>
            </Row>
            <div className="g-0 tuteeConsultPageSubjectsList">
              <button type="submit" className="tuteeConsultPageSubjectsListButton" onClick={() => tuteeTutorListSetModalShow(true)}>Java Fundamentals</button>
              <button type="submit" className="tuteeConsultPageSubjectsListButton" onClick={() => tuteeTutorListSetModalShow(true)}>Advanced Java</button>
              <button type="submit" className="tuteeConsultPageSubjectsListButton" onClick={() => tuteeTutorListSetModalShow(true)}>Object-Oriented Programming</button>
              <button type="submit" className="tuteeConsultPageSubjectsListButton" onClick={() => tuteeTutorListSetModalShow(true)}>Data Structures and Algorithms</button>
              <button type="submit" className="tuteeConsultPageSubjectsListButton" onClick={() => tuteeTutorListSetModalShow(true)}>Basic Networking</button>
              <button type="submit" className="tuteeConsultPageSubjectsListButton" onClick={() => tuteeTutorListSetModalShow(true)}>Advanced Networking</button >
              <button type="submit" className="tuteeConsultPageSubjectsListButton" onClick={() => tuteeTutorListSetModalShow(true)}>System Administration and Maintenance</button >
              <button type="submit" className="tuteeConsultPageSubjectsListButton" onClick={() => tuteeTutorListSetModalShow(true)}>Operating Systems</button >
              <button type="submit" className="tuteeConsultPageSubjectsListButton" onClick={() => tuteeTutorListSetModalShow(true)}>Database Systems 1</button >
              <button type="submit" className="tuteeConsultPageSubjectsListButton" onClick={() => tuteeTutorListSetModalShow(true)}>Database Systems 2</button >
              <button type="submit" className="tuteeConsultPageSubjectsListButton" onClick={() => tuteeTutorListSetModalShow(true)}>Project Management</button >
              <button type="submit" className="tuteeConsultPageSubjectsListButton" onClick={() => tuteeTutorListSetModalShow(true)}>Systems Analysis, Design and Prototyping</button >

              <TutorListModal show={tuteeTutorListModalShow} onHide={() => tuteeTutorListSetModalShow(false)} />
            </div >
          </Col>
        </Col >

      </Row >
    </div >
  );
}

export default TuteeConsult;

<TutorListModal />;

<TutorNoListModal />