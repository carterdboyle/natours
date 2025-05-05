import Spinner from '../components/Spinner';
import TourCard from '../components/TourCard';
import { useBookings } from '../hooks/useBookings';

export default function BookingsOverview() {
  const { isLoading, tours } = useBookings();

  if (isLoading) return <Spinner />;

  if (!tours?.length) return <div>No tours found!</div>;

  return (
    <main className="main">
      <div className="card-container">
        {tours.map((tour) => (
          <TourCard tour={tour} key={tour.id} />
        ))}
      </div>
    </main>
  );
}
