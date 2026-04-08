import React from 'react';

export const meta = {
  id: "home-automation",
  title: "Home Automation Projects",
  category: "Applications",
  date: "Oct 15, 2023",
  image: "/vcard-personal-portfolio/assets/images/Home_Assistant.png",
  description: "A unified smart home ecosystem utilizing Home Assistant, ESPHome, and Ollama to control custom IoT devices and voice assistants."
};

export default function Post() {
  return (
    <div className="blog-text" style={{ color: "var(--light-gray)", lineHeight: 1.6 }}>
      <p>My home automation setup is heavily centered around <strong>Home Assistant</strong>, acting as the primary brain for all interconnected devices. By leveraging Home Assistant's extensive integration capabilities, I am able to unify disparate smart home ecosystems under a single, highly customizable dashboard. This includes automating, logging, and controlling a wide array of IoT devices throughout my home.</p>
      <br />
      <p>For custom hardware interactions, I utilize <strong>ESPHome</strong>. ESPHome allows me to seamlessly program ESP8266 and ESP32 microcontrollers to act as custom sensors and actuators, reporting data directly back to Home Assistant without requiring any external cloud services. For example, I have built custom mmWave radars to handle highly accurate presence and occupancy detection.</p>
      <br />
      <p>Additionally, the setup features fully local, LLM-based voice assistants capable of understanding multiple natural languages using <strong>Ollama</strong>. On the media side, I integrate <strong>Music Assistant</strong> to manage my multi-room audio, utilizing custom-built HiFi speakers and a self-implemented audio-sync protocol (Sendspin) to perfectly synchronize audio across several speakers.</p>
    </div>
  );
}
