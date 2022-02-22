import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap';

import AdminBarChart from '../admin/AdminBarChart';
import AskITLogo from '../../images/AskITLogo.png';

import '../../styles/CustomLayout.css';
import '../../styles/admin/AdminDashboard.css';

function AdminDashboard() {
  return (
    <div>
      <Row className="g-0 adminDashboardPageMain">

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
              <Col className="col-2 ti-panel userSidePanelNavigationsIcon"></Col>
              <Col className="col-10 userSidePanelNavigationsName">DASHBOARD</Col>
            </Row>
            <Link to="/adminConsultations" style={{ textDecoration: "none" }}>
              <Row className="g-0 userSidePanelNavigationsOption">
                <Col className="col-2 ti-comments userSidePanelNavigationsIcon"></Col>
                <Col className="col-10 userSidePanelNavigationsName">CONSULTATIONS</Col>
              </Row>
            </Link>
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
                DASHBOARD
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

          <div className="g-0 adminDashboardPageMainContainer">

            {/* Comment: Cards */}
            <Row className="g-0 adminDashboardPageCardContainer">

              <Col xs={12} sm={12} md={6} lg={4} xl={4} className="adminDashboardPageCard">
                <Card className="adminDashboardPageMainCard">
                  <Card.Body>
                    <Row>
                      <Col xs={3} sm={3} md={3} lg={3} xl={3} className="ti-user adminDashboardPageMainCardIconContainer" style={{ color: '#FBC02D' }} />
                      <Col xs={9} sm={9} md={9} lg={9} xl={9} className="adminDashboardPageMainCardTextContainer">
                        <Row className="g-0 adminDashboardPageMainCardTextTitle">
                          Active Users
                        </Row>
                        <Row className="g-0 adminDashboardPageMainCardTextData">
                          30
                        </Row>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>

              <Col xs={12} sm={12} md={6} lg={4} xl={4} className="adminDashboardPageCard">
                <Card className="adminDashboardPageMainCard">
                  <Card.Body>
                    <Row>
                      <Col xs={3} sm={3} md={3} lg={3} xl={3} className="ti-book adminDashboardPageMainCardIconContainer" style={{ color: '#388E3C' }} />
                      <Col xs={9} sm={9} md={9} lg={9} xl={9} className="adminDashboardPageMainCardTextContainer">
                        <Row className="g-0 adminDashboardPageMainCardTextTitle">
                          Active Tutees
                        </Row>
                        <Row className="g-0 adminDashboardPageMainCardTextData">
                          20
                        </Row>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>

              <Col xs={12} sm={12} md={6} lg={4} xl={4} className="adminDashboardPageCard">
                <Card className="adminDashboardPageMainCard">
                  <Card.Body>
                    <Row>
                      <Col xs={3} sm={3} md={3} lg={3} xl={3} className="ti-blackboard adminDashboardPageMainCardIconContainer" style={{ color: '#D32F2F' }} />
                      <Col xs={9} sm={9} md={9} lg={9} xl={9} className="adminDashboardPageMainCardTextContainer">
                        <Row className="g-0 adminDashboardPageMainCardTextTitle">
                          Active Tutors
                        </Row>
                        <Row className="g-0 adminDashboardPageMainCardTextData">
                          10
                        </Row>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>

              <Col xs={12} sm={12} md={6} lg={4} xl={4} className="adminDashboardPageCard">
                <Card className="adminDashboardPageMainCard">
                  <Card.Body>
                    <Row>
                      <Col xs={3} sm={3} md={3} lg={3} xl={3} className="ti-user adminDashboardPageMainCardIconContainer" style={{ color: '#FBC02D' }} />
                      <Col xs={9} sm={9} md={9} lg={9} xl={9} className="adminDashboardPageMainCardTextContainer">
                        <Row className="g-0 adminDashboardPageMainCardTextTitle">
                          Registered Users
                        </Row>
                        <Row className="g-0 adminDashboardPageMainCardTextData">
                          200
                        </Row>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>

              <Col xs={12} sm={12} md={6} lg={4} xl={4} className="adminDashboardPageCard">
                <Card className="adminDashboardPageMainCard">
                  <Card.Body>
                    <Row>
                      <Col xs={3} sm={3} md={3} lg={3} xl={3} className="ti-book adminDashboardPageMainCardIconContainer" style={{ color: '#388E3C' }} />
                      <Col xs={9} sm={9} md={9} lg={9} xl={9} className="adminDashboardPageMainCardTextContainer">
                        <Row className="g-0 adminDashboardPageMainCardTextTitle">
                          Registered Tutees
                        </Row>
                        <Row className="g-0 adminDashboardPageMainCardTextData">
                          150
                        </Row>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>

              <Col xs={12} sm={12} md={6} lg={4} xl={4} className="adminDashboardPageCard">
                <Card className="adminDashboardPageMainCard">
                  <Card.Body>
                    <Row>
                      <Col xs={3} sm={3} md={3} lg={3} xl={3} className="ti-blackboard adminDashboardPageMainCardIconContainer" style={{ color: '#D32F2F' }} />
                      <Col xs={9} sm={9} md={9} lg={9} xl={9} className="adminDashboardPageMainCardTextContainer">
                        <Row className="g-0 adminDashboardPageMainCardTextTitle">
                          Registered Tutors
                        </Row>
                        <Row className="g-0 adminDashboardPageMainCardTextData">
                          50
                        </Row>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>

              <Col xs={12} sm={12} md={6} lg={4} xl={4} className="adminDashboardPageCard">
                <Card className="adminDashboardPageMainCard">
                  <Card.Body>
                    <Row>
                      <Col xs={3} sm={3} md={3} lg={3} xl={3} className="ti-comments adminDashboardPageMainCardIconContainer" style={{ color: '#1976D2' }} />
                      <Col xs={9} sm={9} md={9} lg={9} xl={9} className="adminDashboardPageMainCardTextContainer">
                        <Row className="g-0 adminDashboardPageMainCardTextTitle">
                          Total Number of Consultations
                        </Row>
                        <Row className="g-0 adminDashboardPageMainCardTextData">
                          40
                        </Row>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>

            </Row>

            <div className="g-0 adminDashboardPageGraphContainer">
              <h4 className="adminDashboardPageGraphContainerTitle">User Traffic</h4>
              <div className="g-0 adminDashboardPageGraph">
                <AdminBarChart />
              </div>
            </div>
          </div>
        </Col>

      </Row>
    </div>
  );
}

export default AdminDashboard;