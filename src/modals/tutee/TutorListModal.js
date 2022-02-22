import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

import TutorScheduleListModal from '../../modals/tutee/TutorScheduleListModal';
import TutorNoScheduleListModal from './TutorNoScheduleListModal';

import '../../styles/tutee/TuteeConsult.css';

function TuteeConsultPageModalForTutorList(tutorListProp) {
  const [tuteeTutorScheduleListModalShow, tuteeTutorScheduleListSetModalShow] = useState(false);

  return (
    <Modal {...tutorListProp} size="lg" aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h3 className="tuteeConsultPageHeadersTitle">Choose a Tutor</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <div className="g-0">
          <div className="g-0 tuteeConsultPageTutorList">
            <button type="submit" className="tuteeConsultPageTutorListButton" onClick={() => tuteeTutorScheduleListSetModalShow(true)}>John Lendl T. Cuyugan</button>
            <button type="submit" className="tuteeConsultPageTutorListButton" onClick={() => tuteeTutorScheduleListSetModalShow(true)}>Ma. Graciela C. Felipe</button>
            <button type="submit" className="tuteeConsultPageTutorListButton" onClick={() => tuteeTutorScheduleListSetModalShow(true)}>Rhon Emmanuel S. Casem</button>
            <button type="submit" className="tuteeConsultPageTutorListButton" onClick={() => tuteeTutorScheduleListSetModalShow(true)}>Paolo Miguel Q. Sta. Ana</button>
            <button type="submit" className="tuteeConsultPageTutorListButton" onClick={() => tuteeTutorScheduleListSetModalShow(true)}>Joshua Elias O. Baldazo</button>
            <button type="submit" className="tuteeConsultPageTutorListButton" onClick={() => tuteeTutorScheduleListSetModalShow(true)}>Angelo B. Del Rosario</button>

            <TutorScheduleListModal show={tuteeTutorScheduleListModalShow} onHide={() => tuteeTutorScheduleListSetModalShow(false)} />
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default TuteeConsultPageModalForTutorList;

<TutorScheduleListModal />;

<TutorNoScheduleListModal/>