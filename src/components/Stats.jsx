function Stats() {
  return (
    <section className="stats-section">
        <div className="container">
            <div className="row g-3">
                {["100000+", "13+", "25+", "120000+"].map((value, index) => (
                    <div className="col-6 col-lg-3" key={index}>
                        <div className="stat-box">
                            <h2>{value}</h2>
                            <p>{["Students Enrolled", "Courses Offered", "Expert Faculty",
                                 "Alumni Network"][index]}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}

export default Stats;