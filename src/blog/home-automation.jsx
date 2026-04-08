import React from 'react';

export const meta = {
  id: "home-automation",
  title: "Building a High-Availability, Local-First Smart Home",
  category: "Applications",
  date: "Oct 15, 2023",
  image: "/vcard-personal-portfolio/assets/images/Home_Assistant.png",
  description: "A deep dive into my fully local smart home ecosystem featuring custom ESPHome hardware, fail-safe relay switchboards, and multi-lingual voice assistants."
};

export default function Post() {
  return (
    <div className="blog-text" style={{ color: "var(--light-gray)", lineHeight: 1.6 }}>
      
      <p style={{ marginBottom: "15px" }}>
        My home automation setup is heavily centered around <strong>Home Assistant</strong>, serving as the central nervous system for all interconnected devices. While the ecosystem currently runs entirely on a Raspberry Pi, I am actively migrating the architecture to a dedicated 2-node Proxmox cluster to ensure enterprise-grade high availability for critical home infrastructure. 
      </p>

      <h3 style={{ color: "var(--white-2)", marginBottom: "15px", marginTop: "30px", fontSize: "1.2rem", fontWeight: "600" }}>Custom ESPHome Hardware & Fail-Safes</h3>
      <p style={{ marginBottom: "15px" }}>
        Rather than relying on closed ecosystems, I heavily utilize <strong>ESPHome</strong> to engineer custom devices that communicate purely locally. I've designed several custom millimeter-wave (mmWave) presence sensors unified with temperature and humidity modules for high-accuracy room occupancy. 
      </p>
      
      <p style={{ marginBottom: "15px" }}>
        Hardware hacking is also a major component of my smart home. For example, I successfully reverse-engineered a commercial <em>PetKit Fresh Element Solo</em> pet feeder, flashing it with custom ESPHome firmware to liberate it from cloud dependency. 
      </p>

      <p style={{ marginBottom: "15px" }}>
        Perhaps my most important custom build is a fail-safe smart switchboard. I engineered this using hardware relays mapped seamlessly to our smart lights. Under normal operations, flipping the physical switch sends a digital command to Home Assistant. However, if the Home Assistant server is ever offline, the switchboard automatically detects the network failure and reverts to functioning as a traditional "dumb" switch—hardwiring the relays to ensure the house's lights always work regardless of server uptime. (I am also currently developing a custom smart lock featuring local facial recognition!)
      </p>

      <h3 style={{ color: "var(--white-2)", marginBottom: "15px", marginTop: "30px", fontSize: "1.2rem", fontWeight: "600" }}>Multi-Lingual Local AI Assistants</h3>
      <p style={{ marginBottom: "15px" }}>
        To eliminate cloud dependency for voice commands, I integrated <strong>Ollama</strong> as a local LLM backend. The voice pipeline is highly customized, utilizing dedicated wake words to seamlessly switch between languages without processing confusion. Saying <em>"Okay Nabu"</em> triggers the English processing pipeline, while saying <em>"Hey Jarvis"</em> directly triggers processing for Tamil.
      </p>

      <h3 style={{ color: "var(--white-2)", marginBottom: "15px", marginTop: "30px", fontSize: "1.2rem", fontWeight: "600" }}>Whole-House Synchronized Audio</h3>
      <p style={{ marginBottom: "15px" }}>
        On the media side, I use Music Assistant paired with the open-source Sendspin protocol to stream perfectly synchronized audio seamlessly across multiple rooms. To take full advantage of this, I actually built custom C-note HiFi speakers from scratch! I drive these acoustic speakers using an ESP32-S3 microcontroller coupled with a precise PCM5102 DAC and a dedicated power amplifier. <em>(Expect a dedicated blog post entirely about building these C-note speakers soon!)</em>
      </p>

      <h3 style={{ color: "var(--white-2)", marginBottom: "15px", marginTop: "30px", fontSize: "1.2rem", fontWeight: "600" }}>My Favorite Automation: Circadian Sleep Tracking</h3>
      <p style={{ marginBottom: "15px" }}>
        While the underlying hardware is deeply complex, my absolute favorite automation tackles a purely human element: sleep cycles. This circadian routine heavily integrates with an Adaptive Lighting system tied dynamically to the sun's current angle to adjust color temperature.
      </p>

      <p style={{ marginBottom: "15px" }}>
        In the morning, the automation begins when either my phone or my partner's phone triggers an "alarm dismissed" event. Crucially, Home Assistant waits until it detects physical motion in the bathroom or living room to ensure we are actually getting out of bed. Once motion is detected, it turns the house lights on at just 1% brightness. Over the next hour, it slowly ramps the brightness and the color temperature up to perfectly match the mathematical brightness curve of the morning sun.
      </p>

      <p style={{ marginBottom: "15px" }}>
        At night, the inverse sequence occurs. When our phones automatically enter "Wind Down" mode, Home Assistant begins imperceptibly dimming the lights, shifting them to warmer color temperatures and slowly dragging the brightness down to 1%. This naturally induces sleepiness without us ever noticing the transition. 
      </p>

    </div>
  );
}
