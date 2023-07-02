import { json, useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const fetchData = useLoaderData();

  return (
    <>
      <EventsList events={fetchData} />
    </>
  );
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8081/events");

  if (!response.ok) {
    // return { message: 'Could not fetch data events.' }
    throw json(
      { message: "Could not fetch data events." },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.events;
  }
}
