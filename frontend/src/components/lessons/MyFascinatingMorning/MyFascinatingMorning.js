
// import React, { useState, useEffect, useRef } from 'react';

// import React, { useState, useEffect } from 'react';
// import MyFascinatingMorningGame from './MyFascinatingMorningGame';
// import MyFascinatingMorningQuiz from './MyFascinatingMorningQuiz';
// import MyFascinatingMorningTest from './MyFascinatingMorningTest';
// import MyFascinatingMorningTextDrag from './MyFascinatingMorningTextDrag'
// import MyFascinatingMorningAudio from './MyFascinatingMorningAudio'
// import './MyFascinatingMorning.css';
// import lesson from './img/lesson.svg'
// import Quizz from './img/Quizz.jpg'



// const MyFascinatingMorning = () => {
//   const [outputText, setOutputText] = useState('');
//   const [answers, setAnswers] = useState(Array(15).fill(''));
//   const [questionsAndOptions] = useState([
//     {
//       question: 'to try hard to find out more information about something:',
//       options: ['delve into', 'hustle and bustle', 'meticulously', 'cultivate'],
//     },
//     {
//       question: 'making one feel strong, healthy, and full of energy:',
//       options: ['invigorating', 'purposeful', 'bring forth', 'contribute'],
//     },
//     {
//       question: 'the quality of being thankful; readiness to show appreciation:',
//       options: ['invigorating', 'grateful', 'gratitude', 'meticulous'],
//     },
//     {
//       question: 'very ordinary and therefore not interesting:',
//       options: ['sanctuary', 'mundane', 'craft', 'pivotal'],
//     },
//     {
//       question: 'details, especially of an involved or perplexing subject:',
//       options: ['forth', 'intricacies', 'savor', 'pivotal'],
//     },
//     {
//       question: 'variety; life experience:',
//       options: ['rich tapestry', 'intricacies', 'purposeful', 'pivotal'],
//     },
//     {
//       question: 'to drink in small quantities or little by little:',
//       options: ['forth', 'rich tapestry', 'purposeful', 'sip on'],
//     },
//     {
//       question: 'in a way that shows great attention to detail; very thoroughly:',
//       options: ['forth', 'invigorating', 'attentive', 'meticulously'],
//     },
//     {
//       question: 'try to acquire or develop (a quality or skill):',
//       options: ['forth', 'foster', 'cultivate', 'meticulously'],
//     },
//     {
//       question: 'bring up, encourage the development, adopt a child:',
//       options: ['forth', 'bring forth', 'cultivate', 'foster'],
//     },
//     {
//       question: 'give (something, especially money) in order to help achieve:',
//       options: ['forth', 'bring forth', 'contribute', 'foster'],
//     },
//     {
//       question: 'quality of having or showing determination:',
//       options: ['purposeful', 'contribute', 'purpose', 'contributive'],
//     },
//     {
//       question: 'to enjoy food or a pleasant experience as slowly as possible:',
//       options: ['purposeful', 'sip on', 'savor', 'meticulously'],
//     },
//     {
//       question: 'to cause something to happen or be seen or known:',
//       options: ['purposeful', 'bring about', 'bring forth', 'affect'],
//     },
//     {
//       question: 'have an effect on; make a difference to:',
//       options: ['contribute', 'bring forth', 'effect', 'affect'],
//     },
//   ]);

//   // const askRandomQuestion = () => {
//   //   const randomIndex = Math.floor(Math.random() * questionsAndOptions.length);
//   //   const randomQuestion = questionsAndOptions[randomIndex].question;

//   //   setOutputText(randomQuestion);
//   // };

//   const checkAndShowAnswers = () => {
//     for (let i = 0; i < answers.length; i++) {
//       const formId = `form${i + 1}`;
//       const form = document.getElementById(formId);
//       const selectedOption = form.querySelector('select').value;
//       const correctAnswer = questionsAndOptions[i].options[0]; // Предполагаем, что правильный ответ всегда первый вариант
//       const answerSpan = form.querySelector('.answer1');

//       if (selectedOption === correctAnswer) {
//         answerSpan.textContent = 'Gorgeous!';
//         answerSpan.classList.remove('incorrect1');
//         answerSpan.classList.add('correct1');
//       } else {
//         answerSpan.textContent = `You are wrong! Correct answer is ${correctAnswer}!`;
//         answerSpan.classList.remove('correct1');
//         answerSpan.classList.add('incorrect1');
//       }
//     }
//   };

//   const resetForms = () => {
//     setAnswers(Array(15).fill(''));

//     // Сброс стилей и текста ответов
//     for (let i = 0; i < answers.length; i++) {
//       const formId = `form${i + 1}`;
//       const form = document.getElementById(formId);
//       const answerSpan = form.querySelector('.answer1');
//       answerSpan.textContent = '';
//       answerSpan.classList.remove('correct1', 'incorrect1');
//     }
//   };

//   const askRandomQuestion = () => {
//     var questionBlock = document.getElementById('questionBlock');
//     var questions = questionBlock.getElementsByTagName('p');
//     var randomIndex = Math.floor(Math.random() * questions.length);
//     var randomQuestion = questions[randomIndex].textContent;
//     var outputElement = document.getElementById('output');

//     // Добавляем класс анимации из animate.css
//     outputElement.classList.add('animate__animated', 'animate__fadeIn');

//     // Выводим вопрос на страницу
//     setOutputText(randomQuestion);

//     // Убираем класс анимации после завершения анимации
//     outputElement.addEventListener('animationend', function () {
//       outputElement.classList.remove('animate__animated', 'animate__fadeIn');
//     });
//   };



//   return (
//     <div className='fade-in'>
//       <div className='start'>
//         <div className="main-container">
//           <div className="head">
//             <div className="title">
//               <div className="lesson">
//                 <h1 className="lesson-name">MY FASCINATING MORNING</h1>
//                 {/* <img className="main-icon" src={lesson} alt="" /> */}
//               </div>
//               <div className="quizlet">
//                 <a href="http://"><img className="quizimg" src={Quizz} alt="" /></a>
//                 <h6 className="quizlet-text">Work on Quizlet</h6>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="read">
//           <div className="reading">
//             <div className="reading-background">
//               <h4>Task. Work on Quizlet. Read the text and pay attention to the highlighted words. Listen the audio to be confident about your pronunciation. Answer the questions</h4>

//               <h3 className='theme-start'>The Enchanting World of Morning Rituals</h3>
//               <p>
//                 In the <span className="tooltip">hustle and bustle
//                   <span className="tooltiptext">busy and noisy activity</span>
//                 </span> of daily life, routines often provide the comforting rhythm that guides
//                 our days. While routines are commonly associated with the <span className="tooltip">mundane
//                   <span className="tooltiptext">routine; lacking interest or excitement</span>
//                 </span>, there's a hidden beauty in
//                 the habits and rituals that shape our lives. This topic <span className="tooltip">delves into
//                   <span className="tooltiptext">to make a careful or detailed search for information</span>
//                 </span> the <span className="tooltip">intricacies
//                   <span className="tooltiptext">details</span>
//                 </span> of "My
//                 Fascinating Routine," exploring the elements that make everyday activities not only
//                 <span className="tooltip"> essential <span className="tooltiptext">absolutely necessary; extremely
//                   important.</span></span>
//                 but also <span className="tooltip">intriguing<span className="tooltiptext">arousing one's curiosity
//                   or interest; fascinating.</span></span>.
//               </p>
//               <p>
//                 The early hours of the day hold a unique magic, and for many, morning rituals are the keys
//                 that
//                 unlock it. In this exploration of "Morning Rituals," we will unravel the layers of practices
//                 that
//                 greet the sunrise, <span className="tooltip">setting the tone for the day ahead<span className="tooltiptext">to
//                   establish a particular mood or character for the next
//                   days</span></span>. From the comforting warmth of a
//                 cup of
//                 coffee
//                 to the <span className="tooltip">invigorating <span className="tooltiptext">making one feel strong,
//                   healthy, and full of energy</span></span> power of mindful moments, these
//                 rituals shape a sanctuary in the midst of
//                 dawn.

//                 Morning rituals, with their rich tapestry of sensory experiences and mindful practices,
//                 serve as
//                 the
//                 sacred prologue to our daily narratives. Whether <span className="tooltip">sipping on <span
//                   className="tooltiptext">to drink in small quantities or little by
//                   little</span></span> a <span className="tooltip">meticulously <span className="tooltiptext">in a
//                     way that shows great attention to detail; very thoroughly.</span></span>
//                 brewed cup of coffee,
//                 finding solace in meditation, or <span className="tooltip">savoring <span className="tooltiptext">taste
//                   (good food, drink or moment) and enjoy it to the full</span></span> a nourishing
//                 breakfast, these rituals not only anchor
//                 us
//                 in the present but also <span className="tooltip">infuse <span className="tooltiptext">fill;
//                   pervade</span></span> our days with a sense of purpose and tranquility. By embracing
//                 the
//                 dawn and <span className="tooltip">crafting <span className="tooltiptext">creating</span></span> our
//                 unique morning symphony, we discover that the rituals we <span className="tooltip">cultivate
//                   <span className="tooltiptext">try to acquire or develop (a quality or skill).</span></span>
//                 at
//                 sunrise
//                 become the threads that weave the fabric of a fulfilling and <span className="tooltip">intentional
//                   <span className="tooltiptext">done on purpose; deliberate; consciously</span></span> life.
//               </p>
//             </div>
//           </div>

//           <div className="questions">
//             <div className="questions-block" id="questionBlock">
//               <p>What is the central theme of the topic?</p>
//               <p>Why are morning rituals described as unlocking a unique magic in the early hours of the
//                 day?</p>
//               <p>What is the significance of morning rituals in daily life?</p>
//               <p>How does the topic suggest that morning rituals contribute to a fulfilling and
//                 intentional?
//                 life?</p>
//             </div>
//             <button className="button" onClick={askRandomQuestion}>Tick here to speak</button>
//             <div id="output">
//               {outputText && <p>{outputText}</p>}
//             </div>
//           </div>
//         </div>

//         <div className="blocks">
//           <div className='block1'>
//             <div className="block-name">
//               <h3>Vocabulary Practise</h3>
//               <h4>
//                 Sure, you are ready with Quizlet! So, it's time to practice and add some knowledge to
//                 your mind! Choose the correct word for each definition and check your answers!
//               </h4>
//             </div>
//             <div className='block-form'>
//               {[...Array(15)].map((_, index) => (
//                 <form key={index + 1} id={`form${index + 1}`}>
//                   <p>
//                     <label className="option" htmlFor={`option${index + 1}`}>
//                       {index + 1}. {questionsAndOptions[index].question}
//                     </label>
//                     <select
//                       className="select-opt"
//                       name={`user_profile_color_${index + 1}`}
//                       required="required"
//                       id={`option${index + 1}`}
//                       value={answers[index]}
//                       onChange={(e) => {
//                         const newAnswers = [...answers];
//                         newAnswers[index] = e.target.value;
//                         setAnswers(newAnswers);
//                       }}
//                     >
//                       <option value="" disabled hidden>Choose</option>
//                       {questionsAndOptions[index].options.map((option, optionIndex) => (
//                         <option key={optionIndex} value={option}>
//                           {option}
//                         </option>
//                       ))}
//                     </select>
//                     <span className="answer1 incorrect1" data-correct={`correctAnswer${index + 1}`}></span>
//                   </p>
//                 </form>
//               ))}
//             </div>


//             <div className="choose-buttons">
//               <button className="button" onClick={checkAndShowAnswers}>Check and show answers</button>
//               <button className="button" onClick={resetForms}>Start again</button>
//             </div>
//           </div>
//           <div className='drag-words-game block'>
//             <MyFascinatingMorningGame />
//           </div>
//           <div>
//             <MyFascinatingMorningQuiz />
//           </div>
//           <div>
//             <MyFascinatingMorningTest />
//           </div>
//           <div>
//             <MyFascinatingMorningTextDrag />
//           </div>
//           <div>
//             <MyFascinatingMorningAudio />
//           </div>



//         </div>
//       </div>
//     </div>


//   );
// }

// export default MyFascinatingMorning;

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MyFascinatingMorningGame from './MyFascinatingMorningGame';
import MyFascinatingMorningQuiz from './MyFascinatingMorningQuiz';
import MyFascinatingMorningTest from './MyFascinatingMorningTest';
import MyFascinatingMorningTextDrag from './MyFascinatingMorningTextDrag';
import MyFascinatingMorningAudio from './MyFascinatingMorningAudio';
// import lesson from './img/lesson.svg';
import Quizz from './img/Quizz.jpg';

const MyFascinatingMorning = () => {
  const [outputText, setOutputText] = useState('');
  const [answers, setAnswers] = useState(Array(15).fill(''));
  const [questionsAndOptions] = useState([
    {
      question: 'to try hard to find out more information about something:',
      options: ['delve into', 'hustle and bustle', 'meticulously', 'cultivate'],
    },
    {
      question: 'making one feel strong, healthy, and full of energy:',
      options: ['invigorating', 'purposeful', 'bring forth', 'contribute'],
    },
    {
      question: 'the quality of being thankful; readiness to show appreciation:',
      options: ['invigorating', 'grateful', 'gratitude', 'meticulous'],
    },
    {
      question: 'very ordinary and therefore not interesting:',
      options: ['sanctuary', 'mundane', 'craft', 'pivotal'],
    },
    {
      question: 'details, especially of an involved or perplexing subject:',
      options: ['forth', 'intricacies', 'savor', 'pivotal'],
    },
    {
      question: 'variety; life experience:',
      options: ['rich tapestry', 'intricacies', 'purposeful', 'pivotal'],
    },
    {
      question: 'to drink in small quantities or little by little:',
      options: ['forth', 'rich tapestry', 'purposeful', 'sip on'],
    },
    {
      question: 'in a way that shows great attention to detail; very thoroughly:',
      options: ['forth', 'invigorating', 'attentive', 'meticulously'],
    },
    {
      question: 'try to acquire or develop (a quality or skill):',
      options: ['forth', 'foster', 'cultivate', 'meticulously'],
    },
    {
      question: 'bring up, encourage the development, adopt a child:',
      options: ['forth', 'bring forth', 'cultivate', 'foster'],
    },
    {
      question: 'give (something, especially money) in order to help achieve:',
      options: ['forth', 'bring forth', 'contribute', 'foster'],
    },
    {
      question: 'quality of having or showing determination:',
      options: ['purposeful', 'contribute', 'purpose', 'contributive'],
    },
    {
      question: 'to enjoy food or a pleasant experience as slowly as possible:',
      options: ['purposeful', 'sip on', 'savor', 'meticulously'],
    },
    {
      question: 'to cause something to happen or be seen or known:',
      options: ['purposeful', 'bring about', 'bring forth', 'affect'],
    },
    {
      question: 'have an effect on; make a difference to:',
      options: ['contribute', 'bring forth', 'effect', 'affect'],
    },
  ]);


  const location = useLocation();

  useEffect(() => {
    console.log('Route was changed:', location.pathname);
    // route handling logic
  }, [location]);

  const checkAndShowAnswers = () => {
    for (let i = 0; i < answers.length; i++) {
      const formId = `form${i + 1}`;
      const form = document.getElementById(formId);
      const selectedOption = form.querySelector('select').value;
      const correctAnswer = questionsAndOptions[i].options[0]; // правильный ответ всегда первый вариант
      const answerSpan = form.querySelector('.answer1');

      if (selectedOption === correctAnswer) {
        answerSpan.textContent = 'Gorgeous!';
        answerSpan.classList.remove('incorrect1');
        answerSpan.classList.add('correct1');
      } else {
        answerSpan.textContent = `You are wrong! Correct answer is ${correctAnswer}!`;
        answerSpan.classList.remove('correct1');
        answerSpan.classList.add('incorrect1');
      }
    }
  };

  const resetForms = () => {
    setAnswers(Array(15).fill(''));


    for (let i = 0; i < answers.length; i++) {
      const formId = `form${i + 1}`;
      const form = document.getElementById(formId);
      const answerSpan = form.querySelector('.answer1');
      answerSpan.textContent = '';
      answerSpan.classList.remove('correct1', 'incorrect1');
    }
  };

  const askRandomQuestion = () => {
    var questionBlock = document.getElementById('questionBlock');
    var questions = questionBlock.getElementsByTagName('p');
    var randomIndex = Math.floor(Math.random() * questions.length);
    var randomQuestion = questions[randomIndex].textContent;
    var outputElement = document.getElementById('output');


    outputElement.classList.add('animate__animated', 'animate__fadeIn');

    // Вывод вопроса на страницу
    setOutputText(randomQuestion);

    // Убираем класс анимации после завершения анимации
    outputElement.addEventListener('animationend', function () {
      outputElement.classList.remove('animate__animated', 'animate__fadeIn');
    });
  };

  return (
    <div className='fade-in'>
      <div className='start'>
        <div className="main-container">
          <div className="head">
            <div className="title">
              <div className="lesson">
                <h1 className="lesson-name">MY FASCINATING MORNING</h1>
                {/* <img className="main-icon" src={lesson} alt="" /> */}
              </div>
              <div className="quizlet">
                <a href="http://"><img className="quizimg" src={Quizz} alt="" /></a>
                <h6 className="quizlet-text">Work on Quizlet</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="read">
          <div className="reading">
            <div className="reading-background">
              <h4>Task. Work on Quizlet. Read the text and pay attention to the highlighted words. Listen the audio to be confident about your pronunciation. Answer the questions</h4>

              <h3 className='theme-start'>The Enchanting World of Morning Rituals</h3>
              <p>
                In the <span className="tooltip">hustle and bustle
                  <span className="tooltiptext">busy and noisy activity</span>
                </span> of daily life, routines often provide the comforting rhythm that guides
                our days. While routines are commonly associated with the <span className="tooltip">mundane
                  <span className="tooltiptext">routine; lacking interest or excitement</span>
                </span>, there's a hidden beauty in
                the habits and rituals that shape our lives. This topic <span className="tooltip">delves into
                  <span className="tooltiptext">to make a careful or detailed search for information</span>
                </span> the <span className="tooltip">intricacies
                  <span className="tooltiptext">details</span>
                </span> of "My
                Fascinating Routine," exploring the elements that make everyday activities not only
                <span className="tooltip"> essential <span className="tooltiptext">absolutely necessary; extremely
                  important.</span></span>
                but also <span className="tooltip">intriguing<span className="tooltiptext">arousing one's curiosity
                  or interest; fascinating.</span></span>.
              </p>
              <p>
                The early hours of the day hold a unique magic, and for many, morning rituals are the keys
                that
                unlock it. In this exploration of "Morning Rituals," we will unravel the layers of practices
                that
                greet the sunrise, <span className="tooltip">setting the tone for the day ahead<span className="tooltiptext">to
                  establish a particular mood or character for the next
                  days</span></span>. From the comforting warmth of a
                cup of
                coffee
                to the <span className="tooltip">invigorating <span className="tooltiptext">making one feel strong,
                  healthy, and full of energy</span></span> power of mindful moments, these
                rituals shape a sanctuary in the midst of
                dawn.

                Morning rituals, with their rich tapestry of sensory experiences and mindful practices,
                serve as
                the
                sacred prologue to our daily narratives. Whether <span className="tooltip">sipping on <span
                  className="tooltiptext">to drink in small quantities or little by
                  little</span></span> a <span className="tooltip">meticulously <span className="tooltiptext">in a
                    way that shows great attention to detail; very thoroughly.</span></span>
                brewed cup of coffee,
                finding solace in meditation, or <span className="tooltip">savoring <span className="tooltiptext">taste
                  (good food, drink or moment) and enjoy it to the full</span></span> a nourishing
                breakfast, these rituals not only anchor
                us
                in the present but also <span className="tooltip">infuse <span className="tooltiptext">fill;
                  pervade</span></span> our days with a sense of purpose and tranquility. By embracing
                the
                dawn and <span className="tooltip">crafting <span className="tooltiptext">creating</span></span> our
                unique morning symphony, we discover that the rituals we <span className="tooltip">cultivate
                  <span className="tooltiptext">try to acquire or develop (a quality or skill).</span></span>
                at
                sunrise
                become the threads that weave the fabric of a fulfilling and <span className="tooltip">intentional
                  <span className="tooltiptext">done on purpose; deliberate; consciously</span></span> life.
              </p>
            </div>
          </div>

          <div className="questions">
            <div className="questions-block" id="questionBlock">
              <p>What is the central theme of the topic?</p>
              <p>Why are morning rituals described as unlocking a unique magic in the early hours of the
                day?</p>
              <p>What is the significance of morning rituals in daily life?</p>
              <p>How does the topic suggest that morning rituals contribute to a fulfilling and
                intentional?
                life?</p>
            </div>
            <button className="button" onClick={askRandomQuestion}>Tick here to speak</button>
            <div id="output">
              {outputText && <p>{outputText}</p>}
            </div>
          </div>
        </div>

        <div className="blocks">
          <div className='block1'>
            <div className="block-name">
              <h3>Vocabulary Practise</h3>
              <h4>
                Sure, you are ready with Quizlet! So, it's time to practice and add some knowledge to
                your mind! Choose the correct word for each definition and check your answers!
              </h4>
            </div>
            <div className='block-form'>
              {[...Array(15)].map((_, index) => (
                <form key={index + 1} id={`form${index + 1}`}>
                  <p>
                    <label className="option" htmlFor={`option${index + 1}`}>
                      {index + 1}. {questionsAndOptions[index].question}
                    </label>
                    <select
                      className="select-opt"
                      name={`user_profile_color_${index + 1}`}
                      required="required"
                      id={`option${index + 1}`}
                      value={answers[index]}
                      onChange={(e) => {
                        const newAnswers = [...answers];
                        newAnswers[index] = e.target.value;
                        setAnswers(newAnswers);
                      }}
                    >
                      <option value="" disabled hidden>Choose</option>
                      {questionsAndOptions[index].options.map((option, optionIndex) => (
                        <option key={optionIndex} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <span className="answer1 incorrect1" data-correct={`correctAnswer${index + 1}`}></span>
                  </p>
                </form>
              ))}
            </div>


            <div className="choose-buttons">
              <button className="button" onClick={checkAndShowAnswers}>Check and show answers</button>
              <button className="button" onClick={resetForms}>Start again</button>
            </div>
          </div>
          <div className='drag-words-game block'>
            <MyFascinatingMorningGame />
          </div>

          <MyFascinatingMorningQuiz />

          <div>
            <MyFascinatingMorningTest />
          </div>
          <div>
            <MyFascinatingMorningTextDrag />
          </div>
          <div>
            <MyFascinatingMorningAudio />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFascinatingMorning;
