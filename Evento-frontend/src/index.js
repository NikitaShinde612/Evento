import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from './pages/about';
import DashboardPage from './pages/dashboard';
import EventPage from './pages/event';
import FormPage from './pages/form';
import LandingPage from './pages/landing';
import LoginPage from './pages/login';
import NoPage from './pages/nopage';
import OrdersPage from './pages/orders';
import PlatformPage from './pages/platform';
import PollPage from './pages/poll'; 
import FeedbackPage from './pages/feedback';

import AllQuestions from './pages/questionAnswer';
import SubscriptionsPage from './pages/subscriptions';
import NewSub from './pages/newSubcsription';

import 'bootstrap/dist/css/bootstrap.min.css';
import AddQuestionPage from './pages/addQuestionForm';




export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<LayoutPage />} > */}
          <Route index element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/event" element={<EventPage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/paltform" element={<PlatformPage />} />
          <Route path="/poll" element={<PollPage />} />
          <Route path="/poll" element={<PollPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />

sss
          {/* <Route path="/formModal" element={<FormModalPage/>} /> */}
          <Route path="/addQuestionForm" element={<AddQuestionPage />} />

          <Route path="/questionAnswer" element={<AllQuestions />} />
          <Route path="/newSubscription" element={<NewSub />} />
          <Route path="/subscriptions" element={<SubscriptionsPage />} />
          <Route path="/*" element={<NoPage />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


