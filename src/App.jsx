import React, { useState } from 'react';
import Card from "./components/Card";
import { employees } from './data/employees.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNextCard = () => {
    if (currentCardIndex < employees.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    }
  };

  const handlePreviousCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    }
  };

  return (
    <div className='h-screen bg-gray-600 flex items-center justify-center px-10 gap-3'>
      <div
        className='cursor-pointer bg-white opacity-50 rounded-full p-4
        flex items-center justify-center hover:opacity-90'
        onClick={handlePreviousCard}
        disabled={currentCardIndex === 0}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </div>
      <Card employeeData={employees[currentCardIndex]} />
      <div
        className='cursor-pointer bg-white opacity-50 rounded-full p-4
        flex items-center justify-center hover:opacity-90'
        onClick={handleNextCard}
        disabled={currentCardIndex === employees.length - 1}
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
    </div>
  );
}

export default App;