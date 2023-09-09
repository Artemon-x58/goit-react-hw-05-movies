import { Outlet } from 'react-router-dom';
import { Nav } from './Nav/Nav';

export const AppLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};
