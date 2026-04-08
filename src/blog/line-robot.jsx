import React from 'react';

export const meta = {
  id: "line-robot",
  title: "Line Following Robot",
  category: "Robotics",
  date: "Dec 10, 2019",
  image: "/vcard-personal-portfolio/assets/images/line_following_robot_1774990567343.png",
  description: "A high-speed robot engineered with Python and OpenCV to autonomously navigate a complex track without derailing."
};

export default function Post() {
  return (
    <div className="blog-text" style={{ color: "var(--light-gray)", lineHeight: 1.6 }}>
      <p>During the fall of 2019, I focused on developing a high-speed line following robot. The primary objective of this project was to engineer a robust robotic system capable of navigating a complex track at the highest possible speeds without derailing or losing the line.</p>
      <br />
      <p>Using <strong>Python</strong> and <strong>OpenCV</strong>, I programmed the robot's vision system to process camera feeds in real-time, extracting the line trajectory and calculating the necessary steering adjustments. I developed the control system entirely from scratch, utilizing advanced PID tuning to balance aggressive acceleration with precise cornering.</p>
      <br />
      <p>This project served as an excellent practical application of computer vision and real-time control theory, directly translating raw sensor data into immediate mechanical action to maximize the robot's track performance.</p>
    </div>
  );
}
