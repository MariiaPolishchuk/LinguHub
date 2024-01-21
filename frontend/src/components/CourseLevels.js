
// если с API 

// import React from 'react';
// import { Link } from 'react-router-dom';

// const CourseLevels = () => {
//   return (
//     <div>
//       <h2>Выберите уровень</h2>
//       <ul>
//         <li><Link to="beginner">Beginner</Link></li>
//         <li><Link to="intermediate">Intermediate</Link></li>
//         <li><Link to="advanced">Advanced</Link></li>
//       </ul>
//     </div>
//   );
// }

// export default CourseLevels;



import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import CourseThemes from './CourseThemes';

const CourseLevels = () => {
  return (
    <div className='course-levels'>
      <h2>Choose your Level</h2>
      <ul className='fade-in course-levels-list'>
        <li className='course-levels-list-item'><Link to="beginner">Beginner</Link></li>
        <li className='course-levels-list-item'><Link to="intermediate">Intermediate</Link></li>
        <li className='course-levels-list-item'><Link to="advanced">Advanced</Link></li>
      </ul>

      <Routes>
        <Route path=":levelId/*" element={<CourseThemes />} />
      </Routes>
    </div>
  );
};

export default CourseLevels;
