import React, { useEffect } from 'react';

const VocabularyPractice = () => {
  const answers = [
    "forth", "so", "affecting", "fostering", "shapes", "stability", "contributing", "productivity", "preparing", "self",
    "care", "role", "progress", "well-being", "reflection", "healthier", "gratitude", "anchors", "purposeful", "challenges"
  ];

  useEffect(() => {
    shuffleWords();
  }, []);

  const allowDrop = (event) => {
    event.preventDefault();
  }

  const drag = (event) => {
    event.dataTransfer.setData("text", event.target.innerText);
  }

  const drop = (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const draggedElement = event.target;

    if (draggedElement.classList.contains("answer")) {
      if (!draggedElement.innerText.trim()) {
        draggedElement.innerText = data;
        draggedElement.classList.add("correct-quiz");
        const dragItem = findDragItemByText(data);
        if (dragItem) {
          dragItem.style.display = "none";
        }
      }
    } else {
      draggedElement.classList.add("incorrect-quiz");
    }
  }

  const resetQuizForms = () => {
    const answerSpans = document.querySelectorAll(".answer");
    answerSpans.forEach((span) => {
      const wordToRestore = span.innerText.trim();
      const dragItem = findDragItemByText(wordToRestore);
      if (dragItem) {
        dragItem.style.display = "block";
      }

      span.innerText = "";
      span.classList.remove("correct-quiz", "incorrect-quiz");
    });
    shuffleWords();
  }

  const showCorrectQuizAnswers = () => {
    const answerSpans = document.querySelectorAll(".answer");
    answers.forEach((answer, index) => {
      answerSpans[index].innerText = answer;
      answerSpans[index].classList.add("correct-quiz");
    });
  }

  const checkAndShowQuizAnswers = () => {
    const answerSpans = document.querySelectorAll(".answer");
    answerSpans.forEach((span, index) => {
      span.classList.remove("correct-quiz", "incorrect-quiz");
      const userAnswer = span.innerText.trim();
      const correctAnswer = answers[index];

      if (userAnswer === correctAnswer) {
        span.classList.add("correct-quiz");
      } else {
        span.classList.add("incorrect-quiz");
      }
    });
  }

  const shuffleWords = () => {
    const dragContainer = document.getElementById("drag-container");
    for (let i = dragContainer.children.length; i >= 0; i--) {
      dragContainer.appendChild(dragContainer.children[(Math.random() * i) | 0]);
    }
  }

  const findDragItemByText = (text) => {
    const dragItems = document.querySelectorAll('.drag-item');
    for (const item of dragItems) {
      if (item.innerText.trim() === text) {
        return item;
      }
    }
    return null;
  }

  return (
    <div className="drag-words block">
      <div className="block-name dotted">
        <h3>Vocabulary Practise.</h3>
        <h4>Complete the sentences by dragging words into the gaps. Do not drag words you have already put into the gap to another gaps. Just move the word from your list to the word that is already in the blank and previous word will return! Don't forget to check your answers!</h4>
      </div>
      <div id="quiz-container" className="quiz-container">
        <div className="question-container" id="question-container">
          <p>The dawn of a new day brings <span className="answer" data-index="1" onDrop={drop} onDragOver={allowDrop}></span> an opportunity to shape the hours ahead, and one of the most powerful ways to do <span className="answer" data-index="2" onDrop={drop} onDragOver={allowDrop}></span> is through the practice of morning rituals. These intentional and mindful routines hold a profound significance, <span className="answer" data-index="3" onDrop={drop} onDragOver={allowDrop}></span> various aspects of our well-being and setting the tone for the entire day. Morning rituals serve as a foundation for <span className="answer" data-index="4" onDrop={drop} onDragOver={allowDrop}></span> a positive mindset. By starting the day with purposeful activities, whether it be meditation, affirmations, or gratitude exercises, we set a positive tone that <span className="answer" data-index="5" onDrop={drop} onDragOver={allowDrop}></span> our outlook on challenges and opportunities.Establishing a consistent morning routine provides a sense of <span className="answer" data-index="6" onDrop={drop} onDragOver={allowDrop}></span> in an otherwise dynamic world. Knowing what to expect each morning fosters a feeling of control,<span className="answer" data-index="7" onDrop={drop} onDragOver={allowDrop}></span> to emotional balance and overall well-being.</p>
          <p>Morning rituals have the power to enhance <span className="answer" data-index="8" onDrop={drop} onDragOver={allowDrop}></span> and focus throughout the day. Whether it involves exercise, planning, or goal-setting, these intentional practices stimulate the mind and body, <span className="answer" data-index="9" onDrop={drop} onDragOver={allowDrop}></span> us for the tasks that lie ahead. The morning is an ideal time to prioritize <span className="answer" data-index="10" onDrop={drop} onDragOver={allowDrop}></span>-care. Whether through a nourishing breakfast, skincare routine, or a few moments of quiet reflection, morning rituals emphasize the importance of taking <span className="answer" data-index="11" onDrop={drop} onDragOver={allowDrop}></span> of oneself before attending to the demands of the external world.
          </p>
          <p>Morning rituals play a crucial<span className="answer" data-index="12" onDrop={drop} onDragOver={allowDrop}></span> in setting and achieving daily goals. By incorporating goal-setting activities into our morning routine, we create a roadmap for the day, fostering a sense of accomplishment and <span className="answer" data-index="13" onDrop={drop} onDragOver={allowDrop}></span>. Activities like morning exercise or a nutritious breakfast contribute to the physical <span className="answer" data-index="14" onDrop={drop} onDragOver={allowDrop}></span> of an individual. These rituals boost energy levels, metabolism, and overall health, laying the groundwork for a <span className="answer" data-index="15" onDrop={drop} onDragOver={allowDrop}></span> lifestyle.
          Morning rituals provide opportunities for mindfulness and <span className="answer" data-index="16" onDrop={drop} onDragOver={allowDrop}></span>. Whether it's savoring a cup of tea or practicing mindfulness meditation, these moments of reflection help cultivate <span className="answer" data-index="17" onDrop={drop} onDragOver={allowDrop}></span> for the present and set a positive tone for the day.
          </p>
          <p>Considered a pivotal foundation for the rest of the day, morning rituals act as <span className="answer" data-index="18" onDrop={drop} onDragOver={allowDrop}></span>. By intentionally crafting a positive and <span className="answer" data-index="19" onDrop={drop} onDragOver={allowDrop}></span> start, individuals create a strong foundation that influences their mindset and actions as they navigate daily <span className="answer" data-index="20" onDrop={drop} onDragOver={allowDrop}></span>.
          </p>
        </div>
        <div className="drag-container" id="drag-container">
          <div className="drag-item" draggable="true" onDragStart={drag}>forth</div>
          <div className="drag-item" draggable="true" onDragStart={drag}>so</div>
          <div className="drag-item" draggable="true" onDragStart={drag}>affecting</div>
          <div className="drag-item" draggable="true" onDragStart={drag}>fostering</div>
          <div className="drag-item" draggable="true" onDragStart={drag}>shapes</div>
          <div className="drag-item" draggable="true" onDragStart={drag}>stability</div>
          <div className="drag-item" draggable="true" onDragStart={drag}>contributing</div>
          <div className="drag-item" draggable="true" onDragStart={drag}>productivity</div>
          <div className="drag-item" draggable="true" onDragStart={drag}>preparing</div>
          <div className="drag-item" draggable="true" onDragStart={drag}>self</div>
          <div className="drag-item" draggable="true" onDragStart={drag}>care</div>
          <div className="drag-item" draggable="true" onDragStart={drag}>role</div>
          <div className="drag-item" draggable="true" onDragStart={drag}>progress</div>
          <div className="drag-item" draggable="true" onDragStart={drag}>well-being</div>
          <div className="drag-item" draggable="true" onDragStart={drag}>healthier</div>
          <div className="drag-item" draggable="true" onDragStart={drag}>reflection</div>
          <div className="drag-item" draggable="true" onDragStart={drag}>gratitude</div>
          <div className="drag-item" draggable="true" onDragStart={drag}>anchors</div>
          <div className="drag-item" draggable="true" onDragStart={drag}>purposeful</div>
          <div className="drag-item" draggable="true" onDragStart={drag}>challenges</div>
        </div>
      </div>
      <div className="choose-buttons">
        <button className="button" onClick={checkAndShowQuizAnswers}>Check Answers</button>
        <button className="button" onClick={resetQuizForms}>Reset Quiz</button>
        <button className="button" onClick={showCorrectQuizAnswers}>Show Correct Answers</button>
      </div>
    </div>
  );
};

export default VocabularyPractice;
