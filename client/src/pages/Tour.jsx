import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Spinner from '../components/Spinner';
import TourMap from '../components/TourMap';
import { useTour } from '../hooks/useTour';

function OverviewBox({ label, text, icon }) {
  return (
    <div className="overview-box__detail">
      <svg className="overview-box__icon">
        <use href={`/img/icons.svg#icon-${icon}`} />
      </svg>
      <span className="overview-box__label">{label}</span>
      <span className="overview-box__text">{text}</span>
    </div>
  );
}

function ReviewCard({ review }) {
  return (
    <div className="reviews__card">
      <div className="reviews__avatar">
        <img
          className="reviews__avatar-img"
          src={`/img/users/${review.user.photo}`}
          alt={review.user.name}
        />
        <h6 className="reviews__user">{review.user.name}</h6>
      </div>
      <p className="reviews__text">{review.review}</p>
      <div className="reviews__rating">
        {Array.from({ length: 5 }, (_, i) => i + 1).map((star) => (
          <svg
            className={`reviews__star reviews__star--${
              review.rating >= star ? 'active' : 'inactive'
            }`}
            key={star}
          >
            <use xlinkHref="/img/icons.svg#icon-star" />
          </svg>
        ))}
      </div>
    </div>
  );
}

export default function Tour() {
  const { isLoading, tour } = useTour();

  const { user } = useAuth();

  if (isLoading) return <Spinner />;

  const date = new Date(tour.startDates.at(0)).toLocaleString('en-us', {
    month: 'long',
    year: 'numeric',
  });

  const paragraphs = tour.description.split('\n');

  return (
    <>
      <section className="section-header">
        <div className="header__hero">
          <div className="header__hero-overlay">&nbsp;</div>
          <img
            className="header__hero-img"
            src={`/img/tours/${tour.imageCover}`}
            alt={`${tour.name}`}
          />
        </div>
        <div className="heading-box">
          <h1 className="heading-primary">
            <span>{`${tour.name} tour`}</span>
          </h1>
          <div className="heading-box__group">
            <div className="heading-box__detail">
              <svg className="heading-box__icon">
                <use xlinkHref="/img/icons.svg#icon-clock" />
              </svg>
              <span className="heading-box__text">{`${tour.duration} days`}</span>
            </div>
            <div className="heading-box__detail">
              <svg className="heading-box__icon">
                <use xlinkHref="/img/icons.svg#icon-map-pin" />
              </svg>
              <span className="heading-box__text">{`${tour.startLocation.description}`}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-description">
        <div className="overview-box">
          <div>
            <div className="overview-box__group">
              <h2 className="heading-secondary ma-bt-lg">Quick facts</h2>
              <OverviewBox label="Next date" text={date} icon="calendar" />
              <OverviewBox
                label="Difficulty"
                text={tour.difficulty}
                icon="trending-up"
              />
              <OverviewBox
                label="Participants"
                text={`${tour.maxGroupSize} people`}
                icon="user"
              />
              <OverviewBox
                label="Rating"
                text={tour.ratingsAverage}
                icon="star"
              />
            </div>

            <div className="overview-box__group">
              <h2 className="heading-secondary ma-bt-lg">Your tour guides</h2>
              {tour.guides.map((guide) => (
                <div className="overview-box__detail" key={guide.name}>
                  <img
                    className="overview-box__img"
                    src={`/img/users/${guide.photo}`}
                    alt={`${guide.name}`}
                  />
                  <span className="overview-box__label">
                    {guide.role === 'lead-guide'
                      ? 'Lead guide'
                      : guide.role === 'guide'
                      ? 'Tour guide'
                      : ''}
                  </span>
                  <span className="overview-box__text">{guide.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="description-box">
          <h2 className="heading-secondary ma-bt-lg">{`About the ${tour.name} tour`}</h2>
          {paragraphs.map((p, i) => (
            <p className="description__text" key={i}>
              {p}
            </p>
          ))}
        </div>
      </section>

      <section className="section-pictures">
        {tour.images.map((img, i) => (
          <div className="picture-box" key={i}>
            <img
              className={`picture-box__img picture-box__img--${i + 1}`}
              src={`/img/tours/${img}`}
              alt={`${tour.name} Tour ${i + 1}`}
            />
          </div>
        ))}
      </section>

      <section className="section-map">
        <TourMap locations={tour.locations} />
      </section>

      <section className="section-reviews">
        <div className="reviews">
          {tour.reviews.map((review) => (
            <ReviewCard review={review} key={review.id} />
          ))}
        </div>
      </section>

      <section className="section-cta">
        <div className="cta">
          <div className="cta__img cta__img--logo">
            <img src="/img/logo-white.png" alt="Natours logo" />
          </div>
          <img
            className="cta__img cta__img--1"
            src={`/img/tours/${tour.images.at(1)}`}
            alt="Tour picture"
          />
          <img
            className="cta__img cta__img--2"
            src={`/img/tours/${tour.images.at(2)}`}
            alt="Tour picture"
          />
          <div className="cta__content">
            <h2 className="heading-secondary">What are you waiting for?</h2>
            <p className="cta__text">{`${tour.duration} days. 1 adventure. Infinite memories. Make it yours today!
            `}</p>

            {user ? (
              <button
                className="btn btn--green span-all-rows"
                id="book-tour"
                data-tour-id={tour.id}
              >
                Book tour now!
              </button>
            ) : (
              <NavLink className="btn btn--green span-all-rows" to="/login">
                Log in to book tour
              </NavLink>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
