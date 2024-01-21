// API

// import React from 'react';
// import { useParams } from 'react-router-dom';

// const ThemeDetails = () => {
//   const { levelId, themeId } = useParams();

//   // Мы могли бы загрузить описание темы из API здесь

//   return (
//     <div>
//       <h2>Детали темы</h2>
//       <p>Описание темы {themeId} для уровня {levelId}</p>
//       <button onClick={() => alert('Начать урок')}>Начать урок</button>
//     </div>
//   );
// }


import React from 'react';
import { useParams, Link } from 'react-router-dom';
import TasksPage from './TasksPage';

const themesData = {
  beginner: [
    { 
      id: 'beginner-topic1',
      title: 'Тема 1',
      description: 'Описание темы 1 для уровня beginner',
      tasksPath: '/beginner/beginner-topic1/tasks',
    },
  
  ],
  intermediate: [
    { 
      id: 'intermediate-topic1',
      title: 'Тема 1',
      description: 'Описание темы 1 для уровня intermediate',
      tasksPath: '/intermediate/intermediate-topic1/tasks',
    },

  ],
  advanced: [
    { 
      id: 'advanced-topic1',
      title: 'Тема 1',
      description: 'Описание темы 1 для уровня advanced',
      tasksPath: '/advanced/advanced-topic1/tasks',
    },

  ],
};

const ThemeDetails = () => {
  const { levelId, themeId } = useParams();
  const theme = themesData[levelId]?.find(t => t.id === themeId) || {};

  return (
    <div className='fade-in'>
      <h2>{theme.title}</h2>
      <p>{theme.description}</p>
      <Link to={theme.tasksPath}>
        <button>Начать урок</button>
      </Link>
    </div>
  );
}

export default ThemeDetails;

