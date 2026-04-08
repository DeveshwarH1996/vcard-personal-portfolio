import React from 'react';

export const meta = {
  id: "ecoprt-carla",
  title: "EcoPRT Fleet & CARLA Autonomous Simulation",
  category: "Autonomous Systems",
  date: "Apr 08, 2026",
  image: "/vcard-personal-portfolio/assets/images/EcoPRT_Vehicle.jpg",
  description: "Building the EcoPRT autonomous vehicle fleet from scratch using custom hardware and ROS, and validating cooperative perception algorithms with the CARLA simulator."
};

export default function Post() {
  return (
    <div className="blog-text" style={{ color: "var(--light-gray)", lineHeight: 1.6 }}>

      <div style={{ marginBottom: "30px", borderRadius: "14px", overflow: "hidden", border: "1px solid var(--jet)" }}>
        <iframe
          width="100%"
          height="450"
          src="https://www.youtube.com/embed/BZugYeCJQ4E"
          title="EcoPRT Real World Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>
      </div>

      <h3 style={{ color: "var(--white-2)", marginBottom: "15px", fontSize: "1.2rem", fontWeight: "600" }}>The EcoPRT Project & Custom Hardware</h3>
      <p style={{ marginBottom: "15px" }}>
        The EcoPRT project is a massive engineering initiative aimed at building and operating a robust fleet of autonomous vehicles. Designed to function as an "Uber-style" on-demand transit system, these vehicles are built to navigate complex urban and campus environments seamlessly without driver intervention.
      </p>

      <p style={{ marginBottom: "15px" }}>
        Serving as the Lead Researcher, I spearheaded the effort to engineer these vehicles entirely from scratch. To ensure high-precision localization, deep mapping, and safe maneuverability, I outfitted the vehicles with a cutting-edge, customized sensor suite. This stack includes ultra-precise <strong>GNSS RTK</strong> receivers, advanced <strong>IMUs</strong>, high-density <strong>Velodyne LiDARs</strong>, and <strong>ZED Stereoscopic Cameras</strong> for deep depth perception.
      </p>

      <p style={{ marginBottom: "30px" }}>
        A critical component of this build was the software and electrical architecture. We utilized a hybrid of <strong>ROS1 and ROS2</strong> to build the comprehensive software stack that orchestrates the entire vehicle. Because we were building from the ground up, we engineered <strong>custom hardware PCBs</strong> to manage the low-level communication logic required for actuating the steering and braking systems, safely translating high-level ROS commands into physical, real-world motion.
      </p>

      <h3 style={{ color: "var(--white-2)", marginBottom: "15px", marginTop: "30px", fontSize: "1.2rem", fontWeight: "600" }}>Simulators in the Research Pipeline</h3>

      <div style={{ marginBottom: "30px", borderRadius: "14px", overflow: "hidden", border: "1px solid var(--jet)" }}>
        <iframe
          width="100%"
          height="450"
          src="https://www.youtube.com/embed/ZSrXneifvDs"
          title="EcoPRT CARLA Simulation"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>
      </div>

      <p style={{ marginBottom: "15px" }}>
        Deploying advanced perception models directly onto multi-ton physical hardware is incredibly high-stakes. To safely bridge the gap between theoretical algorithms and street-level deployment, robust simulation environments like <strong>CARLA</strong> are a foundational part of our research pipeline.
      </p>

      <p style={{ marginBottom: "15px" }}>
        Autonomous simulation allows us to digitally recreate complex intersection dynamics, unpredictable pedestrian trajectories, and adverse weather conditions. Specifically, when we were evaluating the impact of our novel <strong>RinneFormer</strong> algorithm—a Transformer-based cross-attention network for cooperative perception—the CARLA simulator was invaluable.
      </p>

      <p style={{ marginBottom: "15px" }}>
        CARLA enabled us to digitally synthesize vehicle-to-vehicle (V2V) sensor sharing, allowing us to test edge-cases of attention-based sensor fusion in a completely safe, repeatable environment. Once validated in the simulation pipeline, we could confidently deploy the algorithms onto the physical edge-compute modules within our ROS framework on the real EcoPRT vehicles.
      </p>

    </div>
  );
}
