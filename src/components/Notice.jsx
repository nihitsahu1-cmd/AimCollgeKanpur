import { college } from "../data/collegeData";

function Notice() {
  return <div className="notice-bar">
    <div className="container d-flex align-items-center gap-3">
        <span className="notice-label">
            <i className="bi bi-megaphone-fill me-2" />Notice</span>
            <div className="notice-text">प्रवेश प्रारंभ! सत्र {college.session} 
                | Admission Open for all courses | M.Sc., M.A., B.Sc. IT, BCA, B.Lib, B.Ed |
                 CSJM University Affiliated | Contact: {college.phone} | {college.tagline} |
                  Code: {college.code}</div>
                  </div>
                  </div>;
}

export default Notice;