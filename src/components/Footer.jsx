import { college } from "../data/collegeData";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        <div className="row g-4">

          {/* College Information */}
          <div className="col-lg-5">

            <div className="footer-brand">

              <img
                src="/Logo.png"
                alt="College logo"
              />

              <div>

                <h2>
                  {college.name}
                </h2>

                <p>
                  {college.hindiName}
                </p>

              </div>

            </div>

            <p className="footer-copy">
              A premier CSJM-affiliated institution
              committed to quality higher education
              and a brighter future.
            </p>

            <em>
              {college.tagline}
            </em>

          </div>

          {/* Quick Links */}
          <div className="col-6 col-lg-2">

            <h3>
              Quick Links
            </h3>

            <a href="#about">
              About Us
            </a>

            <a href="#courses">
              Courses
            </a>

            <a href="#facilities">
              Facilities
            </a>

            <a href="#contact">
              Contact
            </a>

          </div>

          {/* Courses */}
          <div className="col-6 col-lg-2">

            <h3>
              Courses
            </h3>

            <a href="#courses">
              UG Programs
            </a>

            <a href="#courses">
              PG Programs
            </a>

            <a href="#courses">
              Professional
            </a>

            <a
              href="https://erp.psrpc.in/online_admission"
              target="_blank"
              rel="noreferrer"
            >
              Admissions
            </a>

          </div>

          {/* Contact Information */}
          <div className="col-lg-3">

            <h3>
              Contact Information
            </h3>

            <p>
              <i className="bi bi-geo-alt me-2"></i>
              {college.address}
            </p>

            <p>
              <i className="bi bi-telephone me-2"></i>
              {college.phone}
            </p>

            <p>
              <i className="bi bi-envelope me-2"></i>
              {college.email}
            </p>

          </div>

        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">

          <span>
            © 2026 DR. DHARMENDRA SINGH B.S MAHAVIDYALAYA

          </span>

          <span>
                Developed by <a href="https://pinweb.in/" target="_blank" rel="noreferrer">PinWeb Pvt Ltd ❤️</a>
          </span>

        </div>

      </div>
    </footer>
  );
}

export default Footer;