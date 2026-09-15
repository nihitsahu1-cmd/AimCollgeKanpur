import clinicData from "../data/clinicData";

function Services() {
  return (
    <section id="services" className="section-padding tinted-section">

      <div className="container">

        <div className="section-heading text-center mb-5">
          <span className="section-kicker">CARE THAT COVERS MORE</span>
          <h2 className="section-title mt-2">Our Medical Services</h2>
          <p className="muted-text">Personalized healthcare for every stage of life.</p>
        </div>

        <div className="row g-4">

          {clinicData.services.map((service) => (

            <div className="col-md-6 col-lg-4" key={service.id}>

              <div className="service-card h-100 slide-up">

                <div className="card-body p-4">

                  <i
                    className={`bi ${service.icon} service-icon`}
                  ></i>

                  <h5 className="fw-bold mt-3">
                    {service.title}
                  </h5>

                  <p className="muted-text">
                    {service.description}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;