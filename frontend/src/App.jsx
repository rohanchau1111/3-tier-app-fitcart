import Home from './app/App';
import './App.css';

function App() {
  return (
    <div>
      <header className="amazon-header">
        <div className="header-logo">
          <span className="logo-text">FitCart</span>
          <span className="logo-sub">.in</span>
        </div>

        <div className="header-search">
          <select className="search-category">
            <option>All</option>
            <option>Exercises</option>
            <option>Records</option>
          </select>
          <input type="text" placeholder="Search gym records..." className="search-input" />
          <button className="search-btn">🔍</button>
        </div>

        <div className="header-right">
          <div className="header-nav-item">
            <span className="nav-line1">Hello, Athlete</span>
            <span className="nav-line2">Account &amp; Lists</span>
          </div>
          <div className="header-nav-item">
            <span className="nav-line1">Returns</span>
            <span className="nav-line2">&amp; Orders</span>
          </div>
          <div className="header-nav-item cart-item">
            <span className="cart-icon">🛒</span>
            <span className="nav-line2">Cart</span>
          </div>
        </div>
      </header>

      <nav className="amazon-nav">
        <span className="nav-all">☰ All</span>
        <span>Today's Deals</span>
        <span>Customer Service</span>
        <span>Fitness</span>
        <span>Strength Training</span>
        <span>Cardio</span>
        <span>New Arrivals</span>
        <span>Sell</span>
      </nav>

      <div className="amazon-banner">
        <h1>🏋️ FitCart — Gym Records Store</h1>
        <p>No Pain. No Gain. Track Every Rep.</p>
        <div className="banner-stats">
          <div className="banner-stat">
            <div className="banner-stat-value">💪</div>
            <div className="banner-stat-label">Strength</div>
          </div>
          <div className="banner-stat">
            <div className="banner-stat-value">🔥</div>
            <div className="banner-stat-label">Intensity</div>
          </div>
          <div className="banner-stat">
            <div className="banner-stat-value">🏆</div>
            <div className="banner-stat-label">Results</div>
          </div>
        </div>
      </div>

      <Home />
    </div>
  );
}

export default App;
