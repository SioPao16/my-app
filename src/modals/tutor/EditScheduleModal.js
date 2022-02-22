import React, { useState } from 'react';
import { Row, Modal } from 'react-bootstrap';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";
import '../../styles/tutor/TutorSchedule.css';

function TutorSchedulePageModalForEditSchedule(EditScheduleProp) {
  const [formErrors, setFormErrors] = useState({})
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedStartTime, setSelectedStartTime] = useState(null)
  const [selectedEndTime, setSelectedEndTime] = useState(null)

  const setDate = (dateData) => {
    console.log(dateData);
    validate(dateData);
    setSelectedDate(dateData);
  };

  const setStartTime = (startTimeData) => {
    console.log(startTimeData);
    validate(startTimeData);
    setSelectedStartTime(startTimeData);
  };

  const setEndTime = (endTimeData) => {
    console.log(endTimeData);
    validate(endTimeData);
    setSelectedEndTime(endTimeData);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    validate(formErrors)
  }

  const validate = (e) => {
    var errors = {}
    if(!selectedDate){
      errors.dateMessage = <em>Date is required!</em>
    }
    if(!selectedStartTime){
      errors.startTimeMessage = <em>Time is required!</em>
    }
    if(!selectedEndTime){
      errors.endTimeMessage = <em>Time is required!</em>
    }

    setFormErrors(errors)
  }

  return (
    <Modal {...EditScheduleProp} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h3 className="tutorSchedulePageHeadersTitle">Edit Schedule</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <div className="g-0">
          <form onSubmit={handleSubmit}>
            {/* Comment: Subject Dropdown */}
            <h5 className="tutorSchedulePageEditScheduleTitle">What do you want to teach:</h5>
            <select className="tutorSchedulePageEditScheduleSubjectDropdown">
              <option>Java Fundamentals</option>
              <option>Advanced Java</option>
              <option>Object-Oriented Programming</option>
              <option>Data Structures and Algorithms</option>
              <option>Basic Networking</option>
              <option>Advanced Networking</option>
              <option>System Administration and Maintenance</option>
              <option>Operating Systems</option>
              <option>Database Systems 1</option>
              <option>Database Systems 2</option>
              <option>Project Management</option>
              <option>Systems Analysis, Design and Prototyping</option>
            </select>

            {/* Comment: Schedule Creation */}
            <h4 className="tutorSchedulePageEditScheduleDateTimeTitle">Select your preffered date and time of tutorial</h4>

            {/* Comment: Date Picker */}
            <h5 className="tutorSchedulePageEditScheduleTitle">Date</h5>
            <DatePicker
              placeholderText="Click to select a date"
              selected={selectedDate}
              onChange={(date) => setDate(date)}
              dateFormat='dd/MM/yyyy'
              minDate={new Date()} /* minimum date is today */
              filterDate={notAvailableDate => notAvailableDate.getDay() !== 0} /* filter date, no sundays, 0 = sunday */
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"/>
            <p style={{ color: 'red', padding: '0', margin: '0' }}> {formErrors.dateMessage} </p>
            <br />

            {/* Comment: Time Picker */}
            <h5 className="tutorSchedulePageEditScheduleTitle">Time</h5>

            {/* Comment: Start Time */}
            <div className="tutorSchedulePageEditScheduleStartTime">
              <h6 className="tutorSchedulePageEditScheduleTimeTitle" >Start:</h6>
              <DatePicker
                placeholderText="Click to select a time"
                selected={selectedStartTime}
                onChange={(startTime) => setStartTime(startTime)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={30}
                timeCaption="Time"
                dateFormat="h:mm aa"/>
              <p style={{ color: 'red', padding: '0', margin: '0' }}> {formErrors.startTimeMessage} </p>
            </div>

            {/* Comment: End Time */}
            <div className="tutorSchedulePageEditScheduleEndTime">
              <h6 className="tutorSchedulePageEditScheduleTimeTitle" >End:</h6>
              <DatePicker
                placeholderText="Click to select a time"
                selected={selectedEndTime}
                onChange={(endTime) => setEndTime(endTime)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={30}
                timeCaption="Time"
                dateFormat="h:mm aa"/>
              <p style={{ color: 'red', padding: '0', margin: '0' }}> {formErrors.endTimeMessage} </p>
            </div>
            <br />
            <Row className="g-0" style={{ justifyContent: 'center' }}>
            <button type="submit" className="tutorEditSchedulePageFooterButton" ><b>Save Schedule</b></button>
            </Row>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default TutorSchedulePageModalForEditSchedule;