import { useState } from 'react';
import { Link } from 'react-router-dom';

const ConcentrationSelector = () => {
  const [selectedConcentration, setSelectedConcentration] = useState('');

  const handleConcentrationClick = (concentration: string) => {
    setSelectedConcentration(concentration);
  };

  const handleScheduleClick = () => {
    // Handle the action when the user clicks on "Schedule my tasks for tomorrow"
    console.log('Schedule clicked');
    // Redirect or perform other actions as needed
  };

  return (
    <div className="container mx-auto p-4">
      <img src="/src/images/Progress Bar 3.png" alt="Progress Bar 3" className="mx-auto mb-8" />

      {/* Title */}
      <h2 className="text-2xl font-bold text-center mb-4">When do you have the highest levels of concentration?</h2>

      {/* Subtext */}
      <p className="text-lg text-gray-600 text-center mb-6">This is the last bit of data we need to organize your tasks to take advantage of when you are the most productive and likely to be successful!</p>

      {/* Concentration Buttons */}
      <div className="flex justify-center mb-8">
        <div className={`flex items-center justify-center flex-col rounded-lg border border-gray-300 p-4 mr-4 ${selectedConcentration === 'morning' ? 'bg-black text-white' : 'bg-gray-200'}`} onClick={() => handleConcentrationClick('morning')}>
          <i className="fas fa-sun text-4xl mb-2"></i>
          <span>Morning 8am-12pm</span>
        </div>
        <div className={`flex items-center justify-center flex-col rounded-lg border border-gray-300 p-4 mx-4 ${selectedConcentration === 'midday' ? 'bg-black text-white' : 'bg-gray-200'}`} onClick={() => handleConcentrationClick('midday')}>
          <i className="fas fa-sun text-4xl mb-2"></i>
          <span>Midday 12pm-4pm</span>
        </div>
        <div className={`flex items-center justify-center flex-col rounded-lg border border-gray-300 p-4 ml-4 ${selectedConcentration === 'evening' ? 'bg-black text-white' : 'bg-gray-200'}`} onClick={() => handleConcentrationClick('evening')}>
          <i className="fas fa-moon text-4xl mb-2"></i>
          <span>Evening 4pm-8pm</span>
        </div>
      </div>

      {/* Button */}
      <Link to="/schedule-page">
      <button
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full block mx-auto ${selectedConcentration ? '' : 'opacity-50 cursor-not-allowed'}`}
        onClick={handleScheduleClick}
        disabled={!selectedConcentration}
      >
        Schedule my tasks for tomorrow
      </button>
      </Link>
    </div>
  );
};

export default ConcentrationSelector;

