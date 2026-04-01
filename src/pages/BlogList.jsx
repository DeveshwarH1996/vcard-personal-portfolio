import { Link } from 'react-router-dom';

export default function BlogList() {
  return (
    <>
      <article className="blog" data-page="blog">

        <header>
          <h2 className="h2 article-title">Blog</h2>
        </header>

        <section className="blog-posts">

          <ul className="blog-posts-list">

            <li className="blog-post-item">
              <Link to="/blog/home-automation">

                <figure className="blog-banner-box">
                  <img src="./assets/images/home_automation_ha_esphome.png" alt="Home Automation Projects" loading="lazy" />
                </figure>

                <div className="blog-content">

                  <div className="blog-meta">
                    <p className="blog-category">Applications</p>
                    <span className="dot"></span>
                    <time dateTime="2023-10-15">Oct 15, 2023</time>
                  </div>

                  <h3 className="h3 blog-item-title">Home Automation Projects</h3>

                  <p className="blog-text">
                    A unified smart home ecosystem utilizing Home Assistant, ESPHome, and Ollama to control custom IoT devices and voice assistants.
                  </p>

                </div>

              </Link>
            </li>

            <li className="blog-post-item">
              <Link to="/blog/cat-feeder">

                <figure className="blog-banner-box">
                  <img src="./assets/images/automatic_cat_feeder_1774990554831.png" alt="Automatic Cat Feeder" loading="lazy" />
                </figure>

                <div className="blog-content">

                  <div className="blog-meta">
                    <p className="blog-category">Embedded Systems</p>
                    <span className="dot"></span>
                    <time dateTime="2020-06-20">Jun 20, 2020</time>
                  </div>

                  <h3 className="h3 blog-item-title">Automatic Cat Feeder</h3>

                  <p className="blog-text">
                    A custom engineered automated cat feeder utilizing perception algorithms to manage feeding times to ensure more sleep.
                  </p>

                </div>

              </Link>
            </li>

            <li className="blog-post-item">
              <Link to="/blog/line-robot">

                <figure className="blog-banner-box">
                  <img src="./assets/images/line_following_robot_1774990567343.png" alt="Line Following Robot" loading="lazy" />
                </figure>

                <div className="blog-content">

                  <div className="blog-meta">
                    <p className="blog-category">Robotics</p>
                    <span className="dot"></span>
                    <time dateTime="2019-12-10">Dec 10, 2019</time>
                  </div>

                  <h3 className="h3 blog-item-title">Line Following Robot</h3>

                  <p className="blog-text">
                    A high-speed robot engineered with Python and OpenCV to autonomously navigate a complex track without derailing.
                  </p>

                </div>

              </Link>
            </li>

            <li className="blog-post-item">
              <Link to="/blog/lane-drone">

                <figure className="blog-banner-box">
                  <img src="./assets/images/lane_following_drone_1774990581879.png" alt="Lane Following Drone" loading="lazy" />
                </figure>

                <div className="blog-content">

                  <div className="blog-meta">
                    <p className="blog-category">Robotics</p>
                    <span className="dot"></span>
                    <time dateTime="2019-05-15">May 15, 2019</time>
                  </div>

                  <h3 className="h3 blog-item-title">Lane Following Drone</h3>

                  <p className="blog-text">
                    An autonomous airborne drone built from scratch using ROS, Gazebo, and a Deep Learning CNN for lane detection.
                  </p>

                </div>

              </Link>
            </li>

          </ul>

        </section>

      </article>

    </>
  );
}
