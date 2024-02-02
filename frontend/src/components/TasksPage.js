

// import React from 'react';
// import { useParams } from 'react-router-dom';
// import MyFascinatingMorning from './lessons/MyFascinatingMorning/MyFascinatingMorning';

// const themesData = {
//   beginner: [],
//   intermediate: [
//     { 
//       id: 'intermediate-topic1',
//       title: 'My Fascinating Morning',
//       lessons: [
//         { id: 'my-fascinating-morning', title: 'My Fascinating Morning Lesson' },
//       ],
//     },
//   ],
//   advanced: [],
// };

// const TasksPage = () => {
//   const { levelId, themeId, lessonId } = useParams();
//   const theme = themesData[levelId]?.find(t => t.id === themeId) || {};
//   const lesson = theme.lessons?.find(l => l.id === lessonId) || {};

//   return (
//     <div>
//       <h2>{lesson.title}</h2>
//       <MyFascinatingMorning />
//     </div>
//   );
// };

// export default TasksPage;


import React from 'react';
import { useParams } from 'react-router-dom';
import MyFascinatingMorning from './lessons/MyFascinatingMorning/MyFascinatingMorning';

const themesData = {
  beginner: [],
  intermediate: [
    { 
      id: 'intermediate-topic1',
      title: 'My Fascinating Morning',
      lessons: [
        { id: 'my-fascinating-morning', title: 'My Fascinating Morning Lesson' },
      ],
    },
  ],
  advanced: [],
};

const TasksPage = () => {
  const { levelId, themeId, lessonId } = useParams();
  const theme = themesData[levelId]?.find(t => t.id === themeId) || {};
  const lesson = theme.lessons?.find(l => l.id === lessonId) || {};

  return (
    <div>
      {/* <h2>{lesson.title}</h2> */}
      <MyFascinatingMorning />
    </div>
  );
};

export default TasksPage;
