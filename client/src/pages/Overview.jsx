import TourCard from '../components/TourCard';
import Spinner from '../components/Spinner';
import { useTours } from '../hooks/useTours';

export default function Overview() {
  const { isLoading, tours, error } = useTours();

  if (isLoading) return <Spinner />;

  if (!tours?.length) return <div>No tours found!</div>;

  if (error) return <Error msg={error.message} />;

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
