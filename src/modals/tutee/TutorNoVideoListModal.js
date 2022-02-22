import React from 'react';
import { Modal } from 'react-bootstrap';

function TuteeWatchPageModalForNoVideoList(tutorNoVideoListProp) {
  return (
    <Modal {...tutorNoVideoListProp} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton />
      <Modal.Body style={{backgroundColor: '#B0BEC5'}}><h1> Sorry, unfortunately there are no available videos right now :( </h1></Modal.Body>
    </Modal>
  );
}

export default TuteeWatchPageModalForNoVideoList;