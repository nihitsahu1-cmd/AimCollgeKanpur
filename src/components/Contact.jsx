import { college } from "../data/collegeData";
import AdmissionForm from "./AdmissionForm";

function Contact() {
  return (
    <section
      id="contact"
      className="contact-section section-padding"
    >
      <div className="container">

        <div className="row g-5 align-items-start">

          {/* Contact Information */}
          <div className="col-lg-5">

            <p className="section-kicker">
              GET IN TOUCH
            </p>

            <h2 className="section-title">
              Let’s plan your next step.
            </h2>

            <p className="text-muted mb-4">
              Our admission team is ready to help you
              choose the right course for your future.
            </p>

            <div className="contact-list">

              {/* Campus Address */}
              <div>
                <i className="bi bi-geo-alt-fill"></i>

                <span>
                  <strong>Campus Address</strong>
                  {college.address}
                </span>
              </div>

              {/* Head Office */}
              <div>
                <i className="bi bi-building"></i>

                <span>
                  <strong>Head Office</strong>
                  {college.headOffice}
                </span>
              </div>

              {/* Phone */}
              <div>
                <i className="bi bi-telephone-fill"></i>

                <span>
                  <strong>Phone</strong>

                  <a href={`tel:${college.phone}`}>
                    {college.phone}
                  </a>

                  {" · "}

                  <a href={`tel:${college.alternatePhone}`}>
                    {college.alternatePhone}
                  </a>
                </span>
              </div>

              {/* Email */}
              <div>
                <i className="bi bi-envelope-fill"></i>

                <span>
                  <strong>Email</strong>

                  <a href={`mailto:${college.email}`}>
                    {college.email}
                  </a>
                </span>
              </div>

            </div>

            {/* WhatsApp Button */}
            <a
              className="btn btn-whatsapp mt-4"
              href={college.whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-whatsapp me-2"></i>
              Chat on WhatsApp
            </a>

          </div>

          {/* Admission Form */}
          <div className="col-lg-7">

            <AdmissionForm />

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;