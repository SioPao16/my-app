import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Modal } from 'react-bootstrap';

import AskITLogo from '../../images/AskITLogo.png';
import TutorVideoListModal from '../../modals/tutee/TutorVideoListModal';
import TutorNoVideoListModal from '../../modals/tutee/TutorNoVideoListModal';

import '../../styles/CustomLayout.css';
import '../../styles/tutee/TuteeWatch.css';

function TuteeWatch() {
  const [tuteeVideoListModalShow, tuteeVideoListSetModalShow] = useState(false);

  return (
    <div>
      <Row className="g-0 tuteeWatchPageMain">

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
            <Link to="/tuteeConsult" style={{ textDecoration: "none" }}>
              <Row className="g-0 userSidePanelNavigationsOption">
                <Col className="col-2 ti-blackboard userSidePanelNavigationsIcon"></Col>
                <Col className="col-10 userSidePanelNavigationsName">CONSULT WITH A TUTOR</Col>
              </Row>
            </Link>
            <Row className="g-0 userSidePanelNavigationsOptionSelected">
              <Col className="col-2 ti-video-camera userSidePanelNavigationsIcon"></Col>
              <Col className="col-10 userSidePanelNavigationsName">WATCH TUTORIAL VIDEOS</Col>
            </Row>
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
                WATCH TUTORIAL VIDEOS
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

          <Col xs={11} sm={11} md={9} lg={8} xl={6} className="g-0 tuteeWatchPageWatch">
            <Row className="g-0 tuteeWatchPageTutorsTitle">
              <h3 className="tuteeWatchPageHeadersTitle">Choose a Tutor</h3>
            </Row>
            
            <div className="g-0 tuteeWatchPageTutorList">
              <button type="submit" className="tuteeWatchPageTutorListButton" onClick={() => tuteeVideoListSetModalShow(true)}>John Lendl T. Cuyugan</button>
              <button type="submit" className="tuteeWatchPageTutorListButton" onClick={() => tuteeVideoListSetModalShow(true)}>Ma. Graciela C. Felipe</button>
              <button type="submit" className="tuteeWatchPageTutorListButton" onClick={() => tuteeVideoListSetModalShow(true)}>Rhon Emmanuel S. Casem</button>
              <button type="submit" className="tuteeWatchPageTutorListButton" onClick={() => tuteeVideoListSetModalShow(true)}>Paolo Miguel Q. Sta. Ana</button>
              <button type="submit" className="tuteeWatchPageTutorListButton" onClick={() => tuteeVideoListSetModalShow(true)}>Joshua Elias O. Baldazo</button>
              <button type="submit" className="tuteeWatchPageTutorListButton" onClick={() => tuteeVideoListSetModalShow(true)}>Angelo B. Del Rosario</button>

              <TutorVideoListModal show={tuteeVideoListModalShow} onHide={() => tuteeVideoListSetModalShow(false)} />
            </div>
          </Col>
        </Col>

      </Row>
    </div>
  );
}

export default TuteeWatch;

<TutorVideoListModal />;

<TutorNoVideoListModal />