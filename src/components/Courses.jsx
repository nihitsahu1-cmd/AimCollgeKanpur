import { useState } from "react";
import { college } from "../data/collegeData";

const courseData = {
  ug: [
    {
      name: "B.A.",
      subjects: "Bachelor of Arts",
      duration: "3 Years",
    },
    {
      name: "B.Com.",
      subjects: "Bachelor of Commerce",
      duration: "3 Years",
    },
    {
      name: "B.B.A.",
      subjects: "Bachelor of Business Administration",
      duration: "3 Years",
    },
    {
      name: "B.C.A.",
      subjects: "Bachelor of Computer Applications",
      duration: "3 Years",
    },
    {
      name: "LLB",
      subjects: "Bachelor of Laws",
      duration: "3 Years",
    },
    {
      name: "BALLB",
      subjects: "Bachelor of Arts + Bachelor of Laws",
      duration: "5 Years",
    },
    {
      name: "B.Sc. Nursing",
      subjects: "Bachelor of Science in Nursing",
      duration: "4 Years",
    },
    {
      name: "B.Ed.",
      subjects: "Bachelor of Education",
      duration: "2 Years",
    },
    {
      name: "BTC",
      subjects: "Basic Training Certificate",
      duration: "2 Years",
    },
  ],

  pg: [
    {
      name: "M.Sc.",
      subjects: "Master of Science",
      duration: "2 Years",
    },
    {
      name: "M.A.",
      subjects: "Master of Arts",
      duration: "2 Years",
    },
  ],

  professional: [
    {
      name: "ITI",
      subjects: "Industrial Training Institute",
      duration: "1-2 Years",
    },
    {
      name: "GNM",
      subjects: "General Nursing and Midwifery",
      duration: "3 Years",
    },
  ],
};

const tabs = [
  ["ug", "UG Programs"],
  ["pg", "PG Programs"],
  ["professional", "Professional Courses"],
];

function Courses() {
  const [activeTab, setActiveTab] = useState("ug");

  return (
    <section id="courses" className="section-padding">
      <div className="container">

        {/* Section Heading */}
        <div className="d-md-flex justify-content-between align-items-end section-heading">

          <div>
            <p className="section-kicker">
              ACADEMIC PROGRAMS
            </p>

            <h2 className="section-title">
              Courses We Offer
            </h2>
          </div>

          {/* Apply Online Button */}
          <a
            href={college.admissionUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-primary-custom"
          >
            Apply Online
            <i className="bi bi-box-arrow-up-right ms-2"></i>
          </a>

        </div>


        {/* Course Tabs */}
        <div className="course-tabs mb-4">

          {tabs.map(([key, label]) => (
            <button
              type="button"
              key={key}
              className={`course-tab ${
                activeTab === key ? "active" : ""
              }`}
              onClick={() => setActiveTab(key)}
            >
              {label}
            </button>
          ))}

        </div>


        {/* Course Cards */}
        <div className="row g-4">

          {courseData[activeTab].map((course) => (
            <div
              className="col-md-6 col-lg-3"
              key={course.name}
            >

              <div className="course-card ui-card h-100">

                {/* Course Icon */}
                <div className="course-icon">
                  <i className="bi bi-mortarboard-fill"></i>
                </div>

                {/* Course Name */}
                <h3>
                  {course.name}
                </h3>

                {/* Course Description */}
                <p>
                  {course.subjects}
                </p>

                {/* Course Details */}
                <div className="course-meta">

                  <span>
                    <i className="bi bi-clock me-1"></i>
                    {course.duration}
                  </span>

                  <a
                    href={college.admissionUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Apply Now
                    <i className="bi bi-arrow-right ms-1"></i>
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Courses;