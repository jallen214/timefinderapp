import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartScreen from './StartScreen';
import TasksScreen from './TaskScreen';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartScreen/>} />
        <Route path="/Tasks" element={<TasksScreen/>} />
      </Routes>
    </Router>
  );
};

export default App;
