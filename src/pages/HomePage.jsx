import VacationList from '../components/VacationList';

function HomePage({ vacations }) {
  return (
    <div className="home-page">
      <div className="container">
        <div className="hero-section">
          <h2>Ontdek Jouw Perfecte Vakantie</h2>
          <p>Vind de bestemming van je dromen bij Sunny Travels</p>
        </div>
        <VacationList vacations={vacations} />
      </div>
    </div>
  );
}

export default HomePage;
