import { newsItems } from "../data/collegeData";

function News() {
  return <section id="news" className="section-padding light-section">
    <div className="container"><div className="text-center section-heading">
        <p className="section-kicker">STAY INFORMED</p>
        <h2 className="section-title">Latest News & Updates</h2>
        </div>
        <div className="row g-3">{newsItems.map((title) => 
            <div className="col-md-6 col-lg" key={title}><article className="news-card">
                <span className="news-date">2026 <i className="bi bi-arrow-up-right" />
                </span><h3>{title}</h3><p>Read the latest update from Purshottam Sri Ram P.G. College.</p>
                <a href="#contact">Read more <i className="bi bi-arrow-right" /></a></article></div>)}
                </div>
                </div>
                </section>;
}

export default News;