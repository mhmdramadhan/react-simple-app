import { useLoaderData, json } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {
  const data = useLoaderData();
  // console.log(events);
  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }

  const events = data.events;

  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;

export async function loader() {
  const response = await fetch('http://localhost:8081/events');

  if (!response.ok) {
    // errro handling <ErrorPage/>
    // return { isError: true, message: 'Could not fetch events' };
    // throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
    //   status: 500,
    // });
    throw json(
      { message: 'Could not fetch events.' },
      {
        status: 500,
      }
    );
  } else {
    // const resData = await response.json();
    // return resData.events;
    // return { events: resData.events, contoh: 'contoh' };
    return response;
  }
}
