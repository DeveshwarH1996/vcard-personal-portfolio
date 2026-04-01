
export default function Resume() {
  return (
    <>
      <article className="resume active" data-page="resume">

        <header>
          <h2 className="h2 article-title">Resume</h2>
        </header>

        <section className="timeline">

          <div className="title-wrapper">
            <div className="icon-box">
              <ion-icon name="book-outline"></ion-icon>
            </div>

            <h3 className="h3">Education</h3>
          </div>

          <ol className="timeline-list">

            <li className="timeline-item">

              <h4 className="h4 timeline-item-title">Ph.D. & M.S., Electrical Engineering</h4>

              <span>2019 — 2026 (Expected)</span>

              <p className="timeline-text">
                North Carolina State University. Specializing in computer vision, cooperative perception, and advanced AI edge deployment.
              </p>

            </li>

            <li className="timeline-item">

              <h4 className="h4 timeline-item-title">Bachelor of Technology, Electrical Engineering</h4>

              <span>2014 — 2018</span>

              <p className="timeline-text">
                Amrita Vishwa Vidhyapeetham, India.
              </p>

            </li>

          </ol>

        </section>

        <section className="timeline">

          <div className="title-wrapper">
            <div className="icon-box">
              <ion-icon name="book-outline"></ion-icon>
            </div>

            <h3 className="h3">Experience</h3>
          </div>

          <ol className="timeline-list">

            <li className="timeline-item">

              <h4 className="h4 timeline-item-title">Lead Graduate Research Assistant</h4>

              <span>June 2019 — Present</span>

              <p className="timeline-text">
                EcoPRT Autonomous Vehicle Lab, NC State. Leading software and hardware teams. Developing prediction modules and managing testing pipelines to pass IRB requirements.
              </p>

            </li>

            <li className="timeline-item">

              <h4 className="h4 timeline-item-title">President of Graduate Student Body</h4>

              <span>May 2021 — April 2023</span>

              <p className="timeline-text">
                GSA, NC State University. Advocated for graduate student benefits and restructured funding architectures for special interest groups.
              </p>

            </li>

            <li className="timeline-item">

              <h4 className="h4 timeline-item-title">Student Researcher</h4>

              <span>Jan 2019 — June 2019</span>

              <p className="timeline-text">
                EcoPRT Autonomous Vehicle Lab. Implemented emergency braking controllers and computer vision tracking using ROS and Point Cloud Library.
              </p>

            </li>

          </ol>

        </section>

        <section className="skill">

          <h3 className="h3 skills-title">My skills</h3>

          <ul className="skills-list content-card">

            <li className="skills-item">

              <div className="title-wrapper">
                <h5 className="h5">Python & C++</h5>
                <data value="95">95%</data>
              </div>

              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: '95%' }}></div>
              </div>

            </li>

            <li className="skills-item">

              <div className="title-wrapper">
                <h5 className="h5">Computer Vision & Deep Learning</h5>
                <data value="90">90%</data>
              </div>

              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: '90%' }}></div>
              </div>

            </li>

            <li className="skills-item">

              <div className="title-wrapper">
                <h5 className="h5">Robotics & ROS</h5>
                <data value="85">85%</data>
              </div>

              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: '85%' }}></div>
              </div>

            </li>

            <li className="skills-item">

              <div className="title-wrapper">
                <h5 className="h5">Hardware Design (PCB)</h5>
                <data value="75">75%</data>
              </div>

              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: '75%' }}></div>
              </div>

            </li>

          </ul>

        </section>

      </article>

    </>
  );
}
