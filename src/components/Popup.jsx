import { useState } from "react";

function Popup() {
  const [show, setShow] = useState(true);

  if (!show) {
    return null;
  }

  return (
    <div
      className="modal show d-block"
      tabIndex="-1"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.7)",
      }}
    >
      <div className="modal-dialog modal-dialog-centered popup-modal">

        <div className="modal-content">

          {/* Close Button */}
          <div className="modal-header">
            <h5 className="modal-title">
              Admission Open 2026-27
            </h5>

            <button
              type="button"
              className="btn-close"
              onClick={() => setShow(false)}
              aria-label="Close"
            ></button>
          </div>

          {/* Admission Poster */}
          <div className="modal-body p-0 text-center">

            <img
              src="/add.jpg"
              alt="Admission Open 2026-27"
              className="popup-image"
            />

          </div>

          {/* Footer */}
          <div className="modal-footer justify-content-center">

            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setShow(false)}
            >
              Close
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Popup;