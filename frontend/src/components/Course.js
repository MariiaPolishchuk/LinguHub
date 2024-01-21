// Course.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CourseLevels from './CourseLevels';

const Course = () => {
  return (
    <Routes>
      <Route path="/" element={<CourseLevels />} />
    </Routes>
  );
};

export default Course;
