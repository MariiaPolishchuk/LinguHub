// API

// import React from 'react';
// import { useParams } from 'react-router-dom';

// const ThemeDetails = () => {
//   const { levelId, themeId } = useParams();

//   // описание темы из API здесь

//   return (
//     <div>
//       <h2>Детали темы</h2>
//       <p>Описание темы {themeId} для уровня {levelId}</p>
//       <button onClick={() => alert('Начать урок')}>Начать урок</button>
//     </div>
//   );
// }



// import React from 'react';
// import { useParams, Link } from 'react-router-dom';

// const themesData = {
//   beginner: [
    
     
    
//   ],
//   intermediate: [
//     { 
//       id: 'intermediate-topic1',
//       title: 'My Fascinating Morning',
//       description: 'This lesson is...',
//       lessonPath: '/lessons/my-fascinating-morning',
//     },
//   ],
//   advanced: [
   
//   ],
// };

// const ThemeDetails = () => {
//   const { levelId, themeId } = useParams();
//   const theme = themesData[levelId]?.find(t => t.id === themeId) || {};

//   return (
//     <div className='topic-details fade-in'>
//       <h2>{theme.title}</h2>
//       <p>{theme.description}</p>
//       <Link to={theme.lessonPath}>
//         <button className='button'>Start</button>
//       </Link>
//     </div>
//   );
// }

// export default ThemeDetails;


import React from 'react';
import { useParams, Link } from 'react-router-dom';

const themesData = {
  beginner: [],
  intermediate: [
    { 
      id: 'intermediate-topic1',
      title: 'My Fascinating Morning',
      description: 'This lesson is...',
      lessonPath: '/course/intermediate/intermediate-topic1/my-fascinating-morning',
    },
  ],
  advanced: [],
};

const ThemeDetails = () => {
  const { levelId, themeId } = useParams();
  const theme = themesData[levelId]?.find(t => t.id === themeId) || {};

  return (
    <div className='topic-details fade-in'>
      <h2>{theme.title}</h2>
      <p>{theme.description}</p>
      <Link to={theme.lessonPath}>
        <button className='button'>Start</button>
      </Link>
    </div>
  );
}

export default ThemeDetails;
