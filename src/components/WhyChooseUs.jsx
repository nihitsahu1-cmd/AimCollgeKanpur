const reasons = [["Experienced Faculty",
     "Learn from dedicated teachers who bring subject expertise and mentorship.",
      "bi-person-workspace"], ["Modern Infrastructure",
         "Study in a welcoming campus with facilities designed for today’s learners.",
          "bi-buildings"], 
          ["Career-Oriented Courses", "Build practical skills through relevant programs and hands-on learning.", 
            "bi-briefcase"],
             ["Affordable Fees & Scholarship", "Access quality education with supportive fee and scholarship options.",
                 "bi-wallet2"], ["Holistic Development", "Grow through academics, sports, activities, and a vibrant student community.", "bi-stars"],
                  ["Recognized & Affiliated", "Earn a respected qualification through our CSJM-affiliated programs.", "bi-patch-check"]];

function WhyChooseUs() {
  return <section className="section-padding light-section">
    <div className="container">
        <div className="text-center section-heading">
            <p className="section-kicker">THE PSRPG ADVANTAGE</p>
            <h2 className="section-title">Why Choose Us</h2>
            <p className="text-muted">A strong foundation for your academic and professional future.
                </p>
                </div>
                <div className="row g-4">{reasons.map(([title, description, icon]) => 
                    <div className="col-md-6 col-lg-4" key={title}>
                        <div className="feature-card h-100">
                            <div className="feature-icon">
                                <i className={`bi ${icon}`} />
                                </div><h3>{title}</h3><p>{description}</p></div>
                                </div>)}
                                </div>
                                </div>
                                </section>;
}

export default WhyChooseUs;