import React from 'react'

const ProjectOverviewSection = () => {
  return (
    <section className="md-two-columns gap2 md-gap3 lg-gap4 pb4">
    <div>
      <p>
        T-Chat is a browser-based chat application that enables users that
        speak different languages to communicate conveniently. It leverages
        Google's Cloud Translation API and Open AI's Whisper API to provide
        real-time translation between users, breaking down language
        barriers, and ensuring that conversations flow smoothly. Many users
        who speak different languages can join a conversation and everyone
        will understand eachother.
      </p>
    </div>
    <div className="two-columns gap2">
      <div>
        <label>Title:</label>
        <h5>Solo Dev/Designer</h5>
      </div>
      <div>
        <label>City:</label>
        <h5>Sapporo</h5>
      </div>
      <div>
        <label>When:</label>
        <h5>2024 - Present</h5>
      </div>
      <div>
        <label>Country:</label>
        <h5>
          <span role="img" aria-label="Japan">
            🇯🇵
          </span>
          &nbsp;Japan
        </h5>
      </div>
    </div>
  </section>
  )
}

export default ProjectOverviewSection
