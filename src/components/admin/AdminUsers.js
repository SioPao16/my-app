import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Table } from 'react-bootstrap';

import AskITLogo from '../../images/AskITLogo.png';

import '../../styles/CustomLayout.css';
import '../../styles/admin/AdminUsers.css';

function AdminUsers() {
  return (
    <div>
      <Row className="g-0 adminUsersPageMain">

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
            <Link to="/adminConsultations" style={{ textDecoration: "none" }}>
              <Row className="g-0 userSidePanelNavigationsOption">
                <Col className="col-2 ti-comments userSidePanelNavigationsIcon"></Col>
                <Col className="col-10 userSidePanelNavigationsName">CONSULTATIONS</Col>
              </Row>
            </Link>
            <Row className="g-0 userSidePanelNavigationsOptionSelected">
              <Col className="col-2 ti-user userSidePanelNavigationsIcon"></Col>
              <Col className="col-10 userSidePanelNavigationsName">USERS</Col>
            </Row>
          </Row>
        </Col>

        {/* Comment: This is the Body Panel */}
        <Col md={10} lg={10} xl={10} className="userMainPanel">
          <nav className="userMainPanelNavBar">
            <Row className="g-0">
              <Col className="col userMainPanelNavBarTitle">
                USERS
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

          <div className="adminUsersPageTableContainer">
            <div className="adminUsersPageMainTableContainer">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Role</th>
                    <th>Last Name</th>
                    <th>First Name</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Tutor</td>
                    <td>Cuyugan</td>
                    <td>John Lendl</td>
                    <td>cuyuganjt@students.national-u.edu.ph</td>
                  </tr>
                  <tr>
                    <td>Tutor</td>
                    <td>Felipe</td>
                    <td>Ma. Graciela</td>
                    <td>felipemc@students.national-u.edu.ph</td>
                  </tr>
                  <tr>
                    <td>Tutee</td>
                    <td>Sta. Ana</td>
                    <td>Paolo Miguel</td>
                    <td>staanapq@students.national-u.edu.ph</td>
                  </tr>
                  <tr>
                    <td>Tutee</td>
                    <td>Casem</td>
                    <td>Rhon Emmanuel</td>
                    <td>casemres@students.national-u.edu.ph</td>
                  </tr>
                  <tr>
                    <td>Tutee</td>
                    <td>Baldazo</td>
                    <td>Joshua Elias</td>
                    <td>baldazojo@students.national-u.edu.ph</td>
                  </tr>
                </tbody>
              </Table>
            </div>

          </div>
        </Col >

      </Row >
    </div >
  );
}

export default AdminUsers;