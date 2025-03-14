import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../styles/VacationCard.css';

function VacationCard({ vacation }) {
  const [averageRating, setAverageRating] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);
  
  // Load reviews from localStorage on component mount
  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem(`reviews_${vacation.id}`)) || [];
    if (storedReviews.length > 0) {
      const avgRating = storedReviews.reduce((sum, review) => sum + review.rating, 0) / storedReviews.length;
      setAverageRating(avgRating);
      setReviewCount(storedReviews.length);
    }
  }, [vacation.id]);

  return (
    <div className="vacation-card">
      <div className="vacation-card-image">
        <img src={vacation.image} alt={vacation.title} />
        {reviewCount > 0 && (
          <div className="rating-badge">
            <span className="rating-number">{averageRating.toFixed(1)}</span>
            <span className="rating-star">★</span>
          </div>
        )}
      </div>
      <div className="vacation-card-content">
        <h3>{vacation.title}</h3>
        <p className="description">{vacation.shortDescription}</p>
        
        {reviewCount > 0 ? (
          <div className="card-rating">
            {[1, 2, 3, 4, 5].map(star => (
              <span key={star} className={star <= Math.round(averageRating) ? "star filled" : "star"}>★</span>
            ))}
            <span className="review-count">({reviewCount})</span>
          </div>
        ) : (
          <div className="card-rating">
            <span className="no-reviews">Geen beoordelingen</span>
          </div>
        )}
        
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
