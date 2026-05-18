export default function Navigation() {
  return (
    <nav className="navigation">
      <div className="nav-inner">
        <a href="/" className="nav-logo">AK</a>
        <div className="nav-links">
          <a href="/" className="nav-link">Work</a>
          <a href="#about" className="nav-link">About</a>
        </div>
        <button className="nav-theme-toggle" id="theme-toggle">🌙</button>
      </div>
    </nav>
  )
}
