import React, { useState, useEffect } from 'react';

const MyFascinatingMorningTest = () => {
  const originalAnswers = {
    '1': {
      options: ['hustle and bustle', 'mundane', 'gratitude', 'infusion'],
      originalText: '1. We all need a break from the ________ of our daily lives.'
    },
    '2': {
      options: ['unravel', 'delving into', 'sip on', 'affect'],
      originalText: '2. She said she was tired of journalists ________ her private life.'
    },
    '3': {
      options: ['fostering', 'intricacies', 'gratitude', 'tapestry'],
      originalText: '3. He grasped the ________ of the financial system better than any of us.'
    },
    '4': {
      options: ['invigorating', 'meticulous', 'mundane', 'shape my life'],
      originalText: '4. These yoga postures are ________ and good for balance.'
    },
    '5': {
      options: ['fostering', 'lying ahead', 'cultivating', 'infusing'],
      originalText: '5. The new prime minister is ________ relationships with East Asian countries.'
    },
    '6': {
      options: ['crafted', 'sacred', 'anchored', 'infused'],
      originalText: '6. We ________ ourselves to the rocks with a rope.'
    },
    '7': {
      options: ['fostering', 'contributing', 'cultivating', 'invigorating'],
      originalText: '7. Would you consider ________ a child? (adopt)'
    },
    '8': {
      options: ['tastes', 'savors', 'tasting', 'delicious'],
      originalText: '8. Let us rediscover the flavors and ________ of regional cooking.'
    },
    '9': {
      options: ['gratitude', 'savor', 'taste', 'intricacy'],
      originalText: '9. She felt that life had lost most of its ________.'
    },
    '10': {
      options: ['mundane', 'fatigue', 'cultivate', 'forth'],
      originalText: '10. She was suffering from chronic ________.'
    }
  };

  const correctAnswers = {
    '1': '1',
    '2': '2',
    '3': '1',
    '4': '1',
    '5': '3',
    '6': '3',
    '7': '1',
    '8': '2',
    '9': '2',
    '10': '2'
  };

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showCorrectAnswers, setShowCorrectAnswers] = useState(false);

  useEffect(() => {
    resetTestAnswers();
  }, []); 

  const testAnswers = () => {
    document.getElementById('results').innerHTML = '';

    document.querySelectorAll('.question').forEach((question, index) => {
      const selectedAnswer = question.querySelector('.answer-dropdown').value;
      const questionNumber = index + 1;

      setSelectedAnswers(prevState => ({ ...prevState, [questionNumber]: selectedAnswer }));

      const resultContainer = question.querySelector('.result');
      const dropdown = question.querySelector('.answer-dropdown');

      dropdown.classList.remove('correct-answer', 'incorrect-answer');

      if (selectedAnswer === correctAnswers[questionNumber.toString()]) {
        resultContainer.classList.remove('incorrect-answer');
        resultContainer.classList.add('correct-answer');
        dropdown.classList.add('correct-answer');
        resultContainer.innerHTML = 'Correct!';
      } else {
        resultContainer.classList.remove('correct-answer');
        resultContainer.classList.add('incorrect-answer');
        dropdown.classList.add('incorrect-answer');
        resultContainer.innerHTML = 'Correct answer is: ' + originalAnswers[questionNumber.toString()].options[correctAnswers[questionNumber.toString()] - 1];
      }
    });
  };

  const resetTestAnswers = () => {
    document.querySelectorAll('.question').forEach((question, index) => {
      const dropdown = question.querySelector('.answer-dropdown');
      const questionNumber = index + 1;

      const originalOptions = originalAnswers[questionNumber.toString()].options;
      const originalText = originalAnswers[questionNumber.toString()].originalText;

      dropdown.innerHTML = '';

      const chooseOption = document.createElement('option');
      chooseOption.value = '';
      chooseOption.text = 'Choose';
      chooseOption.hidden = true; 
      dropdown.add(chooseOption);

      originalOptions.forEach((option, optionIndex) => {
        const optionElement = document.createElement('option');
        optionElement.value = (optionIndex + 1).toString();
        optionElement.text = option;
        dropdown.add(optionElement);
      });

      dropdown.value = '';
      
      const resultContainer = question.querySelector('.result');
      resultContainer.innerHTML = '';

      const questionTextElement = question.querySelector('p');
      questionTextElement.innerHTML = originalText;

      dropdown.classList.remove('correct-answer', 'incorrect-answer');
    });

    setSelectedAnswers({});
    setShowCorrectAnswers(false);
    document.getElementById('results').innerHTML = '';
  };

  const showTestAnswers = () => {
    document.querySelectorAll('.question').forEach((question, index) => {
      const questionNumber = index + 1;
      const correctAnswerIndex = correctAnswers[questionNumber.toString()] - 1;
      const resultContainer = question.querySelector('.result');

      resultContainer.classList.remove('correct-answer', 'incorrect-answer');

      if (correctAnswerIndex !== undefined && correctAnswerIndex >= 0) {
        const dropdown = question.querySelector('.answer-dropdown');
        const correctAnswer = originalAnswers[questionNumber.toString()].options[correctAnswerIndex];

        const questionTextElement = question.querySelector('p');
        questionTextElement.innerHTML = questionTextElement.textContent.replace('________', `<span class="correct-answer">${correctAnswer}</span>`);

        dropdown.classList.add('correct-answer');
        resultContainer.classList.add('correct-answer');
        // resultContainer.innerHTML = ``;
      } else {
        resultContainer.classList.add('incorrect-answer');
        // resultContainer.innerHTML = `Вопрос ${questionNumber}: Правильный ответ не найден`;
      }
    });

    setShowCorrectAnswers(true);
  };

  return (
    <div className="test-container block">
      <div className="block-name">
            <h3>Vocabulary Practice</h3>
            <h4>Complete the sentences by choosing the correct word!</h4>
          </div>
      <div id="questions-container">
        <div className="questions-container-test">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(questionNumber => (
            <div className="question" key={questionNumber} data-question-number={questionNumber}>
              <p>{originalAnswers[questionNumber.toString()].originalText}</p>
              <select className="answer-dropdown" id={`question${questionNumber}`} defaultValue="">
                <option value="" disabled hidden>Сhoose</option>
                {originalAnswers[questionNumber.toString()].options.map((option, optionIndex) => (
                  <option key={optionIndex + 1} value={(optionIndex + 1).toString()}>{option}</option>
                ))}
              </select>
              <div className="result"></div>
            </div>
          ))}
        </div>
      </div>
      <div className="choose-buttons">
        <button className="button" onClick={testAnswers}>Check</button>
        <button className="button" onClick={resetTestAnswers}>Reset</button>
        <button className="button" onClick={showTestAnswers}>Show Answers</button>
      </div>
      <div id="results"></div>
    </div>
  );
};

export default MyFascinatingMorningTest;
