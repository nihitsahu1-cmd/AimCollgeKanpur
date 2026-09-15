import clinicData from "../data/clinicData";

function WhyChooseUs() {
  const reasons = clinicData.about.points.map((point, index) => ({
    title: point,
    icon: ["bi-person-badge", "bi-heart-pulse", "bi-wallet2", "bi-people"][index]
  }));

  return (
    <section className="section-padding">
      <div className="container">
        <div className="section-heading text-center mb-5">
          <span className="section-kicker">WHY AIM CLINIC</span>
          <h2 className="section-title mt-2">Care that puts patients first</h2>
          <p className="muted-text">Reliable medical guidance in a warm, respectful environment.</p>
        </div>
        <div className="row g-4 justify-content-center">
          {reasons.map((reason) => (
            <div className="col-sm-6 col-lg-3" key={reason.title}>
              <div className="feature-card text-center h-100">
                <i className={`bi ${reason.icon} feature-icon`}></i>
                <h3>{reason.title}</h3>
                <p className="muted-text mb-0">Thoughtful care from consultation through recovery.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;