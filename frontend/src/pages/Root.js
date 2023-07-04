import { Outlet, useNavigation } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

function RouteLayout() {
  // cek untuk apakah terjadi loading saat loader mengambil data dari api
  // const navigation = useNavigation();


  return (
    <>
      <MainNavigation />
      <main>
      {/* {navigation.state === 'loading' && <p>Loading....</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RouteLayout;
