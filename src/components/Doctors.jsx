import clinicData from "../data/clinicData";

function Doctors() {
  return (
    <section id="doctors" className="section-padding">

      <div className="container">

        {/* Section Heading */}
        <div className="text-center mb-5">

          <span className="section-kicker">
            OUR DOCTORS
          </span>

          <h2 className="section-title mt-2">
            Meet Our Doctors
          </h2>

          <p className="muted-text">
            Experienced and dedicated doctors committed to your health.
          </p>

        </div>


        {/* Doctors */}
        <div className="row g-4 justify-content-center">

          {clinicData.doctors.map((doctor) => (

            <div
              className="col-md-6 col-lg-4"
              key={doctor.id}
            >

              <div className="doctor-card h-100 slide-up">

                {/* Doctor Image */}
                <div className="doctor-image">

                  <img
                    src={doctor.image.startsWith("/") && doctor.image !== "/doctor1.jpg" && doctor.image !== "/doctor2.jpg" && doctor.image !== "/doctor3.jpg" ? doctor.image : `/hero${doctor.id}.jpg`}
                    alt={doctor.name}
                    className="img-fluid"
                  />

                </div>


                {/* Doctor Details */}
                <div className="card-body text-center p-4">

                  <h5 className="fw-bold">
                    {doctor.name}
                  </h5>

                  <p className="text-primary fw-semibold mb-1">
                    {doctor.qualification}
                  </p>

                  <p className="mb-1">
                    {doctor.specialization}
                  </p>

                    <p className="muted-text small">
                    {doctor.experience}
                  </p>


                  <a
                    href="#appointment"
                    className="btn btn-primary"
                  >
                    <i className="bi bi-calendar-check me-2"></i>
                    Book Appointment
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Doctors;