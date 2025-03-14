import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// Import components
import Header from './components/Header'
import Footer from './components/Footer'

// Import pages
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'
import BookingPage from './pages/BookingPage'

// Import data
import vacations from './data/vacations'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage vacations={vacations} />} />
            <Route path="/vacation/:id" element={<DetailPage vacations={vacations} />} />
            <Route path="/booking/:id?" element={<BookingPage vacations={vacations} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
