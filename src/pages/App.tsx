import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartScreen from './StartScreen';
import TaskScreen from './TaskScreen'; 
import GoogleCalendarIntegrationButton from './GoogleCalendarInt'; 
import ConcentrationSelector from './ConcentrationSel';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/tasks" element={<TaskScreen />} />
        <Route path="/google-calendar-integration" element={<GoogleCalendarIntegrationButton />} /> 
        <Route path="/concentration-selector" element={<ConcentrationSelector />} />
      </Routes>
    </Router>
  );
};

export default App;
