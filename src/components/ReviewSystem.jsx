import { useState, useEffect } from 'react';
import '../styles/ReviewSystem.css';

function ReviewSystem({ vacationId }) {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    name: '',
    rating: 5,
    comment: ''
  });
  const [submitted, setSubmitted] = useState(false);

  // Load existing reviews from localStorage on component mount
  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem(`reviews_${vacationId}`)) || [];
    setReviews(storedReviews);
  }, [vacationId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewReview(prev => ({
      ...prev,
      [name]: name === 'rating' ? parseInt(value) : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create a new review with timestamp
    const reviewToAdd = {
      ...newReview,
      id: Date.now(),
      date: new Date().toLocaleDateString()
    };
    
    // Add to reviews array
    const updatedReviews = [...reviews, reviewToAdd];
    setReviews(updatedReviews);
    
    // Save to localStorage
    localStorage.setItem(`reviews_${vacationId}`, JSON.stringify(updatedReviews));
    
    // Reset form and show confirmation
    setNewReview({ name: '', rating: 5, comment: '' });
    setSubmitted(true);
    
    // Hide confirmation after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  // Calculate average rating
  const averageRating = reviews.length 
    ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1) 
    : 'Nog geen beoordelingen';

  return (
    <div className="review-system">
      <h3>Recensies & Beoordelingen</h3>
      
      <div className="average-rating">
        <div className="rating-summary">
          <span className="avg-rating">{averageRating}</span>
          <span className="total-reviews">({reviews.length} beoordelingen)</span>
        </div>
        {reviews.length > 0 && (
          <div className="rating-stars">
            {[1, 2, 3, 4, 5].map(star => (
              <span key={star} className={star <= Math.round(averageRating) ? "star filled" : "star"}>★</span>
            ))}
          </div>
        )}
      </div>
      
      <div className="reviews-list">
        {reviews.length === 0 ? (
          <p className="no-reviews">Er zijn nog geen beoordelingen voor deze vakantie. Wees de eerste!</p>
        ) : (
          reviews.map(review => (
            <div key={review.id} className="review-item">
              <div className="review-header">
                <div className="review-name">{review.name}</div>
                <div className="review-date">{review.date}</div>
              </div>
              <div className="review-rating">
                {[1, 2, 3, 4, 5].map(star => (
                  <span key={star} className={star <= review.rating ? "star filled" : "star"}>★</span>
                ))}
              </div>
              <div className="review-comment">{review.comment}</div>
            </div>
          ))
        )}
      </div>
      
      <div className="review-form-container">
        <h4>Schrijf een beoordeling</h4>
        {submitted && (
          <div className="submission-confirmation">
            Bedankt voor uw beoordeling!
          </div>
        )}
        <form onSubmit={handleSubmit} className="review-form">
          <div className="form-group">
            <label htmlFor="name">Naam</label>
            <input
              type="text"
              id="name"
              name="name"
              value={newReview.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="rating">Beoordeling</label>
            <div className="rating-input">
              <select
                id="rating"
                name="rating"
                value={newReview.rating}
                onChange={handleChange}
                required
              >
                <option value="5">5 Sterren - Uitstekend</option>
                <option value="4">4 Sterren - Zeer goed</option>
                <option value="3">3 Sterren - Goed</option>
                <option value="2">2 Sterren - Matig</option>
                <option value="1">1 Ster - Slecht</option>
              </select>
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="comment">Uw ervaring</label>
            <textarea
              id="comment"
              name="comment"
              value={newReview.comment}
              onChange={handleChange}
              rows="4"
              required
            />
          </div>
          
          <button type="submit" className="submit-review-btn">Plaats beoordeling</button>
        </form>
      </div>
    </div>
  );
}

export default ReviewSystem;
