var header = $('.header'),
		scrollPrev = 0;

$(window).scroll(function() {
	var scrolled = $(window).scrollTop();
 
	if ( scrolled > 100 && scrolled > scrollPrev ) {
		header.addClass('out');
	} else {
		header.removeClass('out');
	}
	scrollPrev = scrolled;
});



const btn = document.getElementById('button');
const nav = document.getElementById('nav-ul');

btn.addEventListener('click', function () {
  nav.classList.toggle('toggle');
});



function askRandomQuestion() {
  var questionBlock = document.getElementById('questionBlock');
  var questions = questionBlock.getElementsByTagName('p');
  var randomIndex = Math.floor(Math.random() * questions.length);
  var randomQuestion = questions[randomIndex].textContent;
  var outputElement = document.getElementById('output');

  // Добавляем класс анимации из animate.css
  outputElement.classList.add('animate__animated', 'animate__fadeIn');

  // Выводим вопрос на страницу
  outputElement.innerHTML = '<p>' + randomQuestion + '</p>';

  // Убираем класс анимации после завершения анимации
  outputElement.addEventListener('animationend', function () {
    outputElement.classList.remove('animate__animated', 'animate__fadeIn');
  });
}

function checkAndShowAnswers() {
  //Пройти по всем формам и выполнить проверку
  for (var i = 1; i <= 15; i++) {
    var formId = "form" + i;
    var form = document.getElementById(formId);
    var selectedOption = form.querySelector("select").value;
    var correctAnswer = form
      .querySelector(".answer1")
      .getAttribute("data-correct");
    var answerSpan = form.querySelector(".answer1");

    if (selectedOption === correctAnswer) {
      answerSpan.textContent = "Gorgeous!";
      answerSpan.classList.remove("incorrect1");
      answerSpan.classList.add("correct1");
    } else {
      answerSpan.textContent =
        "You are wrong! Correct answer is " + correctAnswer + "!";
      answerSpan.classList.remove("correct1");
      answerSpan.classList.add("incorrect1");
    }
  }
}

function resetForms() {
  for (var i = 1; i <= 15; i++) {
    var formId = "form" + i;
    var form = document.getElementById(formId);
    form.querySelector("select").value = "";
    var answerSpan = form.querySelector(".answer1");
    answerSpan.textContent = "";
    answerSpan.classList.remove("correct1", "incorrect1");
  }
}

//quiz
const uniqueCode = "yourUniqueCode123";

let answersShown = false;

function submitAnswers() {
  checkAnswer("word1-answer", ["practises"]);
  checkAnswer("word2-answer", ["contributes"]);
  checkAnswer("word3-answer", ["are preparing"]);
  checkAnswer("word4-answer", ["arrives"]);
  checkAnswer("word5-answer", ["has already completed"]);
  checkAnswer("word6-answer", ["has incorporated"]);
  checkAnswer("word7-answer", ["feels"]);
  checkAnswer("word8-answer", ["exercise"]);
  checkAnswer("word9-answer", ["has improved"]);
  checkAnswer("word10-answer", ["try"]);
  checkAnswer("word11-answer", ["am facing"]);
  checkAnswer("word12-answer", ["have been waiting"]);
  checkAnswer("word13-answer", ["are you going to sip on"]);
  checkAnswer("word14-answer", ["have crafted"]);
  checkAnswer("word15-answer", ["infuses"]);
  checkAnswer("word16-answer", ["has adopted"]);
  checkAnswer("word17-answer", ["feels"]);
  checkAnswer("word18-answer", ["have been cultivating"]);
  checkAnswer("word19-answer", ["has been shaping"]);
  checkAnswer("word20-answer", ["has not read", "hasn't read"]);
  checkAnswer("word21-answer", ["has just finished"]);
  checkAnswer("word22-answer", ["am thinking"]);
  checkAnswer("word23-answer", ["enjoying"]);
  checkAnswer("word24-answer", ["lies"]);
  checkAnswer("word25-answer", ["is trying"]);
  checkAnswer("word26-answer", ["gets"]);
  checkAnswer("word27-answer", ["has already unraveled"]);
  checkAnswer("word28-answer", ["have you actively cultivating"]);
  checkAnswer("word29-answer", ["have you been working"]);
  checkAnswer("word30-answer", ["are currently shaping"]);
  checkAnswer("word31-answer", ["are you delving into"]);
  checkAnswer("word32-answer", [
    "Have you ever experienced",
    "have you ever experienced",
  ]);
  checkAnswer("word33-answer", ["has stayed"]);
}


function checkAnswer(wordId, correctAnswers) {
  const userAnswer = document.getElementById(wordId).innerText.trim().toLowerCase(); // Преобразование в нижний регистр
  const wordElement = document.getElementById(wordId);

  if (!answersShown) {
    const lowerCaseCorrectAnswers = correctAnswers.map(answer => answer.toLowerCase()); // Преобразование всех правильных ответов в нижний регистр

    if (lowerCaseCorrectAnswers.includes(userAnswer)) {
      wordElement.classList.remove("incorrect", "missing");
      wordElement.classList.add("correct");
    } else if (userAnswer !== "") {
      wordElement.classList.remove("correct");
      wordElement.classList.add("incorrect");
    } else {
      wordElement.classList.remove("correct", "incorrect");
      wordElement.classList.add("missing");
    }
  }
}


function resetForm() {
  answersShown = false;
  resetWord("word1-answer");
  resetWord("word2-answer");
  resetWord("word3-answer");
  resetWord("word4-answer");
  resetWord("word5-answer");
  resetWord("word6-answer");
  resetWord("word7-answer");
  resetWord("word8-answer");
  resetWord("word9-answer");
  resetWord("word10-answer");
  resetWord("word11-answer");
  resetWord("word12-answer");
  resetWord("word13-answer");
  resetWord("word14-answer");
  resetWord("word15-answer");
  resetWord("word16-answer");
  resetWord("word17-answer");
  resetWord("word18-answer");
  resetWord("word19-answer");
  resetWord("word20-answer");
  resetWord("word21-answer");
  resetWord("word22-answer");
  resetWord("word23-answer");
  resetWord("word24-answer");
  resetWord("word25-answer");
  resetWord("word26-answer");
  resetWord("word27-answer");
  resetWord("word28-answer");
  resetWord("word29-answer");
  resetWord("word30-answer");
  resetWord("word31-answer");
  resetWord("word32-answer");
  resetWord("word33-answer");

  // Reset other questions as needed

  // Enable editing after reset
  document.querySelectorAll(".word").forEach((word) => {
    word.contentEditable = "true";
  });
}

function resetWord(wordId) {
  const wordElement = document.getElementById(wordId);
  wordElement.innerText = "";
  wordElement.classList.remove("correct", "incorrect", "missing");
}

function showCorrectAnswers() {
  answersShown = true;
  document.getElementById("word1-answer").innerText = "practises";
  document.getElementById("word2-answer").innerText = "contributes";
  document.getElementById("word3-answer").innerText = "are preparing";
  document.getElementById("word4-answer").innerText = "arrives";
  document.getElementById("word5-answer").innerText = "has already completed";
  document.getElementById("word6-answer").innerText = "has incorporated";
  document.getElementById("word7-answer").innerText = "feels";
  document.getElementById("word8-answer").innerText = "exercise";
  document.getElementById("word9-answer").innerText = "has improved";
  document.getElementById("word10-answer").innerText = "try";
  document.getElementById("word11-answer").innerText = "am facing";
  document.getElementById("word12-answer").innerText = "have been waiting";
  document.getElementById("word13-answer").innerText =
    "are you going to sip on";
  document.getElementById("word14-answer").innerText = "have crafted";
  document.getElementById("word15-answer").innerText = "infuses";
  document.getElementById("word16-answer").innerText = "has adopted";
  document.getElementById("word17-answer").innerText = "feels";
  document.getElementById("word18-answer").innerText = "have been cultivating";
  document.getElementById("word19-answer").innerText = "has been shaping";
  document.getElementById("word20-answer").innerText =
    "has not read" + " hasn't read";
  document.getElementById("word21-answer").innerText = "has just finished";
  document.getElementById("word22-answer").innerText = "am thinking";
  document.getElementById("word23-answer").innerText = "enjoying";
  document.getElementById("word24-answer").innerText = "lies";
  document.getElementById("word25-answer").innerText = "is trying";
  document.getElementById("word26-answer").innerText = "get";
  document.getElementById("word27-answer").innerText = "has already unraveled";
  document.getElementById("word28-answer").innerText =
    "have you actively cultivating";
  document.getElementById("word29-answer").innerText = "have you been working";
  document.getElementById("word30-answer").innerText = "are currently shaping";
  document.getElementById("word31-answer").innerText = "are you delving into";
  document.getElementById("word32-answer").innerText = "have you ever experienced";
  document.getElementById("word33-answer").innerText = "has stayed";

  // Disable editing after showing answers
  document.querySelectorAll(".word").forEach((word) => {
    word.contentEditable = "false";
  });
}

/// peretaskivat

let sentences = [];
let words = [];

const initialSentences = [
  " ______ of furniture making and sewing, glassblowing",
  "Applause ______ ",
  "dashing ______ ",
  " ______ on their travels in early June",
  " ______ the conditions for her release"
];

const initialWords = [
  "craft",
  "burst forth",
  "back and forth",
  "set forth",
  "forth"
];

const sentenceContainer = document.getElementById('sentence-container-game');
const wordContainer = document.getElementById('word-container-game');

function allowDropGame(event) {
  event.preventDefault();
}

function dropGame(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData('text');
  const draggedElement = event.target;

  if (draggedElement.classList.contains('drag-item-game') && !isWordInWordContainer(data) && !isWordInSentence(data)) {
    draggedElement.innerHTML = '';
    draggedElement.classList.remove('incorrect-game');
    draggedElement.classList.add('checked-game');
    draggedElement.appendChild(createWordSpan(data));
    updateWordContainerVisibility();
  } else {
    draggedElement.classList.remove('incorrect-game');
  }
}

function dragGame(event) {
  event.dataTransfer.setData('text', event.target.innerText);
}

const dropGameToSentence = (event, dropWordIndex) => {
  event.preventDefault();
  const draggedElement = event.target;
  const word = event.dataTransfer.getData('text/plain');

  // Добавим проверку на пустоту drag-item-game
  const isPlaceholder = /^\s*_{2,}\s*$/.test(draggedElement.innerText);

  if (draggedElement.classList.contains('answer-game')) {
    if (isPlaceholder) {
      // Если пропуск пустой, то заменим его на переносимое слово
      draggedElement.innerHTML = word;
      draggedElement.classList.remove('incorrect-game');
      draggedElement.classList.add('checked-game');

      // Убедимся, что слово больше не находится в контейнере слов
      setWords((prevWords) => {
        const updatedWords = [...prevWords];
        const wordIndex = updatedWords.findIndex((wordObj) => wordObj.word.trim().toLowerCase() === word.trim().toLowerCase());

        if (wordIndex !== -1) {
          updatedWords.splice(wordIndex, 1);
          updateWordContainerVisibility(wordIndex);
        }

        return updatedWords;
      });
    } else {
      // Если пропуск не пустой, возвращаем слово обратно в контейнер слов
      setWords((prevWords) => {
        const updatedWords = [...prevWords];
        const wordIndex = updatedWords.findIndex((wordObj) => wordObj.word.trim().toLowerCase() === word.trim().toLowerCase());

        if (wordIndex !== -1) {
          const replacedWord = draggedElement.innerText.trim().toLowerCase();
          draggedElement.innerHTML = word;
          draggedElement.classList.remove('incorrect-game');
          draggedElement.classList.add('checked-game');

          updatedWords.splice(wordIndex, 1, { word: replacedWord, used: false });
          updateWordContainerVisibility(wordIndex);
        }

        return updatedWords;
      });

      draggedElement.style.minHeight = 'auto';
    }
  }
};


// Новая функция для поиска существующего элемента в блоке слов
function getExistingWordSpan(word) {
  const wordSpans = wordContainer.querySelectorAll('.drag-item-game');
  for (const wordSpan of wordSpans) {
    if (wordSpan.innerText.trim().toLowerCase() === word.trim().toLowerCase()) {
      return wordSpan.cloneNode(true); // Возвращаем клон существующего элемента
    }
  }
  return null;
}


// Новая функция для поиска существующего элемента в блоке слов



function isWordInWordContainer(word) {
  const wordSpans = wordContainer.querySelectorAll('.drag-item-game');
  for (const wordSpan of wordSpans) {
    if (wordSpan.innerText.trim().toLowerCase() === word.trim().toLowerCase()) {
      return true;
    }
  }
  return false;
}

function isWordInSentence(word) {
  const answerSpans = document.querySelectorAll('.answer-game');
  for (const answerSpan of answerSpans) {
    if (answerSpan.innerText.trim().toLowerCase() === word.trim().toLowerCase()) {
      return true;
    }
  }
  return false;
}

document.getElementById('customResetButton').addEventListener('click', customResetGame);
document.getElementById('showCorrectButton').addEventListener('click', showCorrectGameAnswers);
document.getElementById('checkButton').addEventListener('click', function () {
  setTimeout(checkAndShowGameAnswers, 100);
});

function customResetGame() {
  const answerSpans = document.querySelectorAll('.answer-game');
  answerSpans.forEach(span => {
    span.innerHTML = '';
    span.classList.remove('correct-game', 'incorrect-game', 'checked-game');
  });

  sentenceContainer.innerHTML = '';

  words = [...initialWords];

  displaySentences();
  displayWords();
  customShuffleWords();
  updateWordContainerVisibility();

  document.querySelectorAll('.drag-item-game').forEach(word => {
    word.classList.remove('checked-game', 'incorrect-game');
  });
}

function checkAndShowGameAnswers() {
  const answerSpans = document.querySelectorAll('.answer-game');

  answerSpans.forEach((span, index) => {
    span.classList.remove('correct-game', 'incorrect-game', 'checked-game');

    const userAnswer = span.innerText.trim().toLowerCase();
    const correctAnswer = initialWords[index].trim().toLowerCase();

    if (userAnswer === correctAnswer) {
      span.classList.add('correct-game');
    } else {
      span.classList.add('incorrect-game');
    }
  });
}

function showCorrectGameAnswers() {
  const answerSpans = document.querySelectorAll('.answer-game');
  answerSpans.forEach((span, index) => {
    span.innerHTML = initialWords[index];
    span.classList.add('correct-game');
  });
}

function initializeGame() {
  sentences = [...initialSentences];
  words = [...initialWords];

  displaySentences();
  displayWords();
  customShuffleWords();
  updateWordContainerVisibility();
}

function customShuffleWords() {
  const shuffledWords = [...initialWords];
  for (let i = shuffledWords.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledWords[i], shuffledWords[j]] = [shuffledWords[j], shuffledWords[i]];
  }

  words = shuffledWords;
  displayWords();
}

function displaySentences() {
  sentenceContainer.innerHTML = '';

  sentences.forEach((sentence, index) => {
    const sentenceSpan = document.createElement('span');
    sentenceSpan.innerHTML = sentence.replace(/_{2,}/g, (match) => `<span class="answer-game item" data-index="${index}" ondrop="dropGameToSentence(event)" ondragover="allowDropGame(event)" draggable="true" ondragstart="dragGame(event)">${match}</span>`);
    sentenceContainer.appendChild(sentenceSpan);
  });
}

function displayWords() {
  wordContainer.innerHTML = '';

  words.forEach((word, index) => {
    const wordSpan = createWordSpan(word, index);
    wordContainer.appendChild(wordSpan);
  });
}

function createWordSpan(word, index) {
  const wordSpan = document.createElement('span');
  wordSpan.innerText = word;
  wordSpan.classList.add('drag-item-game');
  wordSpan.setAttribute('draggable', true);
  wordSpan.setAttribute('ondragstart', 'dragGame(event)');
  wordSpan.setAttribute('data-index', index);
  return wordSpan;
}

function updateWordContainerVisibility() {
  const nonEmptyWordSpans = wordContainer.querySelectorAll('.drag-item-game');
  const isEmptyContainer = wordContainer.classList.contains('empty-container');

  console.log('nonEmptyWordSpans.length:', nonEmptyWordSpans.length);
  console.log('isEmptyContainer:', isEmptyContainer);

  if (nonEmptyWordSpans.length > 0) {
    if (isEmptyContainer) {
      wordContainer.classList.remove('empty-container');
      wordContainer.style.minHeight = 'auto';
    }
  } else {
    wordContainer.classList.add('empty-container');
    wordContainer.style.minHeight = '0';
  }
}

// Добавим вызов функции initializeGame() для инициализации при загрузке страницы
initializeGame();

//

const answers = [
  "forth", "so", "affecting", "fostering", "shapes", "stability", "contributing", "productivity", "preparing", "self",
  "care", "role", "progress", "well-being", "reflection", "healthier", "gratitude", "anchors", "purposeful", "challenges"
];

function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.innerText);
}

function drop(event) {
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

function resetQuizForms() {
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

function showCorrectQuizAnswers() {
  const answerSpans = document.querySelectorAll(".answer");
  answers.forEach((answer, index) => {
    answerSpans[index].innerText = answer;
    answerSpans[index].classList.add("correct-quiz");
  });
}

function checkAndShowQuizAnswers() {
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

function shuffleWords() {
  const dragContainer = document.getElementById("drag-container");
  for (let i = dragContainer.children.length; i >= 0; i--) {
    dragContainer.appendChild(dragContainer.children[(Math.random() * i) | 0]);
  }
}

function initializeQuiz() {
  shuffleWords();
}

window.onload = initializeQuiz;

// Функция для поиска элемента списка слов по тексту
function findDragItemByText(text) {
  const dragItems = document.querySelectorAll('.drag-item');
  for (const item of dragItems) {
    if (item.innerText.trim() === text) {
      return item;
    }
  }
  return null;
}

//test

var originalAnswers = {
  '1': ['hustle and bustle', 'mundane', 'gratitude', 'infusion'],
  '2': ['unravel', 'delving into', 'sip on', 'affect'],
  '3': ['fostering', 'intricacies', 'gratitude', 'tapestry'],
  '4': ['invigorating', 'meticulous', 'mundane', 'shape my life'],
  '5': ['fostering', 'lying ahead', 'cultivating', 'infusing'],
  '6': ['crafted', 'sacred', 'anchored', 'infused'],
  '7': ['fostering', 'contributing', 'cultivating', 'invigorating'],
  '8': ['tastes', 'savors', 'tasting', 'delicious'],
  '9': ['gratitude', 'savor', 'taste', 'intricacy'],
  '10': ['mundane', 'fatigue', 'cultivate', 'forth']
};

var correctAnswers = {
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

var selectedAnswers = {};

function testAnswers() {
  document.getElementById('results').innerHTML = '';

  document.querySelectorAll('.question').forEach(function (question, index) {
    var selectedAnswer = question.querySelector('.answer-dropdown').value;
    var questionNumber = index + 1;

    selectedAnswers[questionNumber] = selectedAnswer;

    var resultContainer = question.querySelector('.result');
    var dropdown = question.querySelector('.answer-dropdown');

    dropdown.classList.remove('correct-answer', 'incorrect-answer');

    if (selectedAnswer === correctAnswers[questionNumber.toString()]) {
      resultContainer.classList.remove('incorrect-answer');
      resultContainer.classList.add('correct-answer');
      dropdown.classList.add('correct-answer');
      resultContainer.innerHTML = 'Question ' + questionNumber + ': Correct!';
    } else {
      resultContainer.classList.remove('correct-answer');
      resultContainer.classList.add('incorrect-answer');
      dropdown.classList.add('incorrect-answer');
      resultContainer.innerHTML = 'Question ' + questionNumber + ': Incorrect. Correct answer: ' + originalAnswers[questionNumber.toString()][correctAnswers[questionNumber.toString()] - 1];
    }
  });
}

function resetTestAnswers() {
  document.querySelectorAll('.question').forEach(function (question, index) {
    var dropdown = question.querySelector('.answer-dropdown');
    var questionNumber = index + 1;

    var originalOptions = originalAnswers[questionNumber.toString()];
    dropdown.innerHTML = '';

    // Добавляем элемент "Choose" первым вариантом ответа
    var chooseOption = document.createElement('option');
    chooseOption.value = "";
    chooseOption.text = "Choose";
    chooseOption.hidden = true; // Скрываем элемент
    dropdown.add(chooseOption);

    originalOptions.forEach(function (option, index) {
      var optionElement = document.createElement('option');
      optionElement.value = (index + 1).toString();
      optionElement.text = option;
      dropdown.add(optionElement);
    });

    dropdown.value = "";

    var resultContainer = question.querySelector('.result');
    resultContainer.innerHTML = '';
    dropdown.classList.remove('correct-answer', 'incorrect-answer');
  });

  document.getElementById('results').innerHTML = '';
}

function showTestAnswers() {
  document.querySelectorAll('.question').forEach(function (question, index) {
    var questionNumber = index + 1;
    var correctAnswer = correctAnswers[questionNumber.toString()];
    var resultContainer = question.querySelector('.result');

    resultContainer.classList.remove('correct-answer', 'incorrect-answer');

    if (correctAnswer) {
      dropdown = question.querySelector('.answer-dropdown');
      dropdown.classList.add('correct-answer');
      resultContainer.classList.add('correct-answer');

      var questionText = question.querySelector('p').textContent;
      var questionWithAnswer = questionText.replace('________', '<span class="correct-answer">' + originalAnswers[questionNumber.toString()][correctAnswers[questionNumber.toString()] - 1] + '</span>');
      resultContainer.innerHTML = questionWithAnswer;
    } else {
      resultContainer.classList.add('incorrect-answer');
      resultContainer.innerHTML = 'Question ' + questionNumber + ': Correct answer not available';
    }
  });
}

document.getElementById('checkTestAnswers').addEventListener('click', testAnswers);
document.getElementById('resetTestAnswers').addEventListener('click', resetTestAnswers);
document.getElementById('showTestAnswers').addEventListener('click', showTestAnswers);

//koleso

// const questions = [
//   {
//     text: "your morning routine",
//     color: "hsl(197 30% 43%)",
//   },
//   {
//     text: "delves into smth",
//     color: "hsl(173 58% 39%)",
//   },
//   {
//     text: "setting the tone for a day",
//     color: "hsl(43 74% 66%)",
//   },
//   {
//     text: "invigorating activities",
//     color: "hsl(27 87% 67%)",
//   },
//   {
//     text: "what is 'craft'",
//     color: "hsl(12 76% 61%)",
//   },
//   {
//     text: "healthy lifestyle",
//     color: "hsl(350 60% 52%)",
//   },
//   {
//     text: "affect on your mood",
//     color: "hsl(91 43% 54%)",
//   },
//   {
//     text: "meaning of 'foster'",
//     color: "hsl(140 36% 74%)",
//   },
// ];

// const wheel = document.querySelector(".deal-wheel");
// const spinner = wheel.querySelector(".spinner");
// const trigger = wheel.querySelector(".btn-spin");
// const ticker = wheel.querySelector(".ticker");
// const questSlice = 360 / questions.length;
// const questOffset = Math.floor(180 / questions.length);
// const spinClass = "is-spinning";
// const selectedClass = "selected";
// const spinnerStyles = window.getComputedStyle(spinner);
// let tickerAnim;
// let rotation = 0;
// let currentSlice = 0;
// let questNodes;

// const createQuestNodes = () => {
//   questions.forEach(({ text, color, reaction }, i) => {
//     const rotation = questSlice * i * -1 - questOffset;

//     spinner.insertAdjacentHTML(
//       "beforeend",
//       `<li class="quest" data-reaction=${reaction} style="--rotate: ${rotation}deg">
//           <span class="text">${text}</span>
//         </li>`
//     );
//   });
// };

// const createConicGradient = () => {
//   spinner.setAttribute(
//     "style",
//     `background: conic-gradient(
//         from -90deg,
//         ${questions
//       .map(
//         ({ color }, i) =>
//           `${color} 0 ${(100 / questions.length) * (questions.length - i)}%`
//       )
//       .reverse()}
//       );`
//   );
// };

// const setupWheel = () => {
//   createConicGradient();
//   createQuestNodes();
//   questNodes = wheel.querySelectorAll(".quest");
// };

// const spinertia = (min, max) => {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// };

// const runTickerAnimation = () => {
//   const values = spinnerStyles.transform.split("(")[1].split(")")[0].split(",");
//   const a = values[0];
//   const b = values[1];
//   let rad = Math.atan2(b, a);

//   if (rad < 0) rad += 2 * Math.PI;

//   const angle = Math.round(rad * (180 / Math.PI));
//   const slice = Math.floor(angle / questSlice);

//   if (currentSlice !== slice) {
//     ticker.style.animation = "none";
//     setTimeout(() => (ticker.style.animation = null), 10);
//     currentSlice = slice;
//   }

//   tickerAnim = requestAnimationFrame(runTickerAnimation);
// };

// const selectQuest = () => {
//   const selected = Math.floor(rotation / questSlice);
//   questNodes[selected].classList.add(selectedClass);
// };

// trigger.addEventListener("click", () => {
//   trigger.disabled = true;
//   rotation = Math.floor(Math.random() * 360 + spinertia(2000, 5000));
//   questNodes.forEach((quest) => quest.classList.remove(selectedClass));
//   wheel.classList.add(spinClass);
//   spinner.style.setProperty("--rotate", rotation);
//   ticker.style.animation = "none";
//   runTickerAnimation();
// });

// spinner.addEventListener("transitionend", () => {
//   cancelAnimationFrame(tickerAnim);
//   trigger.disabled = false;
//   rotation %= 360;
//   selectQuest();
//   wheel.classList.remove(spinClass);
//   spinner.style.setProperty("--rotate", rotation);
// });

// setupWheel();

// var audioPlayer = document.getElementById('audioPlayer');
// var audioQuestionElement = document.getElementById('question');
// var audioResultsElement = document.getElementById('audioResults');
// var audioCheckAnswersBtn = document.getElementById('checkAnswersBtnAudio'); // Обновленное имя кнопки
// var audioQuestionObj = null;
// var audioAnswerChecked = false;

// var audioQuestions = [
//     // { showQuestionAtSecond: 14, blanks: ['blank1', 'blank2'], sentence:  "Like a carefully woven tapestry, a well-thought-out routine <span class='userInput' id='blank1' contenteditable='true'></span> sets the stage for productivity, stability, and <span class='userInput' id='blank2' contenteditable='true'></span> overall well-being.", answers: ["sets", "overall"] },
//     { showQuestionAtSecond: 14, blanks: ['blank1'], sentence: "The morning routine typically includes waking up, preparing for the day, enjoying a brief breakfast, and <span class='userInput' id='blank1' contenteditable='true'> </span> on news or social media to stay informed about current events.", answers: ["catching up"] }, 
//     { showQuestionAtSecond: 22, blanks: ['blank2'], sentence: "In the midst of the hustle and bustle of daily life, a morning routine <span class='userInput' id='blank2' contenteditable='true'> </span> an anchor, providing a sense of purpose and direction.", answers: ["serves as"] }
// ];

// function audioDisplayQuestion(question) {
//     audioQuestionElement.innerHTML = '';

//     audioQuestionElement.innerHTML = question.sentence;

//     // Убираем класс стиля для всех полей ввода перед новым вопросом
//     audioQuestions.forEach(function (q) {
//         q.blanks.forEach(function (blank) {
//             document.getElementById(blank).classList.remove('audio-incorrect', 'audio-correct'); // Обновленные классы
//         });
//     });
// }

// function audioCheckAnswers(question) {
//     var correct = true;

//     question.blanks.forEach(function (blank) {
//         var userInput = document.getElementById(blank).textContent.trim();
//         var answerIndex = question.blanks.indexOf(blank);
//         var correctAnswer = question.answers[answerIndex];

//         var blankElement = document.getElementById(blank);

//         if (userInput.toLowerCase() !== correctAnswer.toLowerCase()) {
//             correct = false;
//             blankElement.classList.add('audio-incorrect'); // Обновленный класс
//         } else {
//             blankElement.classList.add('audio-correct'); // Обновленный класс
//         }
//     });

//     audioDisplayResults(correct ? 'Gorgeous!' : 'You are wrong! Correct answer is: ' + question.answers.join(', '), correct ? 'audio-correct' : 'audio-incorrect'); // Обновленные классы

//     // После трех секунд скрываем вопрос и воспроизводим аудио с текущего момента
//     setTimeout(function () {
//         audioQuestionElement.innerHTML = '';
//         audioResultsElement.innerHTML = '';
//         audioAnswerChecked = false; // Сбрасываем флаг проверки ответов

//         // Воспроизводим аудио с задержкой 1 секунда
//         audioPlayer.currentTime = audioPlayer.currentTime + 1;
//         audioPlayer.play();
//     }, 3000);
// }

// function audioDisplayResults(message, resultClass) {
//     audioResultsElement.innerHTML = '';

//     var messageElement = document.createElement('p');
//     messageElement.textContent = message;
//     messageElement.classList.add(resultClass);
//     audioResultsElement.appendChild(messageElement);
// }

// audioPlayer.addEventListener('timeupdate', function () {
//     var currentTime = Math.floor(audioPlayer.currentTime);

//     // Проверяем, есть ли вопрос на текущей секунде
//     audioQuestionObj = audioQuestions.find(q => q.showQuestionAtSecond === currentTime);

//     // Если есть вопрос и не была ли уже проведена проверка ответов
//     if (audioQuestionObj && !audioAnswerChecked) {
//         audioPlayer.pause(); // Останавливаем аудио перед выводом вопроса
//         audioDisplayQuestion(audioQuestionObj);
//         audioAnswerChecked = true; // Устанавливаем флаг проверки ответов
//     } else if (!audioQuestionObj && currentTime >= audioPlayer.duration) {
//         audioPlayer.currentTime = 0; // Перематываем аудио в начало после завершения воспроизведения
//         audioPlayer.play();
//     }
// });

// // Обработчик события ввода для динамического изменения размера инпута
// document.addEventListener('input', function (event) {
//     if (event.target.classList.contains('userInput')) {
//         autoExpand(event.target);
//     }
// });

// function audioAutoExpand(inputField) {
//     inputField.style.width = 'auto';
//     inputField.style.width = (inputField.scrollWidth + 70) + 'px'; // Добавляем небольшой отступ
// }

// // Обработчик события клика для кнопки проверки ответов
// audioCheckAnswersBtn.addEventListener('click', function () {
//     if (!audioAnswerChecked && audioQuestionObj) {
//         audioCheckAnswers(audioQuestionObj);
//     }
// });

// // Пример использования
// audioPlayer.src = 'audio/audio.mp3';

var audioPlayer = document.getElementById('audioPlayer');
var audioQuestionElement = document.getElementById('question');
var audioResultsElement = document.getElementById('audioResults');

if (!audioResultsElement) {
  console.error('Element with id "audioResults" not found.');
}

var checkAnswersBtnAudio = document.getElementById('checkAnswersBtnAudio');
var audioQuestionObj = null;
var audioAnswerChecked = false;

var audioQuestions = [
  { showQuestionAtSecond: 14, blanks: ['blank1'], sentence: "The morning routine typically includes waking up, preparing for the day, enjoying a brief breakfast, and <span class='userInput' id='blank1' contenteditable='true'> </span> on news or social media to stay informed about current events.", answers: ["catching up"] },
  { showQuestionAtSecond: 22, blanks: ['blank2'], sentence: "In the midst of the hustle and bustle of daily life, a morning routine <span class='userInput' id='blank2' contenteditable='true'> </span> an anchor, providing a sense of purpose and direction.", answers: ["serves as"] }
];

function audioDisplayQuestion(question) {
  audioQuestionElement.innerHTML = question.sentence;

  question.blanks.forEach(function (blank) {
    var blankElement = document.getElementById(blank);

    if (blankElement) {
      blankElement.classList.remove('audio-incorrect', 'audio-correct');
    }
  });
}

function audioCheckAnswers(question) {
  console.log('Inside audioCheckAnswers - Before check:', 'audioAnswerChecked:', audioAnswerChecked);

  var correct = true;
  var correctAnswers = [];

  question.blanks.forEach(function (blank, index) {
    var userInput = document.getElementById(blank).textContent.trim();
    var currentCorrectAnswer = question.answers[index];

    var blankElement = document.getElementById(blank);

    if (userInput.toLowerCase() !== currentCorrectAnswer.toLowerCase()) {
      correct = false;
      blankElement.classList.add('audio-incorrect');
      if (!correctAnswers.includes(currentCorrectAnswer)) {
        correctAnswers.push(currentCorrectAnswer);
      }
    } else {
      blankElement.classList.add('audio-correct');
    }
  });

  var correctAnswerMessage = correctAnswers.join(', ');

  audioDisplayResults(correct ? 'Gorgeous!' : 'You are wrong!', correct ? 'audio-correct' : 'audio-incorrect', correctAnswerMessage);

  console.log('Inside audioCheckAnswers - After check:', 'audioAnswerChecked:', audioAnswerChecked);

  setTimeout(function () {
    audioQuestionElement.innerHTML = '';
    audioResultsElement.innerHTML = '';
    audioAnswerChecked = false; // Добавлен сброс флага
    audioPlayer.currentTime = audioPlayer.currentTime + 1;
    audioPlayer.play();
  }, 3000);
}


function audioDisplayResults(message, resultClass, correctAnswer) {
  audioResultsElement.innerHTML = '';

  var messageElement = document.createElement('p');
  messageElement.textContent = message;

  if (!correctAnswer) {
    messageElement.classList.add(resultClass);
  } else {
    var correctAnswerElement = document.createElement('span');
    correctAnswerElement.textContent = ' ' + correctAnswer;
    correctAnswerElement.classList.add('audio-correct-answer');

    messageElement.appendChild(correctAnswerElement);
    messageElement.classList.add(resultClass);
  }

  audioResultsElement.appendChild(messageElement);
}

audioPlayer.addEventListener('timeupdate', function () {
  var currentTime = Math.floor(audioPlayer.currentTime);

  audioQuestionObj = audioQuestions.find(q => q.showQuestionAtSecond === currentTime);

  if (audioQuestionObj && !audioAnswerChecked) {
    audioPlayer.pause();
    audioDisplayQuestion(audioQuestionObj);
    audioAnswerChecked = true;
  } else if (!audioQuestionObj && currentTime >= audioPlayer.duration) {
    audioPlayer.currentTime = 0;
    audioPlayer.play();
  }
});

document.addEventListener('input', function (event) {
  if (event.target.classList.contains('userInput')) {
    audioAutoExpand(event.target);
  }
});

function audioAutoExpand(inputField) {
  inputField.style.width = 'auto';
  inputField.style.width = (inputField.scrollWidth + 10) + 'px';
}

checkAnswersBtnAudio.addEventListener('click', function () {
  console.log('Before check:', 'audioAnswerChecked:', audioAnswerChecked, 'audioQuestionObj:', audioQuestionObj);

  audioAnswerChecked = false; // Добавлен сброс флага перед вызовом audioCheckAnswers

  if (audioAnswerChecked) {
    console.log('After check:', 'audioAnswerChecked:', audioAnswerChecked, 'audioQuestionObj:', audioQuestionObj);
    console.error('Check Answers failed: audioAnswerChecked is true');
    return;
  }

  if (!audioQuestionObj) {
    console.log('After check:', 'audioAnswerChecked:', audioAnswerChecked, 'audioQuestionObj:', audioQuestionObj);
    console.error('Check Answers failed: audioQuestionObj is null');
    return;
  }

  audioCheckAnswers(audioQuestionObj);
});





audioPlayer.src = 'audio/audio.mp3';

//audio vernyj
// var audioPlayer = document.getElementById('audioPlayer');
// var audioQuestionElement = document.getElementById('question');
// var audioResultsElement = document.getElementById('audioResults');
// var audioCheckAnswersBtn = document.getElementById('checkAnswersBtnAudio'); // Обновленное имя кнопки
// var audioQuestionObj = null;
// var audioAnswerChecked = false;

// var audioQuestions = [
//     // { showQuestionAtSecond: 14, blanks: ['blank1', 'blank2'], sentence:  "Like a carefully woven tapestry, a well-thought-out routine <span class='userInput' id='blank1' contenteditable='true'></span> sets the stage for productivity, stability, and <span class='userInput' id='blank2' contenteditable='true'></span> overall well-being.", answers: ["sets", "overall"] },
//     { showQuestionAtSecond: 14, blanks: ['blank1'], sentence: "The morning routine typically includes waking up, preparing for the day, enjoying a brief breakfast, and <span class='userInput' id='blank1' contenteditable='true'> </span> on news or social media to stay informed about current events.", answers: ["catching up"] }, 
//     { showQuestionAtSecond: 22, blanks: ['blank2'], sentence: "In the midst of the hustle and bustle of daily life, a morning routine <span class='userInput' id='blank2' contenteditable='true'> </span> an anchor, providing a sense of purpose and direction.", answers: ["serves as"] }
// ];

// function audioDisplayQuestion(question) {
//     audioQuestionElement.innerHTML = '';

//     audioQuestionElement.innerHTML = question.sentence;

//     // Убираем класс стиля для всех полей ввода перед новым вопросом
//     audioQuestions.forEach(function (q) {
//         q.blanks.forEach(function (blank) {
//             document.getElementById(blank).classList.remove('incorrect', 'correct');
//         });
//     });
// }

// function audioCheckAnswers(question) {
//     var correct = true;

//     question.blanks.forEach(function (blank) {
//         var userInput = document.getElementById(blank).textContent.trim();
//         var answerIndex = question.blanks.indexOf(blank);
//         var correctAnswer = question.answers[answerIndex];

//         var blankElement = document.getElementById(blank);

//         if (userInput.toLowerCase() !== correctAnswer.toLowerCase()) {
//             correct = false;
//             blankElement.classList.add('incorrect');
//         } else {
//             blankElement.classList.add('correct');
//         }
//     });

//     audioDisplayResults(correct ? 'Gorgeous!' : 'You are wrong! Correct answer is: ' + question.answers.join(', '), correct ? 'correct' : 'incorrect');

//     // После трех секунд скрываем вопрос и воспроизводим аудио с текущего момента
//     setTimeout(function () {
//         audioQuestionElement.innerHTML = '';
//         audioResultsElement.innerHTML = '';
//         audioAnswerChecked = false; // Сбрасываем флаг проверки ответов

//         // Воспроизводим аудио с задержкой 1 секунда
//         audioPlayer.currentTime = audioPlayer.currentTime + 1;
//         audioPlayer.play();
//     }, 3000);
// }

// function audioDisplayResults(message, resultClass) {
//     audioResultsElement.innerHTML = '';

//     var messageElement = document.createElement('p');
//     messageElement.textContent = message;
//     messageElement.classList.add(resultClass);
//     audioResultsElement.appendChild(messageElement);
// }

// audioPlayer.addEventListener('timeupdate', function () {
//     var currentTime = Math.floor(audioPlayer.currentTime);

//     // Проверяем, есть ли вопрос на текущей секунде
//     audioQuestionObj = audioQuestions.find(q => q.showQuestionAtSecond === currentTime);

//     // Если есть вопрос и не была ли уже проведена проверка ответов
//     if (audioQuestionObj && !audioAnswerChecked) {
//         audioPlayer.pause(); // Останавливаем аудио перед выводом вопроса
//         audioDisplayQuestion(audioQuestionObj);
//         audioAnswerChecked = true; // Устанавливаем флаг проверки ответов
//     } else if (!audioQuestionObj && currentTime >= audioPlayer.duration) {
//         audioPlayer.currentTime = 0; // Перематываем аудио в начало после завершения воспроизведения
//         audioPlayer.play();
//     }
// });

// // Обработчик события ввода для динамического изменения размера инпута
// document.addEventListener('input', function (event) {
//     if (event.target.classList.contains('userInput')) {
//         autoExpand(event.target);
//     }
// });

// function audioAutoExpand(inputField) {
//     inputField.style.width = 'auto';
//     inputField.style.width = (inputField.scrollWidth + 10) + 'px'; // Добавляем небольшой отступ
// }

// // Обработчик события клика для кнопки проверки ответов
// audioCheckAnswersBtn.addEventListener('click', function () {
//     if (!audioAnswerChecked && audioQuestionObj) {
//         audioCheckAnswers(audioQuestionObj);
//     }
// });

// // Пример использования
// audioPlayer.src = 'audio/audio.mp3';


//audio explanation 

// function toggleExplanation(explanationId) {
//   var explanationDiv = document.getElementById(explanationId);
//   if (explanationDiv.style.display === "none") {
//     explanationDiv.style.display = "block";
//   } else {
//     explanationDiv.style.display = "none";
//   }
// }


// //субтитры
// function readSubtitles(subtitleFile, audioElement, explanationElement) {
//   // Загружаем субтитры с использованием subtitles-parser
//   fetch(subtitleFile)
//     .then(response => response.text())
//     .then(subtitleText => {
//       // Парсим субтитры
//       const subtitles = Subtitles.parse(subtitleText, 'srt');

//       // Воспроизводим аудио с субтитрами
//       const sound = new Howl({
//         src: [audioElement.src],
//         html5: true,
//         onplay: () => {
//           // Выводим субтитры в соответствующий элемент
//           subtitles.forEach(subtitle => {
//             setTimeout(() => {
//               explanationElement.innerHTML = subtitle.text;
//             }, subtitle.startTime * 1000);
//           });
//         }
//       });

//       // Запускаем воспроизведение
//       sound.play();
//     })
//     .catch(error => console.error('Ошибка при загрузке субтитров:', error));
// }

// // Функция для обработки клика по кнопке "Help"
// function toggleExplanation(explanationId, subtitleFile, audioElement, explanationElement) {
//   const explanation = document.getElementById(explanationId);
//   if (explanation.style.display === 'none') {
//     // Если пояснение скрыто, покажем его и начнем воспроизведение субтитров
//     explanation.style.display = 'block';
//     readSubtitles(subtitleFile, audioElement, explanationElement);
//   } else {
//     // Если пояснение отображается, скроем его
//     explanation.style.display = 'none';
//   }
// }

