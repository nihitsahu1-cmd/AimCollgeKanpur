import { useState } from "react";
import { allCourseNames } from "../data/collegeData";

function AdmissionForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    course: "",
    qualification: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

    setSubmitted(false);
    setError("");
  };

  // Handle form submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setSubmitted(false);
    setError("");

    try {
      const response = await fetch(
        "http://localhost:5000/api/enquiries",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send enquiry");
      }

      setSubmitted(true);

      // Clear form
      setFormData({
        fullName: "",
        mobile: "",
        email: "",
        course: "",
        qualification: "",
        message: "",
      });

    } catch (error) {
      console.error("Enquiry Error:", error);

      setError(
        "Unable to send enquiry. Please try again."
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-panel">

      {/* Heading */}
      <p className="section-kicker">
        START YOUR JOURNEY
      </p>

      <h2 className="section-title">
        Enquire About Admission
      </h2>

      {/* Success Message */}
      {submitted && (
        <div className="alert alert-success">
          <i className="bi bi-check-circle me-2"></i>
          Your enquiry has been submitted successfully.
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="alert alert-danger">
          <i className="bi bi-exclamation-circle me-2"></i>
          {error}
        </div>
      )}

      {/* Admission Form */}
      <form
        onSubmit={handleSubmit}
        className="row g-3"
      >

        {/* Full Name */}
        <div className="col-md-6">
          <label htmlFor="fullName">
            Full Name
          </label>

          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            value={formData.fullName}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        {/* Mobile Number */}
        <div className="col-md-6">
          <label htmlFor="mobile">
            Mobile Number
          </label>

          <input
            id="mobile"
            name="mobile"
            type="tel"
            pattern="[0-9]{10}"
            required
            value={formData.mobile}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        {/* Email */}
        <div className="col-md-6">
          <label htmlFor="email">
            Email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        {/* Course */}
        <div className="col-md-6">
          <label htmlFor="course">
            Interested Course
          </label>

          <select
            id="course"
            name="course"
            required
            value={formData.course}
            onChange={handleChange}
            className="form-select"
          >
            <option value="">
              Select a course
            </option>

            {allCourseNames.map((course) => (
              <option
                key={course}
                value={course}
              >
                {course}
              </option>
            ))}
          </select>
        </div>

        {/* Previous Qualification */}
        <div className="col-12">
          <label htmlFor="qualification">
            Previous Qualification
          </label>

          <input
            id="qualification"
            name="qualification"
            type="text"
            required
            value={formData.qualification}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        {/* Message */}
        <div className="col-12">
          <label htmlFor="message">
            Message
          </label>

          <textarea
            id="message"
            name="message"
            rows="3"
            value={formData.message}
            onChange={handleChange}
            className="form-control"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="col-12">
          <button
            className="btn btn-primary-custom"
            type="submit"
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit Enquiry"}

            {!loading && (
              <i className="bi bi-send ms-2"></i>
            )}
          </button>
        </div>

      </form>
    </div>
  );
}

export default AdmissionForm;

