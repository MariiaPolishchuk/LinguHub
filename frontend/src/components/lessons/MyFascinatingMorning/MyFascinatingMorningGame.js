


// import React, { useState, useEffect, useRef } from 'react';
// import './MyFascinatingMorning.css';

// const MyFascinatingMorningGame = () => {
//   const [isWordContainerEmpty, setIsWordContainerEmpty] = useState(true);
//   const sentenceContainerRef = useRef(null);
//   const wordContainerRef = useRef(null);

//   const initialSentences = [
//     " ______ of furniture making and sewing, glassblowing",
//     "Applause ______ ",
//     "dashing ______ ",
//     " ______ on their travels in early June",
//     " ______ the conditions for her release"
//   ];

//   const initialWords = [
//     { word: "craft", used: false },
//     { word: "burst forth", used: false },
//     { word: "back and forth", used: false },
//     { word: "set forth", used: false },
//     { word: "forth", used: false }
//   ];

//   const [sentences, setSentences] = useState(initialSentences);
//   const [words, setWords] = useState(initialWords);
//   const [visibleWords, setVisibleWords] = useState([...initialWords].map(() => true));
//   const initialCorrectAnswers = [...initialWords];

//   useEffect(() => {
//     customResetGame();
//   }, []); // Effect runs once after mount

//   useEffect(() => {
//     setIsWordContainerEmpty(words.every(wordObj => wordObj.used));
//   }, [words]);

//   const dragGame = (event, word, wordIndex) => {
//     event.dataTransfer.setData('text/plain', word);
//     event.dataTransfer.setData('word-index', wordIndex);
//   };

//   const allowDropGame = (event) => {
//     event.preventDefault();
//     const draggedElement = event.target;

//     if (
//       !draggedElement.classList.contains('drag-item-game') &&
//       !draggedElement.classList.contains('answer-game')
//     ) {
//       if (wordContainerRef.current.contains(draggedElement)) {
//         updateWordContainerVisibility(words);
//       } else if (sentenceContainerRef.current.contains(draggedElement)) {
//         // Your existing logic for drop on the sentence container
//       }
//     }
//   };

//   const dropGame = (event) => {
//     event.preventDefault();
//     const draggedElement = event.target;

//     if (draggedElement.classList.contains('drag-item-game') && !isWordInWordContainer(draggedElement.innerText) && !isWordInSentence(draggedElement.innerText)) {
//       draggedElement.textContent = '';
//       draggedElement.classList.remove('incorrect-game');
//       draggedElement.classList.add('checked-game');

//       setWords((prevWords) => {
//         const updatedWords = [...prevWords];
//         const wordIndex = Number(draggedElement.getAttribute('data-index'));
//         updatedWords[wordIndex].used = true;

//         // Фильтруем массив слов, чтобы скрыть использованные
//         const remainingWords = updatedWords.filter((wordObj, index) => !wordObj.used && visibleWords[index]);

//         // Обновляем контейнер слов с использованием параметра remainingWords и wordIndex
//         updateWordContainerVisibility(remainingWords, wordIndex);

//         return updatedWords;
//       });
//     } else {
//       draggedElement.classList.remove('incorrect-game');
//     }
//   };

//   const isWordInWordContainer = (word) => {
//     const wordSpans = wordContainerRef.current.querySelectorAll('.drag-item-game');
//     return Array.from(wordSpans).some((wordSpan) => wordSpan.innerText.trim().toLowerCase() === word.trim().toLowerCase());
//   };

//   const isWordInSentence = (word) => {
//     const answerSpans = sentenceContainerRef.current.querySelectorAll('.answer-game');
//     return Array.from(answerSpans).some((answerSpan) => answerSpan.textContent.trim().toLowerCase() === word.trim().toLowerCase());
//   };

//   const customResetGame = () => {
//     const shuffledWords = [...initialWords].sort(() => Math.random() - 0.5);

//     setWords(shuffledWords);
//     setVisibleWords([...shuffledWords].map(() => true));
//     displayWords(shuffledWords);

//     setSentences(initialSentences);
//     displaySentences();

//     sentenceContainerRef.current.querySelectorAll('.answer-game').forEach((span) => {
//       span.innerHTML = '';
//       span.classList.remove('correct-game', 'incorrect-game', 'checked-game');
//     });

//     wordContainerRef.current.classList.remove('empty-container');
//     wordContainerRef.current.style.minHeight = 'auto';
//   };

//   const checkGameAnswers = () => {
//     const answerSpans = sentenceContainerRef.current.querySelectorAll('.answer-game');
  
//     answerSpans.forEach((span, index) => {
//       span.classList.remove('correct-game', 'incorrect-game');
  
//       const userAnswer = span.textContent.trim().toLowerCase();
//       const correctAnswer = words[index].word.trim().toLowerCase();
  
//       if (userAnswer === correctAnswer) {
//         span.classList.add('correct-game');
//       } else {
//         span.classList.add('incorrect-game');
//       }
//     });
//   };

//   const showCorrectGameAnswers = () => {
//     const answerSpans = sentenceContainerRef.current.querySelectorAll('.answer-game');
//     answerSpans.forEach((span, index) => {
//       span.textContent = initialCorrectAnswers[index].word;
//       span.classList.add('correct-game');
//     });
//   };

//   const displaySentences = () => {
//     sentenceContainerRef.current.innerHTML = '';

//     sentences.forEach((sentence, index) => {
//       const sentenceDiv = document.createElement('div');
//       sentenceDiv.classList.add('sentence');

//       const words = sentence.split(' ');
//       words.forEach((word, wordIndex) => {
//         if (word === '______') {
//           const wordSpan = document.createElement('span');
//           wordSpan.classList.add('answer-game', 'item');
//           wordSpan.setAttribute('data-index', wordIndex);
//           wordSpan.setAttribute('draggable', true);
//           wordSpan.addEventListener('dragstart', (event) => dragGame(event, words[wordIndex].word, wordIndex));
//           wordSpan.addEventListener('dragover', allowDropGame);
//           wordSpan.addEventListener('drop', (event) => dropGameToSentence(event, wordIndex));

//           wordSpan.style.minWidth = '40px';
//           sentenceDiv.appendChild(wordSpan);
//         } else {
//           const textSpan = document.createElement('span');
//           textSpan.textContent = word;
//           sentenceDiv.appendChild(textSpan);
//         }
//       });

//       sentenceContainerRef.current.appendChild(sentenceDiv);
//     });
//   };

//   const displayWords = (customWords) => {
//     const displayWordsArray = customWords || words.filter((word) => !word.used && visibleWords[word.index]);
//     const newWordContainer = document.createElement('div');

//     displayWordsArray.forEach((wordObj, index) => {
//       const wordSpan = createWordSpan(wordObj, index);
//       if (wordSpan) {
//         newWordContainer.appendChild(wordSpan);
//       }
//     });

//     wordContainerRef.current.innerHTML = '';
//     wordContainerRef.current.appendChild(newWordContainer);
//   };

//   const createWordSpan = (wordObj, index) => {
//     if (wordObj.used || !visibleWords[index]) {
//       return null;
//     }

//     const wordSpan = document.createElement('span');
//     wordSpan.innerText = wordObj.word;
//     wordSpan.classList.add('drag-item-game');
//     wordSpan.setAttribute('draggable', true);
//     wordSpan.setAttribute('data-index', index);

//     wordSpan.addEventListener('dragstart', (event) => {
//       dragGame(event, wordObj.word, index);
//     });

//     return wordSpan;
//   };

//   const dropGameToSentence = (event, wordIndex) => {
//     event.preventDefault();
//     const draggedElement = event.target;
//     const word = event.dataTransfer.getData('text/plain');
  
//     if (draggedElement.classList.contains('answer-game')) {
//       const currentWord = draggedElement.textContent.trim().toLowerCase();
  
//       setWords((prevWords) => {
//         const updatedWords = [...prevWords];
//         const replacedWordIndex = updatedWords.findIndex((wordObj) => wordObj.word.trim().toLowerCase() === currentWord);
//         const targetWordIndex = updatedWords.findIndex((wordObj) => wordObj.word.trim().toLowerCase() === word.trim().toLowerCase());
  
//         if (replacedWordIndex !== -1 && targetWordIndex !== -1) {
//           updatedWords[replacedWordIndex].used = false;
//           updatedWords[targetWordIndex].used = true;
//           updateWordContainerVisibility(updatedWords, replacedWordIndex);
//           updateWordContainerVisibility(updatedWords, targetWordIndex);
//         }
  
//         return updatedWords;
//       });
  
//       draggedElement.textContent = word;
//       draggedElement.classList.remove('checked-game');
  
//       const wordSpans = wordContainerRef.current.querySelectorAll('.drag-item-game');
//       const wordIndexInContainer = Array.from(wordSpans).findIndex((span) => span.innerText.trim().toLowerCase() === word.trim().toLowerCase());
//       if (wordIndexInContainer !== -1) {
//         wordSpans[wordIndexInContainer].style.display = 'none';
//       }
//     }
//   };
  

//   const updateWordContainerVisibility = (updatedWords, wordIndex) => {
//     const remainingWords = updatedWords.filter((wordObj) => !wordObj.used);
//     displayWords(remainingWords);
  
//     // Clear all elements in the word container
//     const wordSpans = wordContainerRef.current.querySelectorAll('.drag-item-game');
//     wordSpans.forEach((span) => {
//       span.style.display = 'none';
//     });
  
//     // Display only the remaining words
//     remainingWords.forEach((wordObj, index) => {
//       if (wordSpans[index]) {
//         wordSpans[index].style.display = 'inline-block';
//       }
//     });
  
//     const isEmptyContainer = remainingWords.length === 0;
//     wordContainerRef.current.classList.toggle('empty-container', isEmptyContainer);
//     wordContainerRef.current.style.minHeight = isEmptyContainer ? '0' : 'auto';
//   };
  
//   return (
//     <div className="drag-game-cont">
//       <div className="sentence-container-game item" ref={sentenceContainerRef} onDragOver={allowDropGame} onDrop={dropGameToSentence}></div>
//       <div className={`drag-container-game item ${isWordContainerEmpty ? 'empty' : ''}`} ref={wordContainerRef} onDragOver={allowDropGame} onDrop={dropGame}></div>
//       <div className="choose-buttons">
//         <button className="button" onClick={checkGameAnswers}>Check Answers</button>
//         <button className="button" onClick={customResetGame}>Reset Game</button>
//         <button className="button" onClick={showCorrectGameAnswers}>Show Correct Answers</button>
//       </div>
//     </div>
//   );
// };

// export default MyFascinatingMorningGame;









// import React, { useState, useEffect, useRef } from 'react';

// import { DndProvider, useDrag, useDrop } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';
// import './MyFascinatingMorning.css';

// const Word = ({ word, index, isUsed, isVisible, onDrag }) => {
//   const [, drag] = useDrag({
//     type: 'WORD',
//     item: { word, index },
//   });

//   return (
//     <span
//       ref={(element) => {
//         if (element) {
//           element.addEventListener('dragstart', (event) => onDrag(event, word, index));
//         }
//         drag(element);
//       }}
//       className={`drag-item-game ${isUsed || !isVisible ? 'hidden' : ''}`}
//     >
//       {word}
//     </span>
//   );
// };

// const Answer = ({ index, onDrop }) => {
//   const [{ isOver }, drop] = useDrop({
//     accept: 'WORD',
//     drop: (item) => onDrop(item.index),
//     collect: (monitor) => ({
//       isOver: !!monitor.isOver(),
//     }),
//   });

//   const allowDropGameToSentence = (event) => {
//     event.preventDefault();
//   };

//   return (
//     <span
//       ref={drop}
//       onDragOver={allowDropGameToSentence}
//       className={`answer-game ${isOver ? 'drag-over' : ''}`}
//     >
//       ______
//     </span>
//   );
// };

// const MyFascinatingMorningGame = () => {
//   const [isWordContainerEmpty, setIsWordContainerEmpty] = useState(true);
//   const sentenceContainerRef = useRef(null);
//   const wordContainerRef = useRef(null);
//   const initialSentences = [
//     " ______ of furniture making and sewing, glassblowing",
//     "Applause ______ ",
//     "dashing ______ ",
//     " ______ on their travels in early June",
//     " ______ the conditions for her release"
//   ];

//   const initialWords = [
//     { word: "craft", used: false },
//     { word: "burst forth", used: false },
//     { word: "back and forth", used: false },
//     { word: "set forth", used: false },
//     { word: "forth", used: false }
//   ];

//   const [sentences, setSentences] = useState(initialSentences);
//   const [words, setWords] = useState(initialWords);
//   const [visibleWords, setVisibleWords] = useState([...initialWords].map(() => true));
//   const initialCorrectAnswers = [...initialWords];

//   useEffect(() => {
//     sentenceContainerRef.current = document.getElementById('sentenceContainer');
//     wordContainerRef.current = document.getElementById('wordContainer');

//     if (sentenceContainerRef.current && wordContainerRef.current) {
//       customResetGame();
//     }
//   }, []);

//   useEffect(() => {
//     setIsWordContainerEmpty(words.every(wordObj => wordObj.used));
//   }, [words]);

//   const dragGame = (event, word, wordIndex) => {
//     event.dataTransfer.setData('text/plain', word);
//     event.dataTransfer.setData('word-index', wordIndex);
//   };

//   const allowDropGameToSentence = (event) => {
//     event.preventDefault();
//   };

//   const dropGameToSentence = (event, wordIndex) => {
//     event.preventDefault();
//     const draggedElement = event.target;
//     const word = event.dataTransfer.getData('text/plain');

//     if (draggedElement.classList.contains('answer-game')) {
//       const currentWord = draggedElement.textContent.trim().toLowerCase();

//       setWords((prevWords) => {
//         const updatedWords = [...prevWords];
//         const replacedWordIndex = updatedWords.findIndex((wordObj) => wordObj.word.trim().toLowerCase() === currentWord);
//         const targetWordIndex = updatedWords.findIndex((wordObj) => wordObj.word.trim().toLowerCase() === word.trim().toLowerCase());

//         if (replacedWordIndex !== -1 && targetWordIndex !== -1) {
//           updatedWords[replacedWordIndex].used = false;
//           updatedWords[targetWordIndex].used = true;
//           updateWordContainerVisibility(updatedWords, replacedWordIndex);
//           updateWordContainerVisibility(updatedWords, targetWordIndex);
//         }

//         return updatedWords;
//       });

//       draggedElement.textContent = word;
//       draggedElement.classList.remove('checked-game');

//       const wordSpans = wordContainerRef.current.querySelectorAll('.drag-item-game');
//       const wordIndexInContainer = Array.from(wordSpans).findIndex((span) => span.innerText.trim().toLowerCase() === word.trim().toLowerCase());

//       if (wordIndexInContainer !== -1) {
//         wordSpans[wordIndexInContainer].style.display = 'none';
//       }
//     }
//   };

//   const updateWordContainerVisibility = (updatedWords, wordIndex) => {
//     const remainingWords = updatedWords.filter((wordObj) => !wordObj.used);
//     displayWords(remainingWords);

//     const wordSpans = wordContainerRef.current.querySelectorAll('.drag-item-game');
//     wordSpans.forEach((span) => {
//       span.style.display = 'none';
//     });

//     remainingWords.forEach((wordObj, index) => {
//       if (wordSpans[index]) {
//         wordSpans[index].style.display = 'flex';
//       }
//     });

//     const isEmptyContainer = remainingWords.length === 0;
//     wordContainerRef.current.classList.toggle('empty-container', isEmptyContainer);
//     wordContainerRef.current.style.minHeight = isEmptyContainer ? '0' : 'auto';
//   };

//   const customResetGame = () => {
//     const shuffledWords = [...initialWords].sort(() => Math.random() - 0.5);

//     setWords(shuffledWords);
//     setVisibleWords([...shuffledWords].map(() => true));
//     displayWords(shuffledWords);

//     setSentences(initialSentences);
//     displaySentences();

//     sentenceContainerRef.current.querySelectorAll('.answer-game').forEach((span) => {
//       span.innerHTML = '';
//       span.classList.remove('correct-game', 'incorrect-game', 'checked-game');
//     });

//     wordContainerRef.current.classList.remove('empty-container');
//     wordContainerRef.current.style.minHeight = 'auto';
//   };

//   const checkGameAnswers = () => {
//     const answerSpans = sentenceContainerRef.current.querySelectorAll('.answer-game');

//     answerSpans.forEach((span, index) => {
//       span.classList.remove('correct-game', 'incorrect-game');

//       const userAnswer = span.textContent.trim().toLowerCase();
//       const correctAnswer = words[index].word.trim().toLowerCase();

//       if (userAnswer === correctAnswer) {
//         span.classList.add('correct-game');
//       } else {
//         span.classList.add('incorrect-game');
//       }
//     });
//   };

//   const showCorrectGameAnswers = () => {
//     const answerSpans = sentenceContainerRef.current.querySelectorAll('.answer-game');
//     answerSpans.forEach((span, index) => {
//       span.textContent = initialCorrectAnswers[index].word;
//       span.classList.add('correct-game');
//     });
//   };

//   const displaySentences = () => {
//     sentenceContainerRef.current.innerHTML = ' ';

//     sentences.forEach((sentence, index) => {
//       const sentenceDiv = document.createElement('div');
//       sentenceDiv.classList.add('sentence');

//       const words = sentence.split(' ');
//       words.forEach((word, wordIndex) => {
//         if (word === '______') {
//           const wordSpan = document.createElement('span');
//           wordSpan.classList.add('answer-game', 'item');
//           wordSpan.setAttribute('data-index', wordIndex);
//           wordSpan.setAttribute('draggable', true);
//           wordSpan.addEventListener('dragstart', (event) => dragGame(event, words[wordIndex].word, wordIndex));
//           wordSpan.addEventListener('dragover', allowDropGameToSentence);
//           wordSpan.addEventListener('drop', (event) => dropGameToSentence(event, wordIndex));

//           wordSpan.style.minWidth = '60px';
//           wordSpan.style.minHeight = '30px';
//           sentenceDiv.appendChild(wordSpan);
//         } else {
//           const textSpan = document.createElement('span');
//           textSpan.textContent = word;
//           sentenceDiv.appendChild(textSpan);
//         }
//       });

//       sentenceContainerRef.current.appendChild(sentenceDiv);
//     });
//   };

//   const displayWords = (customWords) => {
//     const displayWordsArray = customWords || words.filter((word) => !word.used && visibleWords[word.index]);
//     const newWordContainer = document.createElement('div');

//     displayWordsArray.forEach((wordObj, index) => {
//       const wordSpan = createWordSpan(wordObj, index);
//       if (wordSpan) {
//         newWordContainer.appendChild(wordSpan);
//       }
//     });

//     wordContainerRef.current.innerHTML = '';
//     wordContainerRef.current.appendChild(newWordContainer);
//   };

//   const createWordSpan = (wordObj, index) => {
//     if (wordObj.used || !visibleWords[index]) {
//       return null;
//     }

//     const wordSpan = document.createElement('span');
//     wordSpan.innerText = wordObj.word;
//     wordSpan.classList.add('drag-item-game');
//     wordSpan.setAttribute('draggable', true);
//     wordSpan.setAttribute('data-index', index);

//     wordSpan.addEventListener('dragstart', (event) => {
//       dragGame(event, wordObj.word, index);
//     });

//     return wordSpan;
//   };

//   return (
//     <DndProvider backend={HTML5Backend}>
//       <div className="block-name">
//             <h3>Vocabulary Practice</h3>
//             <h4>
//               <p>Sure, you are ready with Quizlet! So, now it's time to practice. It adds knowledge to
//                 your
//                 mind.</p>
//               <p>Complete the sentences by dragging words into the gaps. Do not drag words you have
//                 already put into the gap to another gaps. Just move the word from your list to the word
//                 that is already in the blank and previous word will return! Don't forget to ckeck your
//                 answers!</p>
//             </h4>
//           </div>
//       <div className="drag-game-cont">
//         <div className="sentence-container-game item" id="sentenceContainer">
//           {sentences.map((sentence, index) => (
//             <div key={index} className="sentence">
//               {sentence.split(' ').map((word, wordIndex) => (
//                 word === '______' ? (
//                   <Answer key={wordIndex} index={wordIndex} onDrop={dropGameToSentence} />
//                 ) : (
//                   <span key={wordIndex}> {word} </span>
//                 )
//               ))}
//             </div>
//           ))}
//         </div>

//         <div className={`drag-container-game item ${isWordContainerEmpty ? 'empty' : ''}`} id="wordContainer">
//           {words.map((wordObj, index) => (
//             <Word
//               key={index}
//               word={wordObj.word}
//               index={index}
//               isUsed={wordObj.used}
//               isVisible={visibleWords[index]}
//               onDrag={dragGame}
//             />
//           ))}
//         </div>
//         </div>

//         <div className="choose-buttons">
//           <button className="button" onClick={checkGameAnswers}>Check Answers</button>
//           <button className="button" onClick={customResetGame}>Reset Game</button>
//           <button className="button" onClick={showCorrectGameAnswers}>Show Correct Answers</button>
//         </div>
//     </DndProvider>
//   );
// };

// export default MyFascinatingMorningGame;


// import React, { useState, useEffect, useRef } from 'react';

// import { DndProvider, useDrag, useDrop } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';
// import './MyFascinatingMorning.css';

// const Word = ({ word, index, isUsed, isVisible, onDrag }) => {
//   const [, drag] = useDrag({
//     type: 'WORD',
//     item: { word, index },
//   });

//   return (
//     <span
//       ref={(element) => {
//         if (element) {
//           element.addEventListener('dragstart', (event) => onDrag(event, word, index));
//         }
//         drag(element);
//       }}
//       className={`drag-item-game ${isUsed || !isVisible ? 'hidden' : ''}`}
//     >
//       {word}
//     </span>
//   );
// };

// const Answer = ({ index, onDrop }) => {
//   const [{ isOver }, drop] = useDrop({
//     accept: 'WORD',
//     drop: (item) => onDrop(item.index),
//     collect: (monitor) => ({
//       isOver: !!monitor.isOver(),
//     }),
//   });

//   const allowDropGameToSentence = (event) => {
//     event.preventDefault();
//   };

//   return (
//     <span
//       ref={drop}
//       onDragOver={allowDropGameToSentence}
//       className={`answer-game ${isOver ? 'drag-over' : ''}`}
//     >
//       ______
//     </span>
//   );
// };

// const MyFascinatingMorningGame = () => {
//   const [isWordContainerEmpty, setIsWordContainerEmpty] = useState(true);
//   const sentenceContainerRef = useRef(null);
//   const wordContainerRef = useRef(null);
//   const initialSentences = [
//     " ______ of furniture making and sewing, glassblowing",
//     "Applause ______ ",
//     "dashing ______ ",
//     " ______ on their travels in early June",
//     " ______ the conditions for her release"
//   ];

//   const initialWords = [
//     { word: "craft", used: false },
//     { word: "burst forth", used: false },
//     { word: "back and forth", used: false },
//     { word: "set forth", used: false },
//     { word: "forth", used: false }
//   ];

//   const [sentences, setSentences] = useState(initialSentences);
//   const [words, setWords] = useState(initialWords);
//   const [visibleWords, setVisibleWords] = useState([...initialWords].map(() => true));
//   const initialCorrectAnswers = [...initialWords];
//   const correctAnswers = initialWords.map((wordObj) => wordObj.word.trim().toLowerCase());


//   useEffect(() => {
//     sentenceContainerRef.current = document.getElementById('sentenceContainer');
//     wordContainerRef.current = document.getElementById('wordContainer');

//     if (sentenceContainerRef.current && wordContainerRef.current) {
//       customResetGame();
//     }
//   }, []);

//   useEffect(() => {
//     setIsWordContainerEmpty(words.every(wordObj => wordObj.used));
//   }, [words]);

//   const dragGame = (event, word, wordIndex) => {
//     event.dataTransfer.setData('text/plain', word);
//     event.dataTransfer.setData('word-index', wordIndex);
//   };

//   const allowDropGameToSentence = (event) => {
//     event.preventDefault();
//   };

//   const dropGameToSentence = (event, wordIndex) => {
//     event.preventDefault();
//     const draggedElement = event.target;
//     const word = event.dataTransfer.getData('text/plain');

//     if (draggedElement.classList.contains('answer-game')) {
//       const currentWord = draggedElement.textContent.trim().toLowerCase();

//       setWords((prevWords) => {
//         const updatedWords = [...prevWords];
//         const replacedWordIndex = updatedWords.findIndex((wordObj) => wordObj.word.trim().toLowerCase() === currentWord);
//         const targetWordIndex = updatedWords.findIndex((wordObj) => wordObj.word.trim().toLowerCase() === word.trim().toLowerCase());

//         if (replacedWordIndex !== -1 && targetWordIndex !== -1) {
//           updatedWords[replacedWordIndex].used = false;
//           updatedWords[targetWordIndex].used = true;
//           updateWordContainerVisibility(updatedWords, replacedWordIndex);
//           updateWordContainerVisibility(updatedWords, targetWordIndex);
//         }

//         return updatedWords;
//       });

//       draggedElement.textContent = word;
//       draggedElement.classList.remove('checked-game');

//       const wordSpans = wordContainerRef.current.querySelectorAll('.drag-item-game');
//       const wordIndexInContainer = Array.from(wordSpans).findIndex((span) => span.innerText.trim().toLowerCase() === word.trim().toLowerCase());

//       if (wordIndexInContainer !== -1) {
//         wordSpans[wordIndexInContainer].style.display = 'none';
//       }
//     }
//   };

//   const updateWordContainerVisibility = (updatedWords, wordIndex) => {
//     const remainingWords = updatedWords.filter((wordObj) => !wordObj.used);
//     displayWords(remainingWords);

//     const wordSpans = wordContainerRef.current.querySelectorAll('.drag-item-game');
//     wordSpans.forEach((span) => {
//       span.style.display = 'none';
//     });

//     remainingWords.forEach((wordObj, index) => {
//       if (wordSpans[index]) {
//         wordSpans[index].style.display = 'flex';
//       }
//     });

//     const isEmptyContainer = remainingWords.length === 0;
//     wordContainerRef.current.classList.toggle('empty-container', isEmptyContainer);
//     wordContainerRef.current.style.minHeight = isEmptyContainer ? '0' : 'auto';
//   };

//   const customResetGame = () => {
//     const shuffledWords = [...initialWords].sort(() => Math.random() - 0.5);

//     setWords(shuffledWords);
//     setVisibleWords([...shuffledWords].map(() => true));
//     displayWords(shuffledWords);

//     setSentences(initialSentences);
//     displaySentences();

//     sentenceContainerRef.current.querySelectorAll('.answer-game').forEach((span) => {
//       span.innerHTML = '';
//       span.classList.remove('correct-game', 'incorrect-game', 'checked-game');
//     });

//     wordContainerRef.current.classList.remove('empty-container');
//     wordContainerRef.current.style.minHeight = 'auto';
//   };

//   const checkGameAnswers = () => {
//     const answerSpans = sentenceContainerRef.current.querySelectorAll('.answer-game');
  
//     answerSpans.forEach((span, index) => {
//       span.classList.remove('correct-game', 'incorrect-game');
  
//       const userAnswer = span.textContent.trim().toLowerCase();
//       const correctAnswer = correctAnswers[index];
  
//       if (userAnswer === correctAnswer) {
//         span.classList.add('correct-game');
//       } else {
//         span.classList.add('incorrect-game');
//       }
//     });
//   };
  

//   const showCorrectGameAnswers = () => {
//     const answerSpans = sentenceContainerRef.current.querySelectorAll('.answer-game');
//     answerSpans.forEach((span, index) => {
//       span.textContent = initialCorrectAnswers[index].word;
//       span.classList.add('correct-game');
//     });
//   };

//   const displaySentences = () => {
//     sentenceContainerRef.current.innerHTML = ' ';

//     sentences.forEach((sentence, index) => {
//       const sentenceDiv = document.createElement('div');
//       sentenceDiv.classList.add('sentence');

//       const words = sentence.split(' ');
//       words.forEach((word, wordIndex) => {
//         if (word === '______') {
//           const wordSpan = document.createElement('span');
//           wordSpan.classList.add('answer-game', 'item');
//           wordSpan.setAttribute('data-index', wordIndex);
//           wordSpan.setAttribute('draggable', true);
//           wordSpan.addEventListener('dragstart', (event) => dragGame(event, words[wordIndex].word, wordIndex));
//           wordSpan.addEventListener('dragover', allowDropGameToSentence);
//           wordSpan.addEventListener('drop', (event) => dropGameToSentence(event, wordIndex));

//           wordSpan.style.minWidth = '60px';
//           wordSpan.style.minHeight = '30px';
//           sentenceDiv.appendChild(wordSpan);
//         } else {
//           const textSpan = document.createElement('span');
//           textSpan.textContent = word;
//           sentenceDiv.appendChild(textSpan);
//         }
//       });

//       sentenceContainerRef.current.appendChild(sentenceDiv);
//     });
//   };

//   const displayWords = (customWords) => {
//     const displayWordsArray = customWords || words.filter((word) => !word.used && visibleWords[word.index]);
//     const newWordContainer = document.createElement('div');

//     displayWordsArray.forEach((wordObj, index) => {
//       const wordSpan = createWordSpan(wordObj, index);
//       if (wordSpan) {
//         newWordContainer.appendChild(wordSpan);
//       }
//     });

//     wordContainerRef.current.innerHTML = '';
//     wordContainerRef.current.appendChild(newWordContainer);
//   };

//   const createWordSpan = (wordObj, index) => {
//     if (wordObj.used || !visibleWords[index]) {
//       return null;
//     }

//     const wordSpan = document.createElement('span');
//     wordSpan.innerText = wordObj.word;
//     wordSpan.classList.add('drag-item-game');
//     wordSpan.setAttribute('draggable', true);
//     wordSpan.setAttribute('data-index', index);

//     wordSpan.addEventListener('dragstart', (event) => {
//       dragGame(event, wordObj.word, index);
//     });

//     return wordSpan;
//   };

//   return (
//     <DndProvider backend={HTML5Backend}>
//       <div className="block-name">
//             <h3>Vocabulary Practice</h3>
//             <h4>
//               <p>Sure, you are ready with Quizlet! So, now it's time to practice. It adds knowledge to
//                 your
//                 mind.</p>
//               <p>Complete the sentences by dragging words into the gaps. Do not drag words you have
//                 already put into the gap to another gaps. Just move the word from your list to the word
//                 that is already in the blank and previous word will return! Don't forget to ckeck your
//                 answers!</p>
//             </h4>
//           </div>
//       <div className="drag-game-cont">
//         <div className="sentence-container-game item" id="sentenceContainer">
//           {sentences.map((sentence, index) => (
//             <div key={index} className="sentence">
//               {sentence.split(' ').map((word, wordIndex) => (
//                 word === '______' ? (
//                   <Answer key={wordIndex} index={wordIndex} onDrop={dropGameToSentence} />
//                 ) : (
//                   <span key={wordIndex}> {word} </span>
//                 )
//               ))}
//             </div>
//           ))}
//         </div>

//         <div className={`drag-container-game item ${isWordContainerEmpty ? 'empty' : ''}`} id="wordContainer">
//           {words.map((wordObj, index) => (
//             <Word
//               key={index}
//               word={wordObj.word}
//               index={index}
//               isUsed={wordObj.used}
//               isVisible={visibleWords[index]}
//               onDrag={dragGame}
//             />
//           ))}
//         </div>
//         </div>

//         <div className="choose-buttons">
//           <button className="button" onClick={checkGameAnswers}>Check Answers</button>
//           <button className="button" onClick={customResetGame}>Reset Game</button>
//           <button className="button" onClick={showCorrectGameAnswers}>Show Correct Answers</button>
//         </div>
//     </DndProvider>
//   );
// };

// export default MyFascinatingMorningGame;





import React, { useState, useEffect, useRef, useCallback } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './MyFascinatingMorning.css';

const Word = ({ word, index, isUsed, isVisible, onDrag }) => {
  const [, drag] = useDrag({
    type: 'WORD',
    item: { word, index },
  });

  return (
    <span
      ref={(element) => {
        if (element) {
          element.addEventListener('dragstart', (event) => onDrag(event, word, index));
        }
        drag(element);
      }}
      className={`drag-item-game ${isUsed || !isVisible ? 'hidden' : ''}`}
    >
      {word}
    </span>
  );
};

const Answer = ({ index, onDrop }) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'WORD',
    drop: (item) => onDrop(item.index),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const allowDropGameToSentence = (event) => {
    event.preventDefault();
  };

  return (
    <span
      ref={drop}
      onDragOver={allowDropGameToSentence}
      className={`answer-game ${isOver ? 'drag-over' : ''}`}
    >
      ______
    </span>
  );
};

const MyFascinatingMorningGame = () => {
  const [isWordContainerEmpty, setIsWordContainerEmpty] = useState(true);
  const sentenceContainerRef = useRef(null);
  const wordContainerRef = useRef(null);
  const initialSentences = [
    " ______ of furniture making and sewing, glassblowing",
    "Applause ______ ",
    "dashing ______ ",
    " ______ on their travels in early June",
    " ______ the conditions for her release"
  ];

  const initialWords = [
    { word: "craft", used: false },
    { word: "burst forth", used: false },
    { word: "back and forth", used: false },
    { word: "set forth", used: false },
    { word: "forth", used: false }
  ];

  const [sentences, setSentences] = useState(initialSentences);
  const [words, setWords] = useState(initialWords);
  const [visibleWords, setVisibleWords] = useState([...initialWords].map(() => true));
  const initialCorrectAnswers = [...initialWords];
  const correctAnswers = initialWords.map((wordObj) => wordObj.word.trim().toLowerCase());
  const customResetGame = useCallback(() => {
    const shuffledWords = [...initialWords].sort(() => Math.random() - 0.5);

    setWords(shuffledWords);
    setVisibleWords([...shuffledWords].map(() => true));
    displayWords(shuffledWords);

    setSentences(initialSentences);
    displaySentences();

    sentenceContainerRef.current.querySelectorAll('.answer-game').forEach((span) => {
      span.innerHTML = '';
      span.classList.remove('correct-game', 'incorrect-game', 'checked-game');
    });

    wordContainerRef.current.classList.remove('empty-container');
    wordContainerRef.current.style.minHeight = 'auto';
  }, 
  
  
  
  
  
  []); 


  useEffect(() => {
    sentenceContainerRef.current = document.getElementById('sentenceContainer');
    wordContainerRef.current = document.getElementById('wordContainer');

    if (sentenceContainerRef.current && wordContainerRef.current) {
      customResetGame();
    }
  }, [customResetGame]);

  useEffect(() => {
    setIsWordContainerEmpty(words.every(wordObj => wordObj.used));
  }, [words]);

  const dragGame = (event, word, wordIndex) => {
    event.dataTransfer.setData('text/plain', word);
    event.dataTransfer.setData('word-index', wordIndex);
  };

  const allowDropGameToSentence = (event) => {
    event.preventDefault();
  };

  const dropGameToSentence = (event, wordIndex) => {
    event.preventDefault();
    const draggedElement = event.target;
    const word = event.dataTransfer.getData('text/plain');

    if (draggedElement.classList.contains('answer-game')) {
      const currentWord = draggedElement.textContent.trim().toLowerCase();

      setWords((prevWords) => {
        const updatedWords = [...prevWords];
        const replacedWordIndex = updatedWords.findIndex((wordObj) => wordObj.word.trim().toLowerCase() === currentWord);
        const targetWordIndex = updatedWords.findIndex((wordObj) => wordObj.word.trim().toLowerCase() === word.trim().toLowerCase());

        if (replacedWordIndex !== -1 && targetWordIndex !== -1) {
          updatedWords[replacedWordIndex].used = false;
          updatedWords[targetWordIndex].used = true;
          updateWordContainerVisibility(updatedWords, replacedWordIndex);
          updateWordContainerVisibility(updatedWords, targetWordIndex);
        }

        return updatedWords;
      });

      draggedElement.textContent = word;
      draggedElement.classList.remove('checked-game');

      const wordSpans = wordContainerRef.current.querySelectorAll('.drag-item-game');
      const wordIndexInContainer = Array.from(wordSpans).findIndex((span) => span.innerText.trim().toLowerCase() === word.trim().toLowerCase());

      if (wordIndexInContainer !== -1) {
        wordSpans[wordIndexInContainer].style.display = 'none';
      }
    }
  };

  const updateWordContainerVisibility = (updatedWords, wordIndex) => {
    const remainingWords = updatedWords.filter((wordObj) => !wordObj.used);
    displayWords(remainingWords);

    const wordSpans = wordContainerRef.current.querySelectorAll('.drag-item-game');
    wordSpans.forEach((span) => {
      span.style.display = 'none';
    });

    remainingWords.forEach((wordObj, index) => {
      if (wordSpans[index]) {
        wordSpans[index].style.display = 'flex';
      }
    });

    const isEmptyContainer = remainingWords.length === 0;
    wordContainerRef.current.classList.toggle('empty-container', isEmptyContainer);
    wordContainerRef.current.style.minHeight = isEmptyContainer ? '0' : 'auto';
  };

  
  const checkGameAnswers = () => {
    const answerSpans = sentenceContainerRef.current.querySelectorAll('.answer-game');
  
    answerSpans.forEach((span, index) => {
      span.classList.remove('correct-game', 'incorrect-game');
  
      const userAnswer = span.textContent.trim().toLowerCase();
      const correctAnswer = correctAnswers[index];
  
      if (userAnswer === correctAnswer) {
        span.classList.add('correct-game');
      } else {
        span.classList.add('incorrect-game');
      }
    });
  };
  

  const showCorrectGameAnswers = () => {
    const answerSpans = sentenceContainerRef.current.querySelectorAll('.answer-game');
    answerSpans.forEach((span, index) => {
      span.textContent = initialCorrectAnswers[index].word;
      span.classList.add('correct-game');
    });
  };

  const displaySentences = () => {
    sentenceContainerRef.current.innerHTML = ' ';

    sentences.forEach((sentence, index) => {
      const sentenceDiv = document.createElement('div');
      sentenceDiv.classList.add('sentence');

      const words = sentence.split(' ');
      words.forEach((word, wordIndex) => {
        if (word === '______') {
          const wordSpan = document.createElement('span');
          wordSpan.classList.add('answer-game', 'item');
          wordSpan.setAttribute('data-index', wordIndex);
          wordSpan.setAttribute('draggable', true);
          wordSpan.addEventListener('dragstart', (event) => dragGame(event, words[wordIndex].word, wordIndex));
          wordSpan.addEventListener('dragover', allowDropGameToSentence);
          wordSpan.addEventListener('drop', (event) => dropGameToSentence(event, wordIndex));

          wordSpan.style.minWidth = '60px';
          wordSpan.style.minHeight = '30px';
          sentenceDiv.appendChild(wordSpan);
        } else {
          const textSpan = document.createElement('span');
          textSpan.textContent = word;
          sentenceDiv.appendChild(textSpan);
        }
      });

      sentenceContainerRef.current.appendChild(sentenceDiv);
    });
  };

  const displayWords = (customWords) => {
    const displayWordsArray = customWords || words.filter((word) => !word.used && visibleWords[word.index]);
    const newWordContainer = document.createElement('div');

    displayWordsArray.forEach((wordObj, index) => {
      const wordSpan = createWordSpan(wordObj, index);
      if (wordSpan) {
        newWordContainer.appendChild(wordSpan);
      }
    });

    wordContainerRef.current.innerHTML = '';
    wordContainerRef.current.appendChild(newWordContainer);
  };

  const createWordSpan = (wordObj, index) => {
    if (wordObj.used || !visibleWords[index]) {
      return null;
    }

    const wordSpan = document.createElement('span');
    wordSpan.innerText = wordObj.word;
    wordSpan.classList.add('drag-item-game');
    wordSpan.setAttribute('draggable', true);
    wordSpan.setAttribute('data-index', index);

    wordSpan.addEventListener('dragstart', (event) => {
      dragGame(event, wordObj.word, index);
    });

    return wordSpan;
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="block-name dotted">
            <h3>Vocabulary Practice</h3>
            <h4>
              <p>Sure, you are ready with Quizlet! So, now it's time to practice. It adds knowledge to
                your
                mind.</p>
              <p>Complete the sentences by dragging words into the gaps. Do not drag words you have
                already put into the gap to another gaps. Just move the word from your list to the word
                that is already in the blank and previous word will return! Don't forget to ckeck your
                answers!</p>
            </h4>
          </div>
      <div className="drag-game-cont">
        <div className="sentence-container-game item" id="sentenceContainer">
          {sentences.map((sentence, index) => (
            <div key={index} className="sentence">
              {sentence.split(' ').map((word, wordIndex) => (
                word === '______' ? (
                  <Answer key={wordIndex} index={wordIndex} onDrop={dropGameToSentence} />
                ) : (
                  <span key={wordIndex}> {word} </span>
                )
              ))}
            </div>
          ))}
        </div>

        <div className={`drag-container-game item ${isWordContainerEmpty ? 'empty' : ''}`} id="wordContainer">
          {words.map((wordObj, index) => (
            <Word
              key={index}
              word={wordObj.word}
              index={index}
              isUsed={wordObj.used}
              isVisible={visibleWords[index]}
              onDrag={dragGame}
            />
          ))}
        </div>
        </div>

        <div className="choose-buttons">
          <button className="button" onClick={checkGameAnswers}>Check Answers</button>
          <button className="button" onClick={customResetGame}>Reset Game</button>
          <button className="button" onClick={showCorrectGameAnswers}>Show Correct Answers</button>
        </div>
    </DndProvider>
  );
};

export default MyFascinatingMorningGame;