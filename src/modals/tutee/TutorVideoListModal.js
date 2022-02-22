import React, { useState } from 'react';
import { Row, Col, Modal } from 'react-bootstrap';

import TutorVideoPlayerModal from './TutorVideoPlayerModal';

import '../../styles/tutee/TuteeWatch.css';

function TuteeWatchPageModalForVideoList(videoListProp) {
  const [tuteeVideoPlayerModalShow, tuteeVideoPlayerSetModalShow] = useState(false);


  return (
    <Modal {...videoListProp} size="lg" aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton />
      <Modal.Body className="show-grid">
        <div className="g-0 tuteeWatchPageVideoScreen">
          <div className="tuteeWatchPageVideoList">

            <div type="submit" className="tuteeWatchPageVideoCard" onClick={() => tuteeVideoPlayerSetModalShow(true)}>
              <Row className="g-0 tuteeWatchPageVideoCardContainer">
                <Row className="g-0 tuteeWatchPageVideoDetails">
                  <Col md={3} lg={3} xl={3} className="tuteeWatchPageVideoThumbnailContainer">Thumbnail</Col>
                  <Col md={9} lg={9} xl={9}>
                    <div className="tuteeWatchPageVideoSummaryContainer">
                      <p className="tuteeWatchPageVideoSummaryDetails">Title: Variables and Data Types</p>
                      <p className="tuteeWatchPageVideoSummaryDetails">Date: 6/18/2021</p>
                      <p className="tuteeWatchPageVideoSummaryDetails" id="playVideoNow">Play Now</p>
                    </div>
                  </Col>
                </Row>
              </Row>
            </div>

            <div type="submit" className="tuteeWatchPageVideoCard" onClick={() => tuteeVideoPlayerSetModalShow(true)}>
              <Row className="g-0 tuteeWatchPageVideoCardContainer">
                <Row className="g-0 tuteeWatchPageVideoDetails">
                  <Col md={3} lg={3} xl={3} className="tuteeWatchPageVideoThumbnailContainer">Thumbnail</Col>
                  <Col md={9} lg={9} xl={9}>
                    <div className="tuteeWatchPageVideoSummaryContainer">
                      <p className="tuteeWatchPageVideoSummaryDetails">Title: Looping</p>
                      <p className="tuteeWatchPageVideoSummaryDetails">Date: 6/9/2021</p>
                      <p className="tuteeWatchPageVideoSummaryDetails" id="playVideoNow">Play Now</p>
                    </div>
                  </Col>
                </Row>
              </Row>
            </div>

            <div type="submit" className="tuteeWatchPageVideoCard" onClick={() => tuteeVideoPlayerSetModalShow(true)}>
              <Row className="g-0 tuteeWatchPageVideoCardContainer">
                <Row className="g-0 tuteeWatchPageVideoDetails">
                  <Col md={3} lg={3} xl={3} className="tuteeWatchPageVideoThumbnailContainer">Thumbnail</Col>
                  <Col md={9} lg={9} xl={9}>
                    <div className="tuteeWatchPageVideoSummaryContainer">
                      <p className="tuteeWatchPageVideoSummaryDetails">Title: Arrays</p>
                      <p className="tuteeWatchPageVideoSummaryDetails">Date: 5/25/2021</p>
                      <p className="tuteeWatchPageVideoSummaryDetails" id="playVideoNow">Play Now</p>
                    </div>
                  </Col>
                </Row>
              </Row>
            </div>

            <div type="submit" className="tuteeWatchPageVideoCard" onClick={() => tuteeVideoPlayerSetModalShow(true)}>
              <Row className="g-0 tuteeWatchPageVideoCardContainer">
                <Row className="g-0 tuteeWatchPageVideoDetails">
                  <Col md={3} lg={3} xl={3} className="tuteeWatchPageVideoThumbnailContainer">Thumbnail</Col>
                  <Col md={9} lg={9} xl={9}>
                    <div className="tuteeWatchPageVideoSummaryContainer">
                      <p className="tuteeWatchPageVideoSummaryDetails">Title: Methods</p>
                      <p className="tuteeWatchPageVideoSummaryDetails">Date: 5/13/2021</p>
                      <p className="tuteeWatchPageVideoSummaryDetails" id="playVideoNow">Play Now</p>
                    </div>
                  </Col>
                </Row>
              </Row>
            </div>

            <div type="submit" className="tuteeWatchPageVideoCard" onClick={() => tuteeVideoPlayerSetModalShow(true)}>
              <Row className="g-0 tuteeWatchPageVideoCardContainer">
                <Row className="g-0 tuteeWatchPageVideoDetails">
                  <Col md={3} lg={3} xl={3} className="tuteeWatchPageVideoThumbnailContainer">Thumbnail</Col>
                  <Col md={9} lg={9} xl={9}>
                    <div className="tuteeWatchPageVideoSummaryContainer">
                      <p className="tuteeWatchPageVideoSummaryDetails">Title: Objects and Classes</p>
                      <p className="tuteeWatchPageVideoSummaryDetails">Date: 4/29/2021</p>
                      <p className="tuteeWatchPageVideoSummaryDetails" id="playVideoNow">Play Now</p>
                    </div>
                  </Col>
                </Row>
              </Row>
            </div>

            <div type="submit" className="tuteeWatchPageVideoCard" onClick={() => tuteeVideoPlayerSetModalShow(true)}>
              <Row className="g-0 tuteeWatchPageVideoCardContainer">
                <Row className="g-0 tuteeWatchPageVideoDetails">
                  <Col md={3} lg={3} xl={3} className="tuteeWatchPageVideoThumbnailContainer">Thumbnail</Col>
                  <Col md={9} lg={9} xl={9}>
                    <div className="tuteeWatchPageVideoSummaryContainer">
                      <p className="tuteeWatchPageVideoSummaryDetails">Title: Iteration</p>
                      <p className="tuteeWatchPageVideoSummaryDetails">Date: 3/10/2021</p>
                      <p className="tuteeWatchPageVideoSummaryDetails" id="playVideoNow">Play Now</p>
                    </div>
                  </Col>
                </Row>
              </Row>
            </div>

            <TutorVideoPlayerModal show={tuteeVideoPlayerModalShow} onHide={() => tuteeVideoPlayerSetModalShow(false)} />
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default TuteeWatchPageModalForVideoList;

<TutorVideoPlayerModal />