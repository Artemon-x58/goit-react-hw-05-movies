import { Outlet } from 'react-router-dom';
import { Nav } from './Nav/Nav';
import { Suspense } from 'react';

export const AppLayout = () => {
  return (
    <>
      <Nav />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
