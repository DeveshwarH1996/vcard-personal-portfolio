
export default function Sidebar() {
  return (
    <>
    <aside className="sidebar" data-sidebar>

      <div className="sidebar-info">

        <figure className="avatar-box">
          <img src="/vcard-personal-portfolio/assets/images/profile_picture.JPG" alt="Deveshwar Hariharan" width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Deveshwar Hariharan">Deveshwar Hariharan</h1>

          <p className="title">Robotics & Computer Vision Researcher</p>
        </div>

        <button className="info_more-btn" data-sidebar-btn>
          <span>Show Contacts</span>

          <ion-icon name="chevron-down"></ion-icon>
        </button>

      </div>

      <div className="sidebar-info_more">

        <div className="separator"></div>

        <ul className="contacts-list">

          <li className="contact-item">

            <div className="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>

              <a href="mailto:dhariha@ncsu.edu" className="contact-link">dhariha@ncsu.edu</a>
            </div>

          </li>

          <li className="contact-item">

            <div className="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>

              <address>Raleigh, NC, USA</address>
            </div>

          </li>

        </ul>

        <div className="separator"></div>

        <ul className="social-list">

          <li className="social-item">
            <a href="https://github.com/DeveshwarH1996" className="social-link" target="_blank">
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a href="https://linkedin.com/in/deveshwar-hariharan-12431b117" className="social-link" target="_blank">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a href="https://scholar.google.com/citations?user=f_6Y85wAAAAJ&hl=en" className="social-link" target="_blank">
              <ion-icon name="school-outline"></ion-icon>
            </a>
          </li>

        </ul>

        <div className="separator" style={{ margin: "20px 0" }}></div>

        <a href="/vcard-personal-portfolio/Deveshwar_resume_rs.pdf" download className="form-btn" style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", padding: "15px" }}>
          <ion-icon name="download-outline"></ion-icon>
          <span>Download CV</span>
        </a>

      </div>

    </aside>

    </>
  );
}
