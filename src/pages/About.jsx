
export default function About() {
  return (
    <>
      <article className="about  active" data-page="about">

        <header>
          <h2 className="h2 article-title">About me</h2>
        </header>

        <section className="about-text">
          <p>
            I'm a Robotics and Computer Vision Researcher pursuing a Ph.D. in Electrical Engineering at North Carolina State University. My research focuses on deep learning, cooperative perception, and the deployment of advanced AI models on edge devices for autonomous vehicles.
          </p>

          <p>
            With extensive experience leading the EcoPRT Autonomous Vehicle Lab, I specialize in designing perception systems, optimizing machine learning models for real-time edge deployment, and building end-to-end robotic systems from custom PCBs up to fleet management software.
          </p>
        </section>


        {/*
          - service
        */}

        <section className="service">

          <h3 className="h3 service-title">What I'm doing</h3>

          <ul className="service-list">

            <li className="service-item">

              <div className="service-icon-box">
                <img src="./assets/images/icon-dev.svg" alt="Autonomous Systems icon" width="40" />
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">Autonomous Systems</h4>

                <p className="service-item-text">
                  Leading the EcoPRT Autonomous Vehicle Lab and developing prediction and maneuvering algorithms.
                </p>
              </div>

            </li>

            <li className="service-item">

              <div className="service-icon-box">
                <img src="./assets/images/icon-design.svg" alt="Machine Learning & CV icon" width="40" />
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">Machine Learning & CV</h4>

                <p className="service-item-text">
                  Building deep learning and computer vision models using PyTorch, OpenCV, and TensorRT for edge deployment.
                </p>
              </div>

            </li>

            <li className="service-item">

              <div className="service-icon-box">
                <img src="./assets/images/icon-app.svg" alt="Hardware & PCB Design icon" width="40" />
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">Hardware & PCB Design</h4>

                <p className="service-item-text">
                  Designing custom deployment PCBs and integrated hardware for specialized sensors and IMUs.
                </p>
              </div>

            </li>

            <li className="service-item">

              <div className="service-icon-box">
                <img src="./assets/images/icon-photo.svg" alt="Embedded Systems icon" width="40" />
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">Embedded Systems</h4>

                <p className="service-item-text">
                  Developing firmware, motor controls, and hardware interfaces for robotic platforms and custom IoT devices.
                </p>
              </div>

            </li>

          </ul>

        </section>




      </article>

    </>
  );
}
