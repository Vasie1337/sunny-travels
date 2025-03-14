import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/BookingForm.css';

function BookingForm({ vacations }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [vacation, setVacation] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    travelers: 2,
    departureDate: '',
    message: ''
  });

  useEffect(() => {
    if (id) {
      const selectedVacation = vacations.find(v => v.id === parseInt(id));
      setVacation(selectedVacation);
    }
    
    // Set default departure date to 2 weeks from now
    const defaultDate = new Date();
    defaultDate.setDate(defaultDate.getDate() + 14);
    setFormData(prev => ({
      ...prev,
      departureDate: defaultDate.toISOString().split('T')[0]
    }));
  }, [id, vacations]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, we would send this data to a server
    console.log('Booking submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after 5 seconds and redirect to home
    setTimeout(() => {
      setFormSubmitted(false);
      navigate('/');
    }, 5000);
  };

  if (formSubmitted) {
    return (
      <div className="booking-confirmation container">
        <div className="confirmation-content">
          <h2>Bedankt voor uw boeking!</h2>
          <p>We hebben uw boeking ontvangen en sturen een bevestiging naar {formData.email}.</p>
          <p>U wordt over enkele seconden doorgestuurd naar de homepagina.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="booking-form-container container">
      <h2>Boek uw vakantie {vacation ? `naar ${vacation.title}` : ''}</h2>
      
      {vacation && (
        <div className="selected-vacation">
          <img src={vacation.image} alt={vacation.title} />
          <div className="selected-vacation-details">
            <h3>{vacation.title}</h3>
            <p>{vacation.price}</p>
          </div>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">Voornaam</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="lastName">Achternaam</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="phone">Telefoonnummer</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="travelers">Aantal personen</label>
            <select
              id="travelers"
              name="travelers"
              value={formData.travelers}
              onChange={handleChange}
              required
            >
              {[1, 2, 3, 4, 5, 6].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="departureDate">Vertrekdatum</label>
            <input
              type="date"
              id="departureDate"
              name="departureDate"
              value={formData.departureDate}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Speciale wensen (optioneel)</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
          />
        </div>
        
        <button type="submit" className="book-button">Boek nu</button>
      </form>
    </div>
  );
}

export default BookingForm;
