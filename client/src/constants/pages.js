import React from 'react';
import Lesson from "../components/pages/lesson/Lesson";
import Statistics from "../components/pages/statistics/Statistics";

export const pages = [
  {
    path: '/lesson',
    exact: true,
    component: () => <Lesson/>
  }, {
    path: '/statistics',
    exact: true,
    component: () => <Statistics/>
  }
];