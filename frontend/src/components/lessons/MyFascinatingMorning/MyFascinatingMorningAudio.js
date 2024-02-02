


import React, { useState, useEffect, useRef } from 'react';
import './MyFascinatingMorning.css';

// Функция для автоматического расширения поля ввода
const autoExpand = (inputField) => {
  inputField.style.width = 'auto';
  inputField.style.width = inputField.scrollWidth + 10 + 'px';
};

const MyFascinatingMorningAudio = () => {
  // Создаем реф для аудио
  const audioRef = useRef(new Audio('/audio/audio.mp3'));
  // Состояния для объекта вопроса и проверки ответа
  const [audioQuestionObj, setAudioQuestionObj] = useState(null);
  const [audioAnswerChecked, setAudioAnswerChecked] = useState(false);

  // Массив с вопросами
  const audioQuestions = [
    {
      showQuestionAtSecond: 14,
      blanks: ['blank1'],
      sentence:
        "The morning routine typically includes waking up, preparing for the day, enjoying a brief breakfast, and <span class='userInput' id='blank1' contenteditable='true'> </span> on news or social media to stay informed about current events.",
      answers: ['catching up'],
    },
    {
      showQuestionAtSecond: 22,
      blanks: ['blank2'],
      sentence:
        "In the midst of the hustle and bustle of daily life, a morning routine <span class='userInput' id='blank2' contenteditable='true'> </span> an anchor, providing a sense of purpose and direction.",
      answers: ['serves as'],
    },
  ];

  // Обработчик изменения ввода
  const handleInputChange = (event) => {
    if (event.target.id && event.target.classList.contains('userInput')) {
      autoExpand(event.target);
    }
  };

  // Эффект, отслеживающий изменения времени в аудио
  useEffect(() => {
    // Функция для обработки события timeupdate
    const handleTimeUpdate = () => {
      if (!audioRef.current) {
        return;
      }

      const currentTime = Math.floor(audioRef.current.currentTime);

      if (audioAnswerChecked || audioQuestionObj) {
        return;
      }

      if (currentTime === 0) {
        setAudioAnswerChecked(false);
        setAudioQuestionObj(null);
      }

      const questionObj = audioQuestions.find(
        (q) => Math.abs(q.showQuestionAtSecond - currentTime) < 1
      );

      if (questionObj) {
        console.log('Displaying question');
        audioRef.current.pause();
        setAudioQuestionObj(questionObj);
        setAudioAnswerChecked(true);
      }

      if (!audioQuestionObj && currentTime >= audioRef.current.duration) {
        console.log('Restarting audio');
        audioRef.current.currentTime = 0;
        audioRef.current.play();
        setAudioAnswerChecked(false);
      }
    };

    console.log('timeupdate effect is running');
    if (audioRef.current) {
      audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
    }

    document.addEventListener('input', handleInputChange);

    // Очистка событий при размонтировании компонента
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
      }
      document.removeEventListener('input', handleInputChange);
    };
  }, [audioAnswerChecked, audioQuestionObj, audioQuestions]);

  // Обработчик отправки ответа
  const handleAnswerSubmit = () => {
    if (!audioAnswerChecked || !audioQuestionObj) {
      console.error(
        'Answer check failed: audioAnswerChecked - false or audioQuestionObj - null'
      );
      return;
    }

    setAudioAnswerChecked(false);
    checkAnswers(audioQuestionObj);
  };

  // Функция для проверки ответов
  const checkAnswers = (question) => {
    let correct = true;
    const correctAnswers = [];

    question.blanks.forEach((blank) => {
      const userInput = document.getElementById(blank).textContent.trim();
      const currentCorrectAnswer = question.answers[question.blanks.indexOf(blank)];

      const blankElement = document.getElementById(blank);

      if (!blankElement) {
        console.error(`Element with id ${blank} not found.`);
        return;
      }

      if (userInput.toLowerCase() !== currentCorrectAnswer.toLowerCase()) {
        correct = false;
        blankElement.classList.add('audio-incorrect');
        if (!correctAnswers.includes(currentCorrectAnswer)) {
          correctAnswers.push(currentCorrectAnswer);
        }
      } else {
        blankElement.classList.remove('audio-incorrect');
        blankElement.classList.add('audio-correct');
      }
    });

    const correctAnswerMessage = correctAnswers.join(', ');

    displayResults(
      correct ? 'Gorgeous!' : 'You are wrong!',
      correct ? 'audio-correct' : 'audio-incorrect',
      correctAnswerMessage
    );
  };

  // Функция для отображения результатов
  const displayResults = (message, resultClass, correctAnswer) => {
    const audioResultsElement = document.getElementById('audioResults');

    if (!audioResultsElement) {
      console.error('Element with id "audioResults" not found.');
      return;
    }

    audioResultsElement.innerHTML = '';

    const messageElement = document.createElement('p');
    messageElement.textContent = message;

    if (!correctAnswer) {
      messageElement.classList.add(resultClass);
    } else {
      const correctAnswerElement = document.createElement('span');
      correctAnswerElement.textContent = ' ' + correctAnswer;
      correctAnswerElement.classList.add('audio-correct-answer');

      messageElement.appendChild(correctAnswerElement);
      messageElement.classList.add(resultClass);
    }

    audioResultsElement.appendChild(messageElement);

    // Очистка результатов и воспроизведение аудио после задержки
    setTimeout(() => {
      setAudioQuestionObj(null);
      audioRef.current.currentTime = audioRef.current.currentTime + 1;
      audioRef.current.play();

      // Очистка стилей
      audioQuestions.forEach((question) => {
        question.blanks.forEach((blank) => {
          const blankElement = document.getElementById(blank);
          if (blankElement) {
            blankElement.classList.remove('audio-incorrect', 'audio-correct');
          }
        });
      });

      // Очистка результатов
      if (audioResultsElement) {
        audioResultsElement.innerHTML = '';
      }
    }, 3000);
  };

  // JSX разметка компонента
  return (
    <div className="task block">
      <div className="block-name dotted">
        <h3>Listening Practice</h3>
        <h4>
          Now we are going to practice your listening skills. During this audio
          will be playing you will see the questions. After each answer tick
          the submit button to check yourself. Audio won't be playing without
          answer!
        </h4>
      </div>
      <div className="play">
        <audio id="audioPlayer" controls ref={audioRef}>
          <source src="/audio/audio.mp3" type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
        {audioQuestionObj && (
          <div
            className="audio-questions"
            id="question"
            dangerouslySetInnerHTML={{ __html: audioQuestionObj.sentence }}
          ></div>
        )}
      </div>
      <div id="audioResults"></div>
      <div className="button-sing">
        <button
          className="button"
          id="checkAnswersBtnAudio"
          onClick={handleAnswerSubmit}
        >
          Submit Answer
        </button>
      </div>
    </div>
  );
};

export default MyFascinatingMorningAudio;
