import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../pages/main';
import Details from '../pages/details';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="about" element={<Details />} />
    </Routes>
  );
}
