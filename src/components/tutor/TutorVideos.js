import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

import VideoListModal from '../../modals/tutor/VideoListModal';

import '../../styles/CustomLayout.css';
import '../../styles/tutor/TutorVideos.css';

function TutorVideos() {
  const [tutorVideoListModalShow, tutorVideoListSetModalShow] = useState(false);

  return (
    <div className="g-0">
      <div className="g-0">
        <button className="tutorProfilePageButtons" onClick={() => tutorVideoListSetModalShow(true)}>
          <Row className="g-0">
            <Col md={3} lg={3} xl={3} className="ti-video-camera tutorProfileButtonIcon"></Col>
            <Col md={9} lg={9} xl={9} className="tutorProfileButtonName"><h2>My Videos</h2></Col>
          </Row>
        </button>

        <VideoListModal show={tutorVideoListModalShow} onHide={() => tutorVideoListSetModalShow(false)} />
      </div>
    </div >
  );
}

export default TutorVideos;

<VideoListModal />