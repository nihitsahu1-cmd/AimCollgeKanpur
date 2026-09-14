import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Notice from "../components/Notice";
import About from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";
import Stats from "../components/Stats";
import Courses from "../components/Courses";
import Facilities from "../components/Facilities";
import Gallery from "../components/Gallery";
import News from "../components/News";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home({ isDarkMode, onToggleTheme }) {
  return <>
    <TopBar isDarkMode={isDarkMode} onToggleTheme={onToggleTheme} />
    <Header />
    <Navbar />
    <main>
    <Hero />
    <Notice />
    <About />
    <WhyChooseUs />
    <Stats />
    <Courses />
    <Facilities />
    <section className="affiliation-strip">
      <div className="container">
        <div><i className="bi bi-award-fill" />
        <span>CSJM University<strong>
          Affiliated University</strong>
          </span></div><div><i className="bi bi-patch-check-fill" />
          <span>UGC Recognized<strong>Quality Education</strong>
          </span></div><div><i className="bi bi-building-fill" />
          <span>Code: KN145<strong>
            Official College Code</strong>
            </span></div><div><i className="bi bi-people-fill" />
            <span>AIM GROUP OF 
          <strong>INSTITUTION</strong></span>
          </div></div>
          </section><Gallery /><News />
          <section id="admission" className="admission-cta">
            <div className="container d-md-flex justify-content-between align-items-center"><div>
              <p className="section-kicker">
                YOUR FUTURE STARTS HERE</p>
                <h2>Admission Open 2026-27</h2>
                <p>Start your journey toward a brighter future.</p>
                </div><div className="d-flex gap-2">
                  <a href="https://erp.psrpc.in/online_admission" target="_blank" rel="noreferrer" className="btn btn-light">Apply Online 
                  <i className="bi bi-arrow-up-right ms-2" /></a>
                  <a href="tel:9506012020" className="btn btn-outline-light">
                    Call Now</a></div></div></section><Contact />
                    </main><Footer />
                    <div className="floating-actions">
                      <a className="float-whatsapp" href="https://wa.me/9506012020" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                      <i className="bi bi-whatsapp" />
                      </a><a className="float-call" href="tel:9506012020" aria-label="Call">
                        <i className="bi bi-telephone-fill" /></a>
                        <a className="float-top" href="#hero" aria-label="Back to top">
                          <i className="bi bi-arrow-up" /></a></div></>;
}

export default Home;