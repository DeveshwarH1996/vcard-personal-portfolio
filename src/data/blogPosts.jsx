import React from 'react';

export const blogPosts = {
  "home-automation": {
    title: "Home Automation Projects",
    category: "Applications",
    date: "Oct 15, 2023",
    image: "/assets/images/Home_Assistant.png",
    content: (
      <div className="blog-text" style={{ color: "var(--light-gray)", lineHeight: 1.6 }}>
        <p>My home automation setup is heavily centered around <strong>Home Assistant</strong>, acting as the primary brain for all interconnected devices. By leveraging Home Assistant's extensive integration capabilities, I am able to unify disparate smart home ecosystems under a single, highly customizable dashboard. This includes automating, logging, and controlling a wide array of IoT devices throughout my home.</p>
        <br />
        <p>For custom hardware interactions, I utilize <strong>ESPHome</strong>. ESPHome allows me to seamlessly program ESP8266 and ESP32 microcontrollers to act as custom sensors and actuators, reporting data directly back to Home Assistant without requiring any external cloud services. For example, I have built custom mmWave radars to handle highly accurate presence and occupancy detection.</p>
        <br />
        <p>Additionally, the setup features fully local, LLM-based voice assistants capable of understanding multiple natural languages using <strong>Ollama</strong>. On the media side, I integrate <strong>Music Assistant</strong> to manage my multi-room audio, utilizing custom-built HiFi speakers and a self-implemented audio-sync protocol (Sendspin) to perfectly synchronize audio across several speakers.</p>
      </div>
    )
  },
  "cat-feeder": {
    title: "Automatic Cat Feeder",
    category: "Embedded Systems",
    date: "Jun 20, 2020",
    image: "/assets/images/automatic_cat_feeder_1774990554831.png",
    content: (
      <div className="blog-text" style={{ color: "var(--light-gray)", lineHeight: 1.6 }}>
        <p>Like many pet owners, I faced the recurring problem of being woken up entirely too early by a hungry cat. To solve this, I decided to engineer a custom automated solution using Python, HTML, and CSS.</p>
        <br />
        <p>I built a custom cat feeder from scratch that integrates automated feeding schedules, voice commands, and a specialized perception algorithm to monitor food levels and cat presence. The perception system ensures the feeder operates only when necessary and tracks the cat's eating habits.</p>
        <br />
        <p>Now, whenever my cat is hungry during his scheduled feeding times, he simply goes to the feeder and interacts with it directly. The automated system handles the rest, which means my mornings are finally uninterrupted and we get to sleep in!</p>
      </div>
    )
  },
  "line-robot": {
    title: "Line Following Robot",
    category: "Robotics",
    date: "Dec 10, 2019",
    image: "/assets/images/line_following_robot_1774990567343.png",
    content: (
      <div className="blog-text" style={{ color: "var(--light-gray)", lineHeight: 1.6 }}>
        <p>During the fall of 2019, I focused on developing a high-speed line following robot. The primary objective of this project was to engineer a robust robotic system capable of navigating a complex track at the highest possible speeds without derailing or losing the line.</p>
        <br />
        <p>Using <strong>Python</strong> and <strong>OpenCV</strong>, I programmed the robot's vision system to process camera feeds in real-time, extracting the line trajectory and calculating the necessary steering adjustments. I developed the control system entirely from scratch, utilizing advanced PID tuning to balance aggressive acceleration with precise cornering.</p>
        <br />
        <p>This project served as an excellent practical application of computer vision and real-time control theory, directly translating raw sensor data into immediate mechanical action to maximize the robot's track performance.</p>
      </div>
    )
  },
  "lane-drone": {
    title: "Lane Following Drone",
    category: "Robotics",
    date: "May 15, 2019",
    image: "/assets/images/lane_following_drone_1774990581879.png",
    content: (
      <div className="blog-text" style={{ color: "var(--light-gray)", lineHeight: 1.6 }}>
        <p>In early 2019, I undertook an ambitious project to build an autonomous lane-following drone from the ground up. This involved not only the physical construction and wiring of the custom drone hardware, but also the development of a sophisticated software stack for autonomous navigation.</p>
        <br />
        <p>I developed the software interfaces using <strong>ROS</strong> and <strong>Gazebo</strong>, connecting them with MavROS to communicate directly with the drone's flight controllers. At the core of the drone's perception system, I implemented a robust ROS node featuring a Convolutional Neural Network (CNN) based lane detector, trained using Deep Learning techniques to identify aerial paths.</p>
        <br />
        <p>To tie it all together, I engineered the flight control systems allowing the vehicle to dynamically change its course and velocity based on the real-time lane predictions generated by the neural network. This project successfully demonstrated the integration of complex deep learning models into airborne robotic control loops.</p>
      </div>
    )
  }
};
