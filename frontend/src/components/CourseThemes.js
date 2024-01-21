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



import React from 'react';
import { useParams, Link, Route, Routes } from 'react-router-dom';
import ThemeDetails from './ThemeDetails';

const themesData = {
  beginner: [
    { id: 'beginner-topic1', title: 'Тема 1', description: 'Описание темы 1 для уровня beginner' },
    { id: 'beginner-topic2', title: 'Тема 2', description: 'Описание темы 2 для уровня beginner' },
    { id: 'beginner-topic3', title: 'Тема 3', description: 'Описание темы 3 для уровня beginner' },
  ],
  intermediate: [
    { id: 'intermediate-topic1', title: 'Тема 1', description: 'Описание темы 1 для уровня intermediate' },
    { id: 'intermediate-topic2', title: 'Тема 2', description: 'Описание темы 2 для уровня intermediate' },
    { id: 'intermediate-topic3', title: 'Тема 3', description: 'Описание темы 3 для уровня intermediate' },
  ],
  advanced: [
    { id: 'advanced-topic1', title: 'Тема 1', description: 'Описание темы 1 для уровня advanced' },
    { id: 'advanced-topic2', title: 'Тема 2', description: 'Описание темы 2 для уровня advanced' },
    { id: 'advanced-topic3', title: 'Тема 3', description: 'Описание темы 3 для уровня advanced' },
  ],
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
            <Link to={`${theme.id}`}>{theme.title}</Link>
          </li>
        ))}
      </ul>

      <Routes>
        {themes.map(theme => (
          <Route
            key={theme.id}
            path={`${theme.id}/*`}
            element={<ThemeDetails theme={theme} />}
          />
        ))}
      </Routes>
    </div>
  );
}

export default CourseThemes;
