import { Link } from 'react-router-dom';

export default function Portfolio() {
  return (
    <>
      <article className="portfolio active" data-page="portfolio">

        <header>
          <h2 className="h2 article-title">Portfolio</h2>
        </header>

        <section className="projects">

          <ul className="filter-list">

            <li className="filter-item">
              <button className="active" data-filter-btn>All</button>
            </li>

            <li className="filter-item">
              <button data-filter-btn>Robotics</button>
            </li>

            <li className="filter-item">
              <button data-filter-btn>Applications</button>
            </li>

            <li className="filter-item">
              <button data-filter-btn>Embedded Systems</button>
            </li>

          </ul>

          <div className="filter-select-box">

            <button className="filter-select" data-select>

              <div className="select-value" data-selecct-value>Select category</div>

              <div className="select-icon">
                <ion-icon name="chevron-down"></ion-icon>
              </div>

            </button>

            <ul className="select-list">

              <li className="select-item">
                <button data-select-item>All</button>
              </li>

              <li className="select-item">
                <button data-select-item>Robotics</button>
              </li>

              <li className="select-item">
                <button data-select-item>Applications</button>
              </li>

              <li className="select-item">
                <button data-select-item>Embedded Systems</button>
              </li>

            </ul>

          </div>

          <ul className="project-list">

            <li className="project-item  active" data-filter-item data-category="applications">
              <Link to="/blog/home-automation">

                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img src="/vcard-personal-portfolio/assets/images/home_automation_ha_esphome.png" alt="Home Automation" loading="lazy" />
                </figure>

                <h3 className="project-title">Home Automation</h3>

                <p className="project-category">Applications</p>

              </Link>
            </li>

            <li className="project-item  active" data-filter-item data-category="embedded systems">
              <Link to="/blog/cat-feeder">

                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img src="/vcard-personal-portfolio/assets/images/automatic_cat_feeder_1774990554831.png" alt="Automatic Cat Feeder" loading="lazy" />
                </figure>

                <h3 className="project-title">Automatic Cat Feeder</h3>

                <p className="project-category">Embedded Systems</p>

              </Link>
            </li>

            <li className="project-item  active" data-filter-item data-category="robotics">
              <Link to="/blog/line-robot">

                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img src="/vcard-personal-portfolio/assets/images/line_following_robot_1774990567343.png" alt="Line Following Robot" loading="lazy" />
                </figure>

                <h3 className="project-title">Line Following Robot</h3>

                <p className="project-category">Robotics</p>

              </Link>
            </li>

            <li className="project-item  active" data-filter-item data-category="robotics">
              <Link to="/blog/lane-drone">

                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img src="/vcard-personal-portfolio/assets/images/lane_following_drone_1774990581879.png" alt="Lane Following Drone" loading="lazy" />
                </figure>

                <h3 className="project-title">Lane Following Drone</h3>

                <p className="project-category">Robotics</p>

              </Link>
            </li>

          </ul>

        </section>

      </article>

    </>
  );
}
