import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Table } from 'react-bootstrap';

import AskITLogo from '../../images/AskITLogo.png'

import '../../styles/CustomLayout.css';
import '../../styles/tutor/TutorAppointment.css';

function TutorAppointment() {
  return (
    <div>
      <Row className="g-0 tutorAppointmentPageMain">

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
            <Row className="g-0 userSidePanelNavigationsOptionSelected">
              <Col className="col-2 ti-calendar userSidePanelNavigationsIcon"></Col>
              <Col className="col-10 userSidePanelNavigationsName">APPOINTMENTS</Col>
            </Row>
            <Link to="/tutorMessenger" style={{ textDecoration: "none" }}>
              <Row className="g-0 userSidePanelNavigationsOption">
                <Col className="col-2 ti-comments userSidePanelNavigationsIcon"></Col>
                <Col className="col-10 userSidePanelNavigationsName">MESSAGES</Col>
              </Row>
            </Link>
            <Link to="/tutorProfile" style={{ textDecoration: "none" }}>
              <Row className="g-0 userSidePanelNavigationsOption">
                <Col className="col-2 ti-user userSidePanelNavigationsIcon"></Col>
                <Col className="col-10 userSidePanelNavigationsName">PROFILE</Col>
              </Row>
            </Link>
          </Row>
        </Col>

        {/* Comment: This is the Body Panel */}
        <Col md={10} lg={10} xl={10} className="userMainPanel">
          <nav className="userMainPanelNavBar">
            <Row className="g-0">
              <Col className="col userMainPanelNavBarTitle">
                APPOINTMENTS
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
          
          <div className="tutorAppointmentPageAllCalendarsContainer">
            
            <div className="tutorAppointmentPageMonthlyCalendarContainer">
              <h3>July</h3>
              <div className="tutorAppointmentPageMainCalendarContainer">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Day</th>
                      <th>Time</th>
                      <th>Tutee Name</th>
                      <th>Subject</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>1</th>
                      <td>9:00AM</td>
                      <td>John Lendl Cuyugan</td>
                      <td>Object-Oriented Programming</td>
                      <td>
                        <Link to="/tutorMessenger">
                          <button className="tutorAppointmentPageMainCalendarContainerChatButton"><b>Chat Now</b></button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th>2</th>
                      <td>10:00AM</td>
                      <td>Paolo Miguel Sta. Ana</td>
                      <td>System Administration and Maintenance</td>
                      <td>
                        <Link to="/tutorMessenger">
                          <button className="tutorAppointmentPageMainCalendarContainerChatButton"><b>Chat Now</b></button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th>3</th>
                      <td>11:00AM</td>
                      <td>Ma. Graciela Felipe</td>
                      <td>Project Management</td>
                      <td>
                        <Link to="/tutorMessenger">
                          <button className="tutorAppointmentPageMainCalendarContainerChatButton"><b>Chat Now</b></button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th>4</th>
                      <td>1:00PM</td>
                      <td>Rhon Emmanuel Casem</td>
                      <td>Database Systems 1</td>
                      <td>
                        <Link to="/tutorMessenger">
                          <button className="tutorAppointmentPageMainCalendarContainerChatButton"><b>Chat Now</b></button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th>5</th>
                      <td>2:00PM</td>
                      <td>Joshua Baldazo</td>
                      <td>Systems Analysis, Design and Prototyping</td>
                      <td>
                        <Link to="/tutorMessenger">
                          <button className="tutorAppointmentPageMainCalendarContainerChatButton"><b>Chat Now</b></button>
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>

            <div className="tutorAppointmentPageMonthlyCalendarContainer">
              <h3>August</h3>
              <div className="tutorAppointmentPageMainCalendarContainer">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Day</th>
                      <th>Time</th>
                      <th>Tutee Name</th>
                      <th>Subject</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>1</th>
                      <td>9:00AM</td>
                      <td>John Lendl Cuyugan</td>
                      <td>Object-Oriented Programming</td>
                      <td>
                        <Link to="/tutorMessenger">
                          <button className="tutorAppointmentPageMainCalendarContainerChatButton"><b>Chat Now</b></button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th>2</th>
                      <td>10:00AM</td>
                      <td>Paolo Miguel Sta. Ana</td>
                      <td>System Administration and Maintenance</td>
                      <td>
                        <Link to="/tutorMessenger">
                          <button className="tutorAppointmentPageMainCalendarContainerChatButton"><b>Chat Now</b></button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th>3</th>
                      <td>11:00AM</td>
                      <td>Ma. Graciela Felipe</td>
                      <td>Project Management</td>
                      <td>
                        <Link to="/tutorMessenger">
                          <button className="tutorAppointmentPageMainCalendarContainerChatButton"><b>Chat Now</b></button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th>4</th>
                      <td>1:00PM</td>
                      <td>Rhon Emmanuel Casem</td>
                      <td>Database Systems 1</td>
                      <td>
                        <Link to="/tutorMessenger">
                          <button className="tutorAppointmentPageMainCalendarContainerChatButton"><b>Chat Now</b></button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th>5</th>
                      <td>2:00PM</td>
                      <td>Joshua Baldazo</td>
                      <td>Systems Analysis, Design and Prototyping</td>
                      <td>
                        <Link to="/tutorMessenger">
                          <button className="tutorAppointmentPageMainCalendarContainerChatButton"><b>Chat Now</b></button>
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>

            <div className="tutorAppointmentPageMonthlyCalendarContainer">
              <h3>September</h3>
              <div className="tutorAppointmentPageMainCalendarContainer">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Day</th>
                      <th>Time</th>
                      <th>Tutee Name</th>
                      <th>Subject</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>1</th>
                      <td>9:00AM</td>
                      <td>John Lendl Cuyugan</td>
                      <td>Object-Oriented Programming</td>
                      <td>
                        <Link to="/tutorMessenger">
                          <button className="tutorAppointmentPageMainCalendarContainerChatButton"><b>Chat Now</b></button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th>2</th>
                      <td>10:00AM</td>
                      <td>Paolo Miguel Sta. Ana</td>
                      <td>System Administration and Maintenance</td>
                      <td>
                        <Link to="/tutorMessenger">
                          <button className="tutorAppointmentPageMainCalendarContainerChatButton"><b>Chat Now</b></button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th>3</th>
                      <td>11:00AM</td>
                      <td>Ma. Graciela Felipe</td>
                      <td>Project Management</td>
                      <td>
                        <Link to="/tutorMessenger">
                          <button className="tutorAppointmentPageMainCalendarContainerChatButton"><b>Chat Now</b></button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th>4</th>
                      <td>1:00PM</td>
                      <td>Rhon Emmanuel Casem</td>
                      <td>Database Systems 1</td>
                      <td>
                        <Link to="/tutorMessenger">
                          <button className="tutorAppointmentPageMainCalendarContainerChatButton"><b>Chat Now</b></button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th>5</th>
                      <td>2:00PM</td>
                      <td>Joshua Baldazo</td>
                      <td>Systems Analysis, Design and Prototyping</td>
                      <td>
                        <Link to="/tutorMessenger">
                          <button className="tutorAppointmentPageMainCalendarContainerChatButton"><b>Chat Now</b></button>
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>

          </div>
        </Col>

      </Row>
    </div>
  );
}

export default TutorAppointment;