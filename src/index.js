import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './sass/main.scss';
import reportWebVitals from './reportWebVitals';
import TopNav from './components/TopNav';
import VerticalNav from './components/VerticalNav';
import Profile from './pages/Profile';
import Error from './components/Error'
import RedirectView from './components/RedirectView'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <TopNav />
      <VerticalNav />
      <Routes>
        <Route path='/user/' element={<Profile />} />
        <Route path='/user/:id' element={<Profile />} />
        <Route path='/user/:id/key-data' element={<Profile isKeyData={true} />} />
        <Route path='/user/:id/today-score' element={<Profile isTodayScore={true} />} />
        <Route path='/user/:id/average-sessions' element={<Profile isAverageSessions={true} />} />
        <Route path='/user/:id/activity' element={<Profile isActivity={true} />} />
        <Route path='/user/:id/activities' element={<Profile isActivities={true} />} />
        <Route path='/setting' element={<RedirectView />} />
        <Route path='/community' element={<RedirectView />} />
        <Route path='/' element={<RedirectView />} />
        <Route path='*' element={<Error />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
