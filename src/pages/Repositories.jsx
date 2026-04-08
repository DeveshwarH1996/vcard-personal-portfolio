import { Link } from 'react-router-dom';

export default function Repositories() {
  return (
    <>
      <article className="portfolio active" data-page="repositories">

        <header>
          <h2 className="h2 article-title">Repositories & Open Source</h2>
        </header>

        <section className="projects">

          <ul className="project-list">

            {/* RinneFormer Model Entry */}
            <li className="project-item active">
              <a href="https://github.com/DeveshwarH1996/Rinneformer" target="_blank" rel="noreferrer">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="logo-github"></ion-icon>
                  </div>
                  <img src="./assets/images/Rinneformer.png" alt="RinneFormer Model Architecture" loading="lazy" style={{ objectFit: 'cover' }} />
                </figure>
                <h3 className="project-title">RinneFormer Model Architecture</h3>
                <p className="project-category">PyTorch / Python / VLA</p>
                <p className="project-category" style={{ marginTop: "10px", fontSize: "14px", textTransform: "none", color: "var(--light-gray)" }}>
                  Core PyTorch implementation of the Transformer-based cross-attention network for vehicle-to-vehicle sensor fusion.
                </p>
              </a>
            </li>

            {/* Cooperative Perception Entry */}
            <li className="project-item active">
              <a href="https://github.com/DeveshwarH1996/Cooperative_Perception" target="_blank" rel="noreferrer">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="logo-github"></ion-icon>
                  </div>
                  <img src="./assets/images/simplescreenrecorder-2025-11-15_16.41.31.gif" alt="Cooperative Perception Package" loading="lazy" />
                </figure>
                <h3 className="project-title">Cooperative Perception for ROS</h3>
                <p className="project-category">ROS 2 / C++ / Python</p>
                <p className="project-category" style={{ marginTop: "10px", fontSize: "14px", textTransform: "none", color: "var(--light-gray)" }}>
                  Deployment package bridging the RinneFormer perception algorithms with real-time ROS 2 edge compute nodes and CARLA.
                </p>
              </a>
            </li>

            {/* EcoPRT Link Entry */}
            <li className="project-item active">
              <Link to="/blog/ecoprt-carla" style={{ display: "block" }}>
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="document-text-outline"></ion-icon>
                  </div>
                  <img src="./assets/images/EcoPRT.jpg" alt="EcoPRT Vehicle" loading="lazy" style={{ objectFit: 'cover' }} />
                </figure>
                <h3 className="project-title">EcoPRT Autonomous Software Stack</h3>
                <p className="project-category">Proprietary ROS 1 & 2 / Custom Hardware</p>
                <p className="project-category" style={{ marginTop: "10px", fontSize: "14px", textTransform: "none", color: "var(--light-gray)" }}>
                  Core prediction, tracking, and emergency braking modules deployed directly onto the EcoPRT prototype vehicles (Read Blog).
                </p>
              </Link>
            </li>

          </ul>

        </section>

      </article>

    </>
  );
}
