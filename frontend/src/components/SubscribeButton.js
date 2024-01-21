import React from 'react';

const SubscribeButton = () => {
  const handleButtonClick = () => {
    // Логика обработки клика на кнопку подписки
    console.log('Клик');
  };

  return (
    <div className='fade-in'>
      <h1>StartUsing it now!</h1>
      <button className='button' onClick={handleButtonClick}>Start</button>
    </div>
  );
};

export default SubscribeButton;
