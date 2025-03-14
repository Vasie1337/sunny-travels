import { useState } from 'react';
import VacationCard from './VacationCard';
import '../styles/VacationList.css';

function VacationList({ vacations }) {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredVacations = vacations.filter(vacation => 
    vacation.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    vacation.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vacation.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="vacation-list-container">
      <div className="search-container">
        <input 
          type="text" 
          placeholder="Zoek op bestemming of land..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
      
      {filteredVacations.length === 0 ? (
        <div className="no-results">
          <p>Geen vakanties gevonden voor "{searchTerm}". Probeer een andere zoekopdracht.</p>
        </div>
      ) : (
        <div className="vacation-grid">
          {filteredVacations.map(vacation => (
            <VacationCard key={vacation.id} vacation={vacation} />
          ))}
        </div>
      )}
    </div>
  );
}

export default VacationList;
