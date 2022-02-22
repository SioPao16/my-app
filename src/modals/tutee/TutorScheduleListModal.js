import React from 'react';
import { Modal } from 'react-bootstrap';

import '../../styles/tutee/TuteeConsult.css';

function TuteeConsultPageModalForTutorScheduleList(tutorScheduleListProp) {
  return (
    <Modal {...tutorScheduleListProp} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h3 className="tuteeConsultPageHeadersTitle">Pick a Schedule</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <div className="g-0">
          <div className="g-0 tuteeConsultPageTutorScheduleList">
            <label className="sched">May 8 (8am - 10am)
              <input type="radio" name="radio" />
              <span className="checkmark"></span>
            </label>
            <label className="sched">May 8 (2pm - 5pm)
              <input type="radio" name="radio" />
              <span className="checkmark"></span>
            </label>
            <label className="sched">May 15 (9am - 11am)
              <input type="radio" name="radio" />
              <span className="checkmark"></span>
            </label>
            <label className="sched">May 15 (2pm - 4pm)
              <input type="radio" name="radio" />
              <span className="checkmark"></span>
            </label>
            <label className="sched">May 28 (8am - 10am)
              <input type="radio" name="radio" />
              <span className="checkmark"></span>
            </label>
            <label className="sched">May 28 (2pm - 5pm)
              <input type="radio" name="radio" />
              <span className="checkmark"></span>
            </label>
            <label className="sched">June 10 (9am - 11am)
              <input type="radio" name="radio" />
              <span className="checkmark"></span>
            </label>
            <label className="sched">June 10 (2pm - 4pm)
              <input type="radio" name="radio" />
              <span className="checkmark"></span>
            </label>
            <label className="sched">July 8 (8am - 10am)
              <input type="radio" name="radio" />
              <span className="checkmark"></span>
            </label>
            <label className="sched">July 8 (2pm - 5pm)
              <input type="radio" name="radio" />
              <span className="checkmark"></span>
            </label>
            <label className="sched">July 15 (9am - 11am)
              <input type="radio" name="radio" />
              <span className="checkmark"></span>
            </label>
            <label className="sched">July 15 (2pm - 4pm)
              <input type="radio" name="radio" />
              <span className="checkmark"></span>
            </label>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
          <button type="submit" className="tuteeConsultPageTutorScheduleListButton" > <b>Done</b> </button>
      </Modal.Footer>
    </Modal>
  );
}

export default TuteeConsultPageModalForTutorScheduleList;