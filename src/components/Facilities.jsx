import { facilities } from "../data/collegeData";

function Facilities() {
  return (
    <section
      id="facilities"
      className="section-padding light-section"
    >
      <div className="container">

        {/* Section Heading */}
        <div className="text-center section-heading">

          <p className="section-kicker">
            CAMPUS LIFE
          </p>

          <h2 className="section-title">
            Facilities That Support Your Growth
          </h2>

        </div>

        {/* Facilities Cards */}
        <div className="row g-4">

          {facilities.map(
            ([name, description, icon]) => (
              <div
                className="col-md-6 col-lg-4"
                key={name}
              >

                <div className="facility-card ui-card">

                  {/* Facility Icon */}
                  <i
                    className={`bi ${icon}`}
                  ></i>

                  {/* Facility Details */}
                  <div>

                    <h3>
                      {name}
                    </h3>

                    <p>
                      {description}
                    </p>

                  </div>

                </div>

              </div>
            )
          )}

        </div>

      </div>
    </section>
  );
}

export default Facilities;