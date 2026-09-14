import { Link } from "react-router-dom";
const links = [
  ["Home", "#hero"],
  ["About Us", "#about"],
  ["Courses", "#courses"],
  ["Admissions", "#admission"],
  ["Facilities", "#facilities"],
  ["Academics", "#courses"],
  ["Gallery", "#gallery"],
  ["Latest News", "#news"],
  ["Contact", "#contact"],
];

function Navbar() {
  return (
    <nav className="navbar navbar-expand-xl college-navbar sticky-top">

      <div className="container">

        {/* Mobile Menu Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collegeNavbar"
          aria-controls="collegeNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list"></i>
        </button>

        {/* Navbar Menu */}
        <div
          className="collapse navbar-collapse"
          id="collegeNavbar"
        >

          <ul className="navbar-nav me-auto">

            {links.map(([label, href]) => (
              <li
                className="nav-item"
                key={label}
              >
                <a
                  className="nav-link"
                  href={href}
                >
                  {label}
                </a>
              </li>
            ))}

          </ul>

          {/* Login */}
          <Link className="login-link" to="/Login"
>
  <i className="bi bi-person-circle me-1"></i>
  Login
</Link>

          {/* Call Button */}
          <a
            className="call-btn"
            href="tel:9506012020"
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