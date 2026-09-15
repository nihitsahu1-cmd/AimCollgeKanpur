import clinicData from "../data/clinicData";

function Hero() {
  return (
    <section id="home" className="hero-section section-padding">

      <div className="container">

        <div className="row align-items-center">

          {/* Left Content */}
          <div className="col-lg-6 fade-in">

            <span className="badge bg-primary mb-3">
              <i className="bi bi-shield-check me-2"></i>
              Trusted Healthcare
            </span>

            <h1 className="display-4 fw-bold">
              Your Health, <span className="text-primary">Our Priority</span>
            </h1>

            <p className="lead text-muted mt-3">
              Compassionate care, experienced doctors and modern medical support,
              all in one comfortable clinic close to you.
            </p>

            <div className="mt-4">

              <a
                href="#appointment"
                className="btn btn-primary btn-lg me-2"
              >
                <i className="bi bi-calendar-check me-2"></i>
                Book Appointment
              </a>

              <a
                href={`tel:${clinicData.phone}`}
                className="btn btn-outline-primary btn-lg"
              >
                <i className="bi bi-telephone me-2"></i>
                Call Now
              </a>

            </div>

          </div>


          {/* Right Side */}
          <div className="col-lg-6 text-center mt-5 mt-lg-0">
            <div className="hero-image-box slide-up">
              <img src="/hero1.jpg" alt="Doctor providing a patient consultation" />
              <div className="hero-trust-card">
                <i className="bi bi-heart-pulse-fill"></i>
                <span><strong>Patient-first care</strong><small>Here when you need us</small></span>
              </div>
            </div>
            <div className="emergency-line mt-3">
              <i className="bi bi-telephone-outbound-fill me-2"></i>
              Emergency care: <a href={`tel:${clinicData.emergency}`}>{clinicData.emergency}</a>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;