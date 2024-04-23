import axios from 'axios';
import { Link } from 'react-router-dom';
import TimeFinderLogo from './TimeFinderLogo';

const GoogleCalendarIntegrationButton = () => {
  const handleIntegrationClick = async () => {
    try {
      // Make a request to your backend API endpoint
      const response = await axios.post('/api/google/calendar/integration');
      // Redirect the user to the URL received from the backend
      window.location.href = response.data.redirectUrl;
    } catch (error) {
      console.error('Error integrating with Google Calendar:', error);
      // Handle error if needed
    }
  };

  return (
    <div className="container mx-auto p-4 text-center">
      <TimeFinderLogo />
      <img src="/src/images/Progress Bar 2.png" alt="Progress Bar 2" className="mx-auto mb-8" />
      <img src="/src/images/New event added - TimeFinder.png" alt="Scheduling your tasks" className="mx-auto mb-8" />
      <h1 className="text-3xl font-bold mb-4">Scheduling your tasks increases the likelihood of completion by 30%</h1>
      <p className="text-lg text-gray-600 mb-8">TimeFinder will schedule the <strong>right tasks</strong> at the <strong>right times</strong> on your Google Calendar to help you successfully get things done.</p>
      <button onClick={handleIntegrationClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full">
      <Link to="/concentration-selector">Connect my Google Calendar</Link>
      </button>
    </div>
  );
};

export default GoogleCalendarIntegrationButton;
