export default function Repositories() {
  return (
    <>
      <article className="portfolio active" data-page="repositories">

        <header>
          <h2 className="h2 article-title">Repositories & Open Source</h2>
        </header>

        <section className="projects">

          <ul className="project-list">

            <li className="project-item active">
              <a href="https://github.com/DeveshwarH1996" target="_blank" rel="noreferrer">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="logo-github"></ion-icon>
                  </div>
                  <img src="/vcard-personal-portfolio/assets/images/simplescreenrecorder-2025-11-15_16.41.31.gif" alt="RinneFormer ROS Package" loading="lazy" />
                </figure>
                <h3 className="project-title">RinneFormer Cooperative Perception</h3>
                <p className="project-category">ROS 2 / C++ / Python</p>
                <p className="project-category" style={{marginTop: "10px", fontSize: "14px", textTransform: "none", color: "var(--light-gray)" }}>
                  Implementation of cross-attention algorithms for vehicle-to-vehicle perception sharing and fusion.
                </p>
              </a>
            </li>

            <li className="project-item active">
              <a href="https://github.com/DeveshwarH1996" target="_blank" rel="noreferrer">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="logo-github"></ion-icon>
                  </div>
                  <img src="/vcard-personal-portfolio/assets/images/IMG_1234.jpg" alt="EcoPRT Vehicle" loading="lazy" style={{ objectFit: 'cover' }} />
                </figure>
                <h3 className="project-title">EcoPRT Autonomous Software Stack</h3>
                <p className="project-category">ROS 1 / C++</p>
                <p className="project-category" style={{marginTop: "10px", fontSize: "14px", textTransform: "none", color: "var(--light-gray)" }}>
                  Core prediction, tracking, and emergency braking modules deployed directly onto the EcoPRT prototype vehicles.
                </p>
              </a>
            </li>

          </ul>

        </section>

      </article>

    </>
  );
}
