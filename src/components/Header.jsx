import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <Link to="/" className="logo">
          <h1>Sunny Travels</h1>
          <span className="tagline">Jouw ideale vakantie begint hier</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
