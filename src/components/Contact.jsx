import clinicData from "../data/clinicData";

function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="section-heading text-center mb-5">
          <span className="section-kicker">WE ARE HERE TO HELP</span>
          <h2 className="section-title mt-2">Contact our clinic</h2>
          <p className="muted-text">Reach our team for appointments, directions or urgent support.</p>
        </div>
        <div className="row g-4">
          <div className="col-md-6 col-lg-3"><div className="contact-card h-100"><div className="contact-icon"><i className="bi bi-geo-alt-fill"></i></div><h3>Visit Us</h3><p className="muted-text mb-0">{clinicData.address}</p></div></div>
          <div className="col-md-6 col-lg-3"><div className="contact-card h-100"><div className="contact-icon"><i className="bi bi-telephone-fill"></i></div><h3>Call Us</h3><a href={`tel:${clinicData.phone}`}>{clinicData.phone}</a><a href={`tel:${clinicData.alternatePhone}`}>{clinicData.alternatePhone}</a></div></div>
          <div className="col-md-6 col-lg-3"><div className="contact-card h-100"><div className="contact-icon"><i className="bi bi-envelope-fill"></i></div><h3>Email Us</h3><a href={`mailto:${clinicData.email}`}>{clinicData.email}</a></div></div>
          <div className="col-md-6 col-lg-3"><div className="contact-card h-100"><div className="contact-icon"><i className="bi bi-clock-fill"></i></div><h3>Clinic Hours</h3><p className="muted-text mb-1">Mon-Sat: {clinicData.timings.mondayToSaturday}</p><p className="muted-text mb-0">Sun: {clinicData.timings.sunday}</p></div></div>
        </div>
        <div className="emergency-banner mt-4"><div><strong><i className="bi bi-exclamation-triangle-fill me-2"></i>Emergency availability</strong><span>Our team is available {clinicData.timings.emergency} for urgent care.</span></div><a className="btn btn-danger" href={`tel:${clinicData.emergency}`}><i className="bi bi-telephone-fill me-2"></i>Call Emergency</a></div>
      </div>
    </section>
  );
}

export default Contact;