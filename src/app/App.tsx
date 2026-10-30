import React from 'react';
import { RouterProvider } from 'react-router';
import { router } from './routes';
import ScrollBackground from './components/ScrollBackground';

export default function App() {
  return (
    <>
      <ScrollBackground />
      <RouterProvider router={router} />
    </>
  );
}
