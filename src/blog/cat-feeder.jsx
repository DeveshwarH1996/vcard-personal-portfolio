import React from 'react';

export const meta = {
  id: "cat-feeder",
  title: "Automatic Cat Feeder",
  category: "Embedded Systems",
  date: "Jun 20, 2020",
  image: "/vcard-personal-portfolio/assets/images/automatic_cat_feeder_1774990554831.png",
  description: "A custom engineered automated cat feeder utilizing perception algorithms to manage feeding times to ensure more sleep."
};

export default function Post() {
  return (
    <div className="blog-text" style={{ color: "var(--light-gray)", lineHeight: 1.6 }}>
      <p>Like many pet owners, I faced the recurring problem of being woken up entirely too early by a hungry cat. To solve this, I decided to engineer a custom automated solution using Python, HTML, and CSS.</p>
      <br />
      <p>I built a custom cat feeder from scratch that integrates automated feeding schedules, voice commands, and a specialized perception algorithm to monitor food levels and cat presence. The perception system ensures the feeder operates only when necessary and tracks the cat's eating habits.</p>
      <br />
      <p>Now, whenever my cat is hungry during his scheduled feeding times, he simply goes to the feeder and interacts with it directly. The automated system handles the rest, which means my mornings are finally uninterrupted and we get to sleep in!</p>
    </div>
  );
}
