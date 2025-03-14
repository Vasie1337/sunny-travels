import BookingForm from '../components/BookingForm';

function BookingPage({ vacations }) {
  return (
    <div className="booking-page">
      <BookingForm vacations={vacations} />
    </div>
  );
}

export default BookingPage;
