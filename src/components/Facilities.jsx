import clinicData from "../data/clinicData";

function Facilities() {
  return (
    <section id="facilities" className="section-padding tinted-section">
      <div className="container">
        <div className="section-heading text-center mb-5">
          <span className="section-kicker">A COMFORTABLE CARE EXPERIENCE</span>
          <h2 className="section-title mt-2">Facilities built around you</h2>
          <p className="muted-text">Thoughtful details that make every visit easier.</p>
        </div>
        <div className="row g-4">
          {clinicData.facilities.map((facility) => (
            <div className="col-md-6 col-lg-3" key={facility.id}>
              <div className="facility-card h-100">
                <div className="facility-icon"><i className={`bi ${facility.icon}`}></i></div>
                <h3>{facility.title}</h3>
                <p className="muted-text mb-0">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Facilities;