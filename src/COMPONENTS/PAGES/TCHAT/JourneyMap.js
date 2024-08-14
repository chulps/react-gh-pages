import React from 'react'
import JourneyMapImg from "./JourneyMap.png";

const JourneyMap = () => {
  return (
    <section className="my4 md-two-columns gap3">
    <div>
      <img className="journey-map-img" src={JourneyMapImg} alt=""  loading="lazy"/>
    </div>
    <div>
      <h3>High-level Mapping and User Journey Exercises</h3>
      <p>
        The next step in the process is to map out the user's journey
        through this app. I created a detailed mind map that guided the user
        journey and interface design. This mind map captures the key
        touchpoints and interactions for each user persona, ensuring a
        seamless experience throughout the application. You can explore the
        complete mind map by following the link below.
      </p>
      <p>
        <a
          href="https://mm.tt/app/map/3377771276?t=1d80Azl16T"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>View the T-Chat Mind Map</button>
        </a>
      </p>
    </div>
  </section>
  )
}

export default JourneyMap
