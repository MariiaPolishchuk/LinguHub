import React from 'react';

const FreeLessonButton = () => {
  const handleButtonClick = () => {
    // Логика обработки клика 
    console.log('Клик на бесплатный урок');
  };

  return (
    <div className='fade-in'>
      <h1>Пример бесплатного урока</h1>
      <div className='choose-buttons'>
      <button className='button' onClick={handleButtonClick}>Try me</button>
      </div>
    </div>
  );
};

export default FreeLessonButton;
