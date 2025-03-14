import { Link } from 'react-router-dom';
import '../styles/VacationCard.css';

function VacationCard({ vacation }) {
  return (
    <div className="vacation-card">
      <div className="vacation-card-image">
        <img src={vacation.image} alt={vacation.title} />
      </div>
      <div className="vacation-card-content">
        <h3>{vacation.title}</h3>
        <p className="description">{vacation.shortDescription}</p>
        <p className="price">{vacation.price}</p>
        <p className="location">{vacation.location} • {vacation.duration}</p>
        <Link to={`/vacation/${vacation.id}`} className="view-more-btn">
          Bekijk meer
        </Link>
      </div>
    </div>
  );
}

export default VacationCard;
