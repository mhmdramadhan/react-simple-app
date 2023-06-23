import EventsList from '../components/EventsList';

const DATA = [
  {
    id: 'p1',
    title: 'Event 1',
    image: 'https://placehold.co/600x400',
    date: '20 Januari 2023',
  },
  {
    id: 'p2',
    title: 'Event 2',
    image: 'https://placehold.co/600x400',
    date: '20 Januari 2023',
  },
  {
    id: 'p3',
    title: 'Event 3',
    image: 'https://placehold.co/600x400',
    date: '20 Januari 2023',
  },
  {
    id: 'p4',
    title: 'Event 4',
    image: 'https://placehold.co/600x400',
    date: '20 Januari 2023',
  },
];

function EventsPage() {
  return (
    <>
      <EventsList events={DATA} />
    </>
  );
}

export default EventsPage;
