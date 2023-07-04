import { json, useRouteLoaderData } from 'react-router-dom';
import EventForm from './../components/EventForm';

function EditEventPage() {
  const data = useRouteLoaderData('event-detail');

  return <EventForm event={data.event} />;
}

export default EditEventPage;

export async function action({ request, params }) {
  const data = await request.formData();
  const id = params.eventId;

  const eventData = {
    title: data.get('title'),
    image: data.get('image'),
    date: data.get('date'),
    description: data.get('description'),
  };

  const response = await fetch('http://localhost:8081/events/' + id, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(eventData),
  });

  if (!response.ok) {
    throw json(
      { message: 'Could not update a event.' },
      {
        status: 500,
      }
    );
  }
}
