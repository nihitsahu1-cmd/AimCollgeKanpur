
function Gallery() {
  const galleryItems = [
    ["Campus", "/campus.jpg"],
    ["Classroom", "classroom.jpg"],
    ["Library", "library.jpg"],
    ["Laboratory", "practical.jpg"],
    ["Students", "students.jpg"],
    ["Campus Activities", "playground.jpg"],
  ];

  return (
    <section id="gallery" className="section-padding">
      <div className="container">

        {/* Section Heading */}
        <div className="d-flex justify-content-between align-items-end section-heading">

          <div>
            <p className="section-kicker">
              CAMPUS MOMENTS
            </p>

            <h2 className="section-title">
              Life at Dr. Dharmendra Singh B.S Mahavidyalaya
            </h2>
          </div>

          <span className="text-muted d-none d-md-block">
            Learning, friendship, and memories.
          </span>

        </div>


        {/* Gallery */}
        <div className="row g-3">

          {galleryItems.map(([title, image]) => (

            <div
              className="col-6 col-lg-4"
              key={title}
            >

              <div className="gallery-item">

                {/* Gallery Image */}
                <img
                  src={image}
                  alt={title}
                  className="img-fluid"
                />

                {/* Image Overlay */}
                <div>
                  <span>
                    {title}
                  </span>

                  <i className="bi bi-plus-lg"></i>
                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Gallery;

