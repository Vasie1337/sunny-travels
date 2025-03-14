import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../styles/VacationDetail.css';
import ReviewSystem from './ReviewSystem';

function VacationDetail({ vacations }) {
  const { id } = useParams();
  const [vacation, setVacation] = useState(null);
  
  useEffect(() => {
    const selectedVacation = vacations.find(v => v.id === parseInt(id));
    setVacation(selectedVacation);
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [id, vacations]);

  if (!vacation) {
    return <div className="container loading">Vakantie wordt geladen...</div>;
  }

  return (
    <div className="vacation-detail">
      <div className="container">
        <div className="vacation-detail-header">
          <img src={vacation.image} alt={vacation.title} className="detail-image" />
          <div className="detail-header-content">
            <h2>{vacation.title}</h2>
            <p className="detail-price">{vacation.price}</p>
            <p className="detail-location">{vacation.location} • {vacation.duration}</p>
          </div>
        </div>
        
        <div className="vacation-detail-body">
          <div className="detail-description">
            <h3>Beschrijving</h3>
            <p>{vacation.longDescription}</p>
          </div>
          
          <div className="detail-highlights">
            <h3>Highlights</h3>
            <ul>
              {vacation.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>
          
          <div className="booking-section">
            <h3>Boek deze vakantie</h3>
            <p>Klaar om deze prachtige vakantie te boeken? Reserveer nu uw plek!</p>
            <Link to={`/booking/${vacation.id}`} className="book-now-btn">
              Boek nu
            </Link>
          </div>
          
          <ReviewSystem vacationId={vacation.id} />
        </div>
      </div>
    </div>
  );
}

export default VacationDetail;
