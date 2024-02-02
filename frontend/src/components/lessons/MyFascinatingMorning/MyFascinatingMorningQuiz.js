
import React, { useState } from 'react';
import './MyFascinatingMorning.css';

const MyFascinatingMorningQuiz = () => {
  const [answersShown, setAnswersShown] = useState(false);

  const checkAnswer = (wordId, correctAnswers) => {
    const userAnswer = document.getElementById(wordId)?.innerText.trim().toLowerCase();
    const wordElement = document.getElementById(wordId);

    if (!answersShown) {
      const lowerCaseCorrectAnswers = correctAnswers.map(answer => answer.toLowerCase());

      if (lowerCaseCorrectAnswers.includes(userAnswer)) {
        wordElement && wordElement.classList.remove("incorrect", "missing");
        wordElement && wordElement.classList.add("correct");
      } else if (userAnswer !== "") {
        wordElement && wordElement.classList.remove("correct");
        wordElement && wordElement.classList.add("incorrect");
      } else {
        wordElement && wordElement.classList.remove("correct", "incorrect");
        wordElement && wordElement.classList.add("missing");
      }
    }
  };

  const resetWord = (wordId) => {
    const wordElement = document.getElementById(wordId);
    if (wordElement) {
      wordElement.innerText = "";
      wordElement.classList.remove("correct", "incorrect", "missing");
    }
  };

  const resetForm = () => {
    setAnswersShown(false);

    for (let i = 1; i <= 33; i++) {
      resetWord(`word${i}-answer`);
    }

    document.querySelectorAll(".word").forEach((word) => {
      word.contentEditable = "true";
    });
  };

  const showCorrectAnswers = () => {
    setAnswersShown(true);

    const correctAnswers = [
      "practises", "contributes", "prepares", "arrives", "has already completed", "incorporates",
      "feels", "exercises", "improves", "am trying", "face", "am waiting", "are going to sip on",
      "have crafted", "infuses", "adopts", "feels", "cultivate", "shapes", "has not read",
      "has just finished", "think", "enjoy", "lies", "is trying", "gets", "has already unraveled",
      "have been actively cultivating", "have you been working", "is currently shaping",
      "are delving into", "have you ever experienced", "has stayed"
    ];

    for (let i = 1; i <= 33; i++) {
      const wordAnswer = document.getElementById(`word${i}-answer`);
      wordAnswer && (wordAnswer.innerText = correctAnswers[i - 1]);
    }

    document.querySelectorAll(".word").forEach((word) => {
      word.contentEditable = "false";
    });
  };

  const submitAnswers = () => {
    for (let i = 1; i <= 33; i++) {
      const correctAnswers = [
        "practises", "contributes", "prepares", "arrives", "has already completed", "incorporates",
        "feels", "exercises", "improves", "am trying", "face", "am waiting", "are going to sip on",
        "have crafted", "infuses", "adopts", "feels", "cultivate", "shapes", "has not read",
        "has just finished", "think", "enjoy", "lies", "is trying", "gets", "has already unraveled",
        "have been actively cultivating", "have you been working", "is currently shaping",
        "are delving into", "have you ever experienced", "has stayed"
      ];
      const wordId = `word${i}-answer`;
      checkAnswer(wordId, correctAnswers);
    }
  };

  return (
    <div className="quiz block" id="quiz">
      <div className="block-name dotted">
        <h3>Grammar Practice</h3>
        <h4>Write the correct form of the verbs in brackets and check your answers!</h4>
      </div>
      <div className='list'>
      <ul className="quiz-list">
        <li>1. Every morning, she <strong>(practise)</strong> <span id="word1-answer" contentEditable={true} className="word"></span> mindfulness, which <strong>(contribute)</strong> <span id="word2-answer" contentEditable={true} className="word"></span> to her overall well-being.</li>
        <li>2. Right now, they <strong>(prepare)</strong> <span id="word3-answer" contentEditable={true} className="word"></span> a nutritious breakfast to start the day on a positive note.</li>
        <li>3. By the time she <strong>(arrive)</strong> <span id="word4-answer" contentEditable={true} className="word"></span> at work, she <strong>(already/complete)</strong> <span id="word5-answer" contentEditable={true} className="word"></span> her morning planning.</li>
        <li>4. Recently, he <strong>(incorporate)</strong> <span id="word6-answer" contentEditable={true} className="word"></span> new self-care practices into his morning routine, and he <strong>(feel)</strong> <span id="word7-answer" contentEditable={true} className="word"></span> more energized.</li>
        <li>5. They <strong>(exercise)</strong> <span id="word8-answer" contentEditable={true} className="word"></span> for an hour every morning, and their physical health <strong>(improve)</strong> <span id="word9-answer" contentEditable={true} className="word"></span> significantly.</li>
        <li>6. I <strong>(try)</strong> <span id="word10-answer" contentEditable={true} className="word"></span> to establish a consistent morning routine, but I <strong>(face)</strong> <span id="word11-answer" contentEditable={true} className="word"></span> some challenges.</li>
        <li>7. I <strong>(wait)</strong> <span id="word12-answer" contentEditable={true} className="word"></span> for you all the morning! Where are you? <strong>(to be going/sip on)</strong> <span id="word13-answer" contentEditable={true} className="word"></span> this incredible moment without me?</li>
        <li>8. Recently, I <strong>(craft)</strong> <span id="word14-answer" contentEditable={true} className="word"></span> a morning routine that <strong>(infuse)</strong> <span id="word15-answer" contentEditable={true} className="word"></span> my day with a sense of purpose.</li>
        <li>9. Recently, he <strong>(adopt)</strong> <span id="word16-answer" contentEditable={true} className="word"></span> a healthy lifestyle and <strong>(feel)</strong> <span id="word17-answer" contentEditable={true} className="word"></span> more invigorated.</li>
        <li>10. For the past ten years they <strong>(cultivate) </strong><span id="word18-answer" contentEditable={true} className="word"></span> a fulfilling and intentional life.</li>
        <li>11. She <strong>(shape)</strong> <span id="word19-answer" contentEditable={true} className="word"></span> their lives by adopting healthier habits over the months.</li>
        <li>12. She <strong>(not/read)</strong> <span id="word20-answer" contentEditable={true} className="word"></span> the newspaper yet because she <strong>(just/finish)</strong> <span id="word21-answer" contentEditable={true} className="word"></span> her morning meditation.</li>
        <li>13. I <strong>(think)</strong> <span id="word22-answer" contentEditable={true} className="word"></span> about my goals while <strong>(enjoy) </strong><span id="word23-answer" contentEditable={true} className="word"></span> a quiet moment with a cup of tea.</li>
        <li>14. He <strong>(lie)</strong> <span id="word24-answer" contentEditable={true} className="word"></span> in bed, contemplating the fulfilling and intentional life he <strong>(try)</strong> <span id="word25-answer" contentEditable={true} className="word"></span> to foster.</li>
        <li>15. By the time she <strong>(get)</strong> <span id="word26-answer" contentEditable={true} className="word"></span> to work, she <strong>(already/unravel)</strong> <span id="word27-answer" contentEditable={true} className="word"></span> the layers of tasks that lie ahead.</li>
        <li>16. How long <strong>(you actively cultivate)</strong> <span id="word28-answer" contentEditable={true} className="word"></span> a positive mindset?</li>
        <li>17. <strong>(you work)</strong> <span id="word29-answer" contentEditable={true} className="word"></span> on the project since last month?</li>
        <li>18. What aspects of your life <strong>(currently shape) </strong><span id="word30-answer" contentEditable={true} className="word"></span> your future?</li>
        <li>19. What specific areas of your interests <strong>(delve into)</strong> <span id="word31-answer" contentEditable={true} className="word"></span> these days?</li>
        <li>20. <strong>(you ever experience)</strong> <span id="word32-answer" contentEditable={true} className="word"></span> something truly invigorating that <strong>(stay)</strong> <span id="word33-answer" contentEditable={true} className="word"></span> with you?</li>
      </ul>
      </div>
      <div className="choose-buttons">
        <button className="button" onClick={submitAnswers}>Check</button>
        <button className="button" onClick={resetForm}>Start again</button>
        <button className="button" onClick={showCorrectAnswers}>Show Answers</button>
      </div>
    </div>
  );
};

export default MyFascinatingMorningQuiz;
