import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartScreen from './StartScreen';
import TaskScreen from './TaskScreen'; 
import GoogleCalendarIntegrationButton from './GoogleCalendarInt'; 
import ConcentrationSelector from './ConcentrationSel';
import SchedulePage from './SchedulePage';
import HomePage from './HomePage';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/tasks" element={<TaskScreen />} />
        <Route path="/google-calendar-integration" element={<GoogleCalendarIntegrationButton />} /> 
        <Route path="/concentration-selector" element={<ConcentrationSelector />} />
        <Route path="/schedule-page" element={<SchedulePage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;

