import clinicData from "../data/clinicData";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-lg-5"><h4><i className="bi bi-heart-pulse-fill me-2"></i>{clinicData.clinicName}</h4><p className="footer-muted mt-3">{clinicData.shortDescription}</p><p className="footer-muted fst-italic">{clinicData.tagline}</p></div>
          <div className="col-6 col-lg-3"><h5>Quick Links</h5><ul className="list-unstyled footer-links"><li><a href="#home">Home</a></li><li><a href="#about">About</a></li><li><a href="#services">Services</a></li><li><a href="#doctors">Doctors</a></li><li><a href="#appointment">Appointment</a></li><li><a href="#contact">Contact</a></li></ul></div>
          <div className="col-6 col-lg-4"><h5>Services</h5><ul className="list-unstyled footer-links">{clinicData.services.slice(0, 4).map((service) => <li key={service.id}><a href="#services">{service.title}</a></li>)}</ul></div>
        </div>
        <div className="footer-contact mt-4 pt-4"><span><i className="bi bi-geo-alt-fill me-2"></i>{clinicData.address}</span><a href={`tel:${clinicData.phone}`}><i className="bi bi-telephone-fill me-2"></i>{clinicData.phone}</a><a href={`mailto:${clinicData.email}`}><i className="bi bi-envelope-fill me-2"></i>{clinicData.email}</a></div>
      </div>
      <div className="footer-bottom"><div className="container py-3"><small>© 2026 {clinicData.clinicName}. All Rights Reserved.</small></div></div>
    </footer>
  );
}

export default Footer;