import clinicData from "../data/clinicData";

function Navbar({ isDarkMode, onThemeToggle }) {
  return (
    <nav className="navbar navbar-expand-lg clinic-navbar sticky-top">
      <div className="container">

        {/* Logo */}
        <a className="navbar-brand fw-bold text-primary" href="#home" aria-label="AIM Clinic home">
          <i className="bi bi-heart-pulse-fill me-2"></i>
          AIM CLINIC
        </a>

        {/* Mobile Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
          aria-controls="navbarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div
          className="collapse navbar-collapse"
          id="navbarMenu"
        >
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#services">
                Services
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#doctors">
                Doctors
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#appointment">
                Appointment
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>

          </ul>

          <button
            type="button"
            className="btn theme-toggle ms-lg-3"
            onClick={onThemeToggle}
            title={isDarkMode ? "Switch to day mode" : "Switch to night mode"}
            aria-label={isDarkMode ? "Switch to day mode" : "Switch to night mode"}
          >
            <i className={`bi ${isDarkMode ? "bi-sun-fill" : "bi-moon-stars-fill"}`}></i>
          </button>

          {/* Call Button */}
          <a
            href={`tel:${clinicData.phone}`}
            className="btn btn-primary ms-lg-2"
          >
            <i className="bi bi-telephone-fill me-2"></i>
            Call Now
          </a>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;