import React, { useState } from 'react';
import Dropdown from './Dropdown'; // Import your Dropdown component

const TaskScreen = () => {
  // State for task details
  const [tasks, setTasks] = useState([
    { name: '', time: '', priority: '', concentration: '' },
    { name: '', time: '', priority: '', concentration: '' },
    { name: '', time: '', priority: '', concentration: '' }
  ]);

  // Function to handle task input change
  const handleTaskInputChange = (index: number, field: string, value: string) => {
    setTasks(tasks.map((task, i) => (i === index ? { ...task, [field]: value } : task)));
  };
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold">Time Finder</h1>
      <p className="text-lg text-gray-600 mb-4">Please create 3 tasks and see how quick it is with TimeFinder.</p> 

      {/* Render input fields and dropdowns for each task */}
      {tasks.map((task, index) => (
        <div key={index} className="mt-6 p-4 border rounded-lg">
          <h2 className="text-2xl mb-4 text-center">Task {index + 1}</h2>
          <div className="mb-4 text-center">
            <label htmlFor={`taskName${index}`} className="block text-lg text-center">Task Name:</label>
            <input
              type="text"
              id={`taskName${index}`}
              value={task.name}
              onChange={(e) => handleTaskInputChange(index, 'name', e.target.value)}
              placeholder="e.g. walk the dog" // Placeholder for Task Name
              className="border border-gray-300 rounded px-4 py-2 mt-1 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor={`taskTime${index}`} className="block text-lg text-center">Task Time:</label>
            <Dropdown
              id={`taskTime${index}`}
              options={[
                { value: 15, label: '15 minutes' },
                { value: 30, label: '30 minutes' },
                { value: 45, label: '45 minutes' },
                { value: 60, label: '1 hour' },
                { value: 90, label: '1.5 hours' },
                { value: 120, label: '2 hours' }
              ]}
              value={task.time}
              onChange={(value) => handleTaskInputChange(index, 'time', value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor={`taskPriority${index}`} className="block text-lg text-center">Task Priority:</label>
            <Dropdown
              id={`taskPriority${index}`}
              options={[
                { value: 'low', label: 'Low' },
                { value: 'medium', label: 'Medium' },
                { value: 'high', label: 'High' }
              ]}
              value={task.priority}
              onChange={(value) => handleTaskInputChange(index, 'priority', value)}
            />
          </div>
          <div>
            <label htmlFor={`taskConcentration${index}`} className="block text-lg text-center">Task Concentration:</label>
            <Dropdown
              id={`taskConcentration${index}`}
              options={[
                { value: 'low', label: 'Low' },
                { value: 'medium', label: 'Medium' },
                { value: 'high', label: 'High' }
              ]}
              value={task.concentration}
              onChange={(value) => handleTaskInputChange(index, 'concentration', value)}
            />
          </div>
        </div>
      ))}
       {/* Next button */}
       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 block mx-auto">Next</button>
    </div>
  );
};

export default TaskScreen;
