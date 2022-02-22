import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; //Routes v6.2.1, Switch v5.2.0

import App from './App';

import ForgotPassword from './components/registration/ForgotPassword';
import SignUp from './components/registration/SignUp';

import TuteeAppointment from './components/tutee/TuteeAppointment';
import TuteeMessenger from './components/tutee/TuteeMessenger';
import TuteeConsult from './components/tutee/TuteeConsult';
import TuteeWatch from './components/tutee/TuteeWatch';
import TuteePassword from './components/tutee/TuteePassword';

import TutorAppointment from './components/tutor/TutorAppointment';
import TutorMessenger from './components/tutor/TutorMessenger';
import TutorProfile from './components/tutor/TutorProfile';

import AdminDashboard from './components/admin/AdminDashboard';
import AdminConsultations from './components/admin/AdminConsultations';
import AdminUsers from './components/admin/AdminUsers';

import ErrorPage404 from './components/ErrorPage404';

import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.getElementById("root");
render(
  //Router v6.2.1
  /*<BrowserRouter>
    <Switch>
      <Route path="/" element={<App />} />
      <Route path="forgotPassword" element={<ForgotPassword />} />
      <Route path="signUp" element={<SignUp />} />
      <Route path="tuteeAppointment" element={<TuteeAppointment />} />
      <Route path="tuteeMessenger" element={<TuteeMessenger />} />
      <Route path="tuteeConsult" element={<TuteeConsult />} />
      <Route path="tuteeWatch" element={<TuteeWatch />} />
      <Route path="tuteePassword" element={<TuteePassword />} />
      <Route path="tutorAppointment" element={<TutorAppointment />} />
      <Route path="tutorMessenger" element={<TutorMessenger />} />
      <Route path="tutorProfile" element={<TutorProfile />} />
      <Route path="adminDashboard" element={<AdminDashboard />} />
      <Route path="adminConsultations" element={<AdminConsultations />} />
      <Route path="adminUsers" element={<AdminUsers />} />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <h1>Error 404</h1>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Switch>
  </BrowserRouter>,*/

  //Router v5.2.0
  <BrowserRouter>
    <Switch>
      <Route exact path="/"><App /></Route>
      <Route path="/forgotPassword"><ForgotPassword /></Route>
      <Route path="/signUp"><SignUp /></Route>
      <Route path="/tuteeAppointment"><TuteeAppointment /></Route>
      <Route path="/tuteeMessenger"><TuteeMessenger /></Route>
      <Route path="/tuteeConsult"><TuteeConsult /></Route>
      <Route path="/tuteeWatch"><TuteeWatch /></Route>
      <Route path="/tuteePassword"><TuteePassword /></Route>
      <Route path="/tutorAppointment"><TutorAppointment /></Route>
      <Route path="/tutorMessenger"><TutorMessenger /></Route>
      <Route path="/tutorProfile"><TutorProfile /></Route>
      <Route path="/adminDashboard"><AdminDashboard /></Route>
      <Route path="/adminConsultations"><AdminConsultations /></Route>
      <Route path="/adminUsers"><AdminUsers /></Route>
      <Route path="*"><ErrorPage404 /></Route>
    </Switch>
  </BrowserRouter>,

  rootElement
);