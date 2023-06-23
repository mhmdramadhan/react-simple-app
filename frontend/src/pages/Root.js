import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

function RouteLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RouteLayout;
