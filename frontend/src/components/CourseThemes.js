//API

// import React from 'react';
// import { useParams, Link } from 'react-router-dom';

// const CourseThemes = () => {
//   const { levelId } = useParams();

//   // API здесь

//   return (
//     <div>
//       <h2>Выберите тему для уровня {levelId}</h2>
//       <ul>
//         <li><Link to={`${levelId}/topic1`}>Тема 1</Link></li>
//         <li><Link to={`${levelId}/topic2`}>Тема 2</Link></li>
//         <li><Link to={`${levelId}/topic3`}>Тема 3</Link></li>
//       </ul>
//     </div>
//   );
// }

// export default CourseThemes;



// import React from 'react';
// import { useParams, Link, Routes, Route } from 'react-router-dom';




// const themesData = {
//   beginner: [
//     { id: 'beginner-topic1', title: 'MyFascinatingMorning' },
//     { id: 'beginner-topic2', title: 'DailyRoutine' },
//     { id: 'beginner-topic3', title: 'JobInterview' },
//   ],
//   intermediate: [
//     { id: 'intermediate-topic1', title: 'MyFascinatingMorning' },
//     { id: 'intermediate-topic2', title: 'DailyRoutine' },
//     { id: 'intermediate-topic3', title: 'Mood' },
//     { id: 'intermediate-topic4', title: 'JobInterview' },
//   ],
//   advanced: [
//     { id: 'advanced-topic1', title: 'DailyRoutine' },
//     { id: 'advanced-topic2', title: 'Тема 2' },
//     { id: 'advanced-topic3', title: 'Тема 3' },
//   ],
// };

// const CourseThemes = () => {
//   const { levelId } = useParams();
//   const themes = themesData[levelId] || [];

//   return (
//     <div className='course-themes'>
//       <h2>Find your fav {levelId}-topic to start!</h2>
//       <ul className='fade-in course-themes-list'>
//         {themes.map(theme => (
//           <li className='course-themes-li' key={theme.id}>
//             <Link to={`/course/${levelId}/${theme.id}`}>{theme.title}</Link>

//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default CourseThemes;


import React from 'react';
import { useParams, Link, Routes, Route } from 'react-router-dom';
import ThemeDetails from './ThemeDetails';
import TasksPage from './TasksPage';

const themesData = {
  beginner: [],
  intermediate: [
    {
      id: 'intermediate-topic1',
      title: 'My Fascinating Morning',
      lessons: [
        { id: 'my-fascinating-morning', title: 'My Fascinating Morning' }
      ],
    },
    {
      id: 'intermediate-topic2',
      title: 'My Daily Routine',
      lessons: [
        { id: 'my-daily-routine', title: 'My Daily Routine' }
      ]
    },
    {
      id: 'intermediate-topic3',
      title: 'Job Interview',
      lessons: [
        { id: 'job-interview', title: 'Job Interview' }
      ]
    }
  ],
  advanced: [],
};

const CourseThemes = () => {
  const { levelId } = useParams();
  const themes = themesData[levelId] || [];

  return (
    <div className='course-themes'>
      <h2>Find your fav {levelId}-topic to start!</h2>
      <ul className='fade-in course-themes-list'>
        {themes.map(theme => (
          <li className='course-themes-li' key={theme.id}>
            <Link to={`/course/${levelId}/${theme.id}`}>{theme.title}</Link>
          </li>
        ))}
      </ul>

      <Routes>
        <Route path=":themeId" element={<ThemeDetails />} />
        {themes.map(theme => (
          <Route
            key={theme.id}
            path={`${theme.id}/:lessonId`}
            element={<TasksPage />}
          />
        ))}
      </Routes>
    </div>
  );
};

export default CourseThemes;
