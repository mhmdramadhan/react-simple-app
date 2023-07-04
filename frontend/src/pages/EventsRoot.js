import { Outlet, useNavigation } from 'react-router-dom';
import EventsNavigation from '../components/EventsNavigation';

function EventRootLayout() {
  // const navigation = useNavigation();

  return (
    <>
      <EventsNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default EventRootLayout;
