function Hero() {
  return (
    <div
      id="hero"
      className="carousel slide hero-carousel"
      data-bs-ride="carousel"
    >

      {/* Carousel Indicators */}
      <div className="carousel-indicators">

        <button
          type="button"
          data-bs-target="#hero"
          data-bs-slide-to="0"
          className="active"
          aria-label="Slide 1"
        ></button>

        <button
          type="button"
          data-bs-target="#hero"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>

        <button
          type="button"
          data-bs-target="#hero"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>

      </div>

      {/* Carousel Items */}
      <div className="carousel-inner">

        {/* Slide 1 */}
        <div className="carousel-item active">

          <img
            src="/hero1.jpg"
            className="d-block w-100 hero-image"
            alt="College campus"
          />

          <div className="hero-overlay"></div>

          <div className="carousel-caption hero-content">

            <p className="hero-small">
             AIM GROUP OF INSTITUTION
            </p>

            <h1>
              BCA | BBA | Bs.c Nursing | LLB | B.Ed | B.Com  
              <br />

              <span>
                Career-Ready Programs
              </span>
            </h1>

            <p>
              Launch your professional career with our
              industry-aligned programs. Skilled faculty,
              modern labs, and practical training to make
              you job-ready.
            </p>

            <div className="mt-4">

              {/* Courses Button */}
              <a
                href="#courses"
                className="btn explore-btn"
              >
                Professional Courses

                <i className="bi bi-arrow-right ms-2"></i>
              </a>

              {/* Enquiry Button */}
              <a
                href="#contact"
                className="btn apply-btn"
              >
                Enquire Now

                <i className="bi bi-send ms-2"></i>
              </a>

            </div>

          </div>

        </div>

        {/* Slide 2 & 3 */}
        {[2, 3].map((number) => (

          <div
            className="carousel-item"
            key={number}
          >

            <img
              src={`/hero${number}.jpg`}
              className="d-block w-100 hero-image"
              alt="College activities"
            />

            <div className="hero-overlay"></div>

          </div>

        ))}

      </div>

      {/* Previous Button */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#hero"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>

      {/* Next Button */}
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#hero"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>

    </div>
  );
}

export default Hero;