import React, { useState } from 'react';
import { Row, Col, Modal } from 'react-bootstrap';

import AddVideoModal from './AddVideoModal';
import EditVideoModal from './EditVideoModal';
import DeleteVideoModal from './DeleteVideoModal';

import '../../styles/tutor/TutorVideos.css';

function TutorVideoPageModalForVideoList(VideoListProp) {
  const [tutorAddVideoModalShow, tutorAddVideoSetModalShow] = useState(false);
  const [tutorEditVideoModalShow, tutorEditVideoSetModalShow] = useState(false);
  const [tutorDeleteVideoModalShow, tutorDeleteVideoSetModalShow] = useState(false);

  return (
    <Modal {...VideoListProp} size="lg" aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h3 className="tutorSubSchedulePageHeadersTitle">My Videos</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <div className="g-0">
          <div className="tutorVideoPageVideoCardMain">

            {/* Comment: Start of Video Cards */}
            <div className="tutorVideoPageVideoCard">

              <div className="tutorVideoPageVideoCardContainer">
                <Row className="g-0">
                  <Col xs={8} sm={8} md={8} lg={10} xl={10} className="col-10" />
                  <Col xs={2} sm={2} md={2} lg={1} xl={1} className="col-1 tutorVideoPageVideoDelEdit">
                    <p className="tutorVideoPageVideoDelEditText" style={{ color: '#f44336' }} onClick={() => tutorDeleteVideoSetModalShow(true)}>Delete</p>

                    <DeleteVideoModal show={tutorDeleteVideoModalShow} onHide={() => tutorDeleteVideoSetModalShow(false)} />
                  </Col >
                  <Col xs={2} sm={2} md={2} lg={1} xl={1} className="col-1 tutorVideoPageVideoDelEdit">
                    <p className="tutorVideoPageVideoDelEditText" style={{ color: '#2196f3' }} onClick={() => tutorEditVideoSetModalShow(true)}>Edit</p>

                    <EditVideoModal show={tutorEditVideoModalShow} onHide={() => tutorEditVideoSetModalShow(false)} />
                  </Col>
                </Row>
                <Row className="g-0 tutorVideoPageVideoDetailsContainer">
                  <Col xs={3} sm={3} md={3} lg={3} xl={3} className="col-3 tutorVideoPageVideoThumbnailContainer">Thumbnail</Col>
                  <Col xs={9} sm={9} md={9} lg={9} xl={9} className="col-9 tutorVideoPageVideoSummaryContainer">
                    <p className="tutorVideoPageVideoDetailsContainerText">Title: Variables and Data Types</p>
                    <p className="tutorVideoPageVideoDetailsContainerText">Date: 6/18/2021</p>
                  </Col>
                </Row>
              </div>

            </div>

          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button type="submit" className="tutorSchedulePageFooterButton" onClick={() => tutorAddVideoSetModalShow(true)}><b>Add a Video</b></button>

        <AddVideoModal show={tutorAddVideoModalShow} onHide={() => tutorAddVideoSetModalShow(false)} />
      </Modal.Footer>
    </Modal>
  );
}

export default TutorVideoPageModalForVideoList;

<AddVideoModal />;

<EditVideoModal />;

<DeleteVideoModal />