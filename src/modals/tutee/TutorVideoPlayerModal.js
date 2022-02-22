import React, { useState } from 'react';
import { Row, Col, Modal } from 'react-bootstrap';
import ReactPlayer from 'react-player';

import TutorVideoReportListModal from './TutorVideoReportListModal';

import '../../styles/tutee/TuteeWatch.css';

function TuteeWatchPageModalForVideoPlayer(videoPlayerProp) {
  const [tuteeVideoReportModalShow, tuteeVideoReportSetModalShow] = useState(false);

  return (
    <Modal {...videoPlayerProp} size="xl" aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton />
      <Modal.Body className="show-grid">
        <div className="g-0">
          <div className="g-0 tuteeWatchPageVideoPlayer">
            <div className="g-0 tuteeWatchPageVideoPlayerContainer">
              <ReactPlayer
                controls
                className="videoPlayerMain"
                url='https://www.youtube.com/watch?v=RRubcjpTkks'
                width='100%'
                height='100%' />
              {/*Video Player*/}
            </div>
            <Row className="g-0">
              <Col md={11} lg={11} xl={11} className="g-0 tuteeWatchPageVideoTitleBarContainer">
                <div className="g-0 tuteeWatchPageVideoTitleContainer">Title</div>
                <div className="g-0 tuteeWatchPageVideoDateContainer">Date</div>
              </Col>
              <Col md={1} lg={1} xl={1} className="g-0 tuteeWatchPageVideoReport">
                <button type="submit" className="tuteeWatchPageVideoReportButton" onClick={() => tuteeVideoReportSetModalShow(true)}>Report Video</button>

                <TutorVideoReportListModal show={tuteeVideoReportModalShow} onHide={() => tuteeVideoReportSetModalShow(false)} />
              </Col>
            </Row>
            <hr className="hRuleVideo" />
            <div className="g-0 tuteeWatchPageVideoDescriptionAuthorContainer">
              <div className="g-0 tuteeWatchPageVideoDescriptionContainer">Description</div>
              <div className="g-0 tuteeWatchPageVideoDescriptionBox">Description of the video</div>
              <div className="g-0 tuteeWatchPageVideoAuthorContainer">About the Author</div>
              <div className="g-0 tuteeWatchPageVideoAuthorBox">About the author of the video</div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default TuteeWatchPageModalForVideoPlayer;

<TutorVideoReportListModal />