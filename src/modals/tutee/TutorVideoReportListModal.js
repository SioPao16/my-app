import React from 'react';
import { Modal } from 'react-bootstrap';

import '../../styles/tutee/TuteeWatch.css';

function TuteeWatchPageModalForVideoReportList(videoReportProp) {
  return (
    <Modal {...videoReportProp} size="sm" aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h3 className="tuteeWatchPageHeadersTitle">Reason for Report</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <div className="g-0">
          <div className="g-0 tuteeWatchPageVideoReportList">
            <label className="sched">Video is not original
              <input type="radio" name="radio" />
              <span className="checkmark"></span>
            </label>
            <label className="sched">False Information
              <input type="radio" name="radio" />
              <span className="checkmark"></span>
            </label>
            <label className="sched">Reason 1
              <input type="radio" name="radio" />
              <span className="checkmark"></span>
            </label>
            <label className="sched">Reason 2
              <input type="radio" name="radio" />
              <span className="checkmark"></span>
            </label>
            <label className="sched">Reason 3
              <input type="radio" name="radio" />
              <span className="checkmark"></span>
            </label>
            <label className="sched">Reason 4
              <input type="radio" name="radio" />
              <span className="checkmark"></span>
            </label>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
          <button type="submit" className="tuteeWatchPageVideoReportListButton"><b>Submit Report</b></button>
      </Modal.Footer>
    </Modal>
  );
}

export default TuteeWatchPageModalForVideoReportList;