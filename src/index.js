import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './sass/main.scss';
import reportWebVitals from './reportWebVitals';
import RowNav from './components/RowNav';
import VerticalNav from './components/VerticalNav';
import Profile from './pages/Profile';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <RowNav />
      <VerticalNav />
      <Routes>
        <Route path='/user/' element={<Profile />} />
        <Route path='/user/:id' element={<Profile />} />
        <Route path='/user/:id/key-data' element={<Profile isKeyData={true} />} />
        <Route path='/user/:id/today-score' element={<Profile isTodayScore={true} />} />
        <Route path='/user/:id/average-sessions' element={<Profile isAverageSessions={true} />} />
        <Route path='/user/:id/activity' element={<Profile isActivity={true} />} />
        <Route path='/user/:id/activities' element={<Profile isActivities={true} />} />
        <Route path='*' element={<Navigate to="/user/18" />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
