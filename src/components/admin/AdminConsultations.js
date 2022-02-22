import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Table } from 'react-bootstrap';

import AskITLogo from '../../images/AskITLogo.png';

import '../../styles/CustomLayout.css';
import '../../styles/admin/AdminConsultations.css';

function AdminConsultations() {
  return (
    <div>
      <Row className="g-0 adminConsultationsPageMain">

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
            <Link to="/adminDashboard" style={{ textDecoration: "none" }}>
              <Row className="g-0 userSidePanelNavigationsOption">
                <Col className="col-2 ti-panel userSidePanelNavigationsIcon"></Col>
                <Col className="col-10 userSidePanelNavigationsName">DASHBOARD</Col>
              </Row>
            </Link>
            <Row className="g-0 userSidePanelNavigationsOptionSelected">
              <Col className="col-2 ti-comments userSidePanelNavigationsIcon"></Col>
              <Col className="col-10 userSidePanelNavigationsName">CONSULTATIONS</Col>
            </Row>
            <Link to="/adminUsers" style={{ textDecoration: "none" }}>
              <Row className="g-0 userSidePanelNavigationsOption">
                <Col className="col-2 ti-user userSidePanelNavigationsIcon"></Col>
                <Col className="col-10 userSidePanelNavigationsName">USERS</Col>
              </Row>
            </Link>
          </Row>
        </Col>

        {/* Comment: This is the Body Panel */}
        <Col md={10} lg={10} xl={10} className="userMainPanel">
          <nav className="userMainPanelNavBar">
            <Row className="g-0">
              <Col className="col userMainPanelNavBarTitle">
                CONSULTATIONS
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

          <div className="adminConsultationsPageTableContainer">
            <div className="adminConsultationsPageMainTableContainer">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Tutee Email</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Subject</th>
                    <th>Tutor Email</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>casemres@students.national-u.edu.ph</td>
                    <td>02-15-2021</td>
                    <td>08:30 AM</td>
                    <td>Introduction to Java Programming</td>
                    <td>cuyuganjt@students.national-u.edu.ph</td>
                  </tr>
                  <tr>
                    <td>staanapq@students.national-u.edu.ph</td>
                    <td>02-13-2021</td>
                    <td>10:00 AM</td>
                    <td>Data Structures and Algorithms</td>
                    <td>felipemc@students.national-u.edu.ph</td>
                  </tr>
                  <tr>
                    <td>paduajr@students.national-u.edu.ph</td>
                    <td>02-09-2021</td>
                    <td>01:30 PM</td>
                    <td>Advanced Java Programming</td>
                    <td>baldazoeo@students.national-u.edu.ph</td>
                  </tr>
                  <tr>
                    <td>delrosarioab@students.national-u.edu.ph</td>
                    <td>02-01-2021</td>
                    <td>03:30 PM</td>
                    <td>Object-Oriented Programming</td>
                    <td>caduldulanc@students.national-u.edu.ph</td>
                  </tr>
                  <tr>
                    <td>casemres@students.national-u.edu.ph</td>
                    <td>01-29-2021</td>
                    <td>08:30 AM</td>
                    <td>Introduction to Java Programming</td>
                    <td>cuyuganjt@students.national-u.edu.ph</td>
                  </tr>
                </tbody>
              </Table>
            </div>

          </div>
        </Col>

      </Row>
    </div>
  );
}

export default AdminConsultations;