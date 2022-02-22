import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

import AskITLogo from '../../images/AskITLogo.png';

import '../../styles/CustomLayout.css';
import '../../styles/tutee/TuteeMessenger.css';

function TuteeMessenger() {
  return (
    <div>
      <Row className="g-0 tuteeMessengerPageMain">

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
            <Row className="g-0 userSidePanelNavigationsOptionSelected">
              <Col className="col-2 ti-comments userSidePanelNavigationsIcon"></Col>
              <Col className="col-10 userSidePanelNavigationsName">MESSAGES</Col>
            </Row>
            <Link to="/tuteeConsult" style={{ textDecoration: "none" }}>
              <Row className="g-0 userSidePanelNavigationsOption">
                <Col className="col-2 ti-blackboard userSidePanelNavigationsIcon"></Col>
                <Col className="col-10 userSidePanelNavigationsName">CONSULT WITH A TUTOR</Col>
              </Row>
            </Link>
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
                MESSAGES
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

          <div className="tuteeMessengerPageMessenger">
            <div className="container">
              <div className="messaging">
                <div className="inbox_msg">

                  <div className="inbox_people">
                    <div className="headind_srch">
                      <div className="recent_heading">
                        <h4>Recent</h4>
                      </div>
                      <div className="srch_bar">
                        <div className="stylish-input-group">
                          <input type="text" className="search-bar" placeholder="Search" />
                          <button type="button">
                            <i className="ti-search" aria-hidden="true"></i>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="inbox_chat">
                      <div className="chat_list active_chat">
                        <div className="chat_people">
                          <div className="chat_ib">
                            <h5>
                              John Lendl Cuyugan <span className="chat_date">Jul 25</span>
                            </h5>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                              do eiusmod tempor incididunt ut labore.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="chat_list">
                        <div className="chat_people">
                          <div className="chat_ib">
                            <h5>
                              Paolo Miguel Sta. Ana <span className="chat_date">Jul 25</span>
                            </h5>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                              do eiusmod tempor incididunt ut labore.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="chat_list">
                        <div className="chat_people">
                          <div className="chat_ib">
                            <h5>
                              Ma. Graciela Felipe <span className="chat_date">Jul 23</span>
                            </h5>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                              do eiusmod tempor incididunt ut labore.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="chat_list">
                        <div className="chat_people">
                          <div className="chat_ib">
                            <h5>
                              Rhon Emmanuel Casem <span className="chat_date">Jul 22</span>
                            </h5>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                              do eiusmod tempor incididunt ut labore.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="chat_list">
                        <div className="chat_people">
                          <div className="chat_ib">
                            <h5>
                              Joshua Elias Baldazo <span className="chat_date">Jul 19</span>
                            </h5>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                              do eiusmod tempor incididunt ut labore.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="chat_list">
                        <div className="chat_people">
                          <div className="chat_ib">
                            <h5>Jao Renzo Padua <span className="chat_date">Jul 18</span></h5>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                              do eiusmod tempor incididunt ut labore.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="chat_list">
                        <div className="chat_people">
                          <div className="chat_ib">
                            <h5>
                              Christian Caduldulan <span className="chat_date">Jul 15</span>
                            </h5>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                              do eiusmod tempor incididunt ut labore.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mesgs">
                    <div className="msg_history">
                      <div className="incoming_msg">
                        <div className="received_msg">
                          <div className="received_withd_msg">
                            <p>Test which is a new approach to have all solutions</p>
                            <span className="time_date"> 11:01 AM | July 23</span>
                          </div>
                        </div>
                      </div>
                      <div className="outgoing_msg">
                        <div className="sent_msg">
                          <p>Test which is a new approach to have all solutions</p>
                          <span className="time_date"> 11:01 AM | July 23</span>
                        </div>
                      </div>
                      <div className="incoming_msg">
                        <div className="received_msg">
                          <div className="received_withd_msg">
                            <p>Test, which is a new approach to have</p>
                            <span className="time_date"> 11:01 AM | Yesterday</span>
                          </div>
                        </div>
                      </div>
                      <div className="outgoing_msg">
                        <div className="sent_msg">
                          <p>Apollo University, Delhi, India Test</p>
                          <span className="time_date"> 11:01 AM | Today</span>
                        </div>
                      </div>
                      <div className="incoming_msg">
                        <div className="received_msg">
                          <div className="received_withd_msg">
                            <p>
                              We work directly with our designers and suppliers, and sell
                              direct to you, which means quality, exclusive products, at a
                              price anyone can afford.
                            </p>
                            <span className="time_date"> 11:01 AM | Today</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="type_msg">
                      <div className="input_msg_write">
                        <input type="text" className="write_msg" placeholder="Type a message" />
                        <button className="msg_send_btn" type="button">
                          <i className="ti-arrow-right" aria-hidden="true"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>

      </Row>
    </div>
  );
}

export default TuteeMessenger;