function About() {
  const courses = [
    "B.A.",
    "B.Com.",
    "B.B.A.",
    "B.C.A.",
    "M.Sc.",
    "LLB",
    "BALLB",
    "M.A.",
    "ITI",
    "GNM",
    "B.Sc. Nursing",
    "B.Ed.",
    "BTC",
  ];

  return (
    <section
      id="about"
      className="section-padding about-section"
    >
      <div className="container">

        {/* ================= ABOUT INSTITUTION ================= */}
        <div className="row align-items-center g-5">

          {/* About Image */}
          <div className="col-lg-5">
            <div className="about-image-wrap">

              <img
                src="/building.jpg"
                alt="Dr. Dharmendra Singh B.S Mahavidyalaya Campus"
                className="about-image"
              />

              <div className="experience-badge">
                <strong>15+</strong>

                <span>
                  Years of
                  <br />
                  Excellence
                </span>
              </div>

            </div>
          </div>

          {/* About Content */}
          <div className="col-lg-7">

            <p className="section-kicker">
              ABOUT OUR INSTITUTION
            </p>

            <h2 className="section-title">
              About Dr. Dharmendra Singh B.S Mahavidyalaya
            </h2>

            <p className="lead text-muted">
              Dr. Dharmendra Singh B.S Mahavidyalaya,
              AIM Group of Institution, is committed to
              providing quality education and developing
              the academic, professional and overall
              personality of students. Located at Raipur,
              Patara, Ghatampur, Kanpur Nagar, Uttar Pradesh
              - 209308, the institution aims to provide
              accessible and career-oriented education to
              students from nearby rural and urban areas.
            </p>

            {/* College Features */}
            <div className="row g-3 mt-3">

              {[
                "Quality Education",
                "Experienced Faculty",
                "Modern Facilities",
                "Career-Oriented Courses",
              ].map((item) => (

                <div
                  className="col-sm-6"
                  key={item}
                >
                  <div className="check-item">

                    <i className="bi bi-check-circle-fill"></i>

                    {item}

                  </div>
                </div>

              ))}

            </div>

            {/* Contact / Courses Button */}
            <a
              href="#courses"
              className="btn btn-primary-custom mt-4"
            >
              Explore Our Courses

              <i className="bi bi-arrow-right ms-2"></i>
            </a>

          </div>

        </div>


        {/* ================= MANAGER'S MESSAGE ================= */}
        <div className="manager-message mt-5 pt-5">

          <div className="row align-items-center g-4">

            {/* Manager Photo */}
            <div className="col-lg-4 text-center">

              <div className="manager-image-wrap">

                <img
                  src="/manager.jpg"
                  alt="Manager of Dr. Dharmendra Singh B.S Mahavidyalaya"
                  className="manager-image"
                />

              </div>

            </div>


            {/* Manager Message */}
            <div className="col-lg-8">

              <p className="section-kicker">
                MANAGER'S MESSAGE
              </p>

              <h3 className="section-title">
                Message from the Manager
              </h3>

              <div className="manager-quote">

                <i className="bi bi-quote"></i>

                <p>
                  Dear Students, Parents and Visitors,
                </p>

                <p>
                  It is my pleasure to welcome you to
                  Dr. Dharmendra Singh B.S Mahavidyalaya.
                  Our institution is committed to providing
                  quality education in a supportive and
                  disciplined environment.
                </p>

                <p>
                  We believe that education is not only about
                  academic success but also about developing
                  confidence, character, skills and responsible
                  citizens for the future.
                </p>

                <p className="mb-0">
                  We look forward to supporting every student
                  in achieving their academic and career goals.
                </p>

              </div>

              {/* Manager Name */}
              <div className="manager-details mt-3">

                <h5 className="mb-1">
                  Manager Name
                </h5>

                <p className="text-muted mb-0">
                  Manager, AIM Group of Institution
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;