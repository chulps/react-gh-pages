import React from 'react'

const MVPFeatures = () => {
  return (
    <section className="mt2 gap3">
    <div>
      <label>Core Features</label>
      <h3>
        Core Features of the MVP
      </h3>
      <p>
        The MVP focuses on delivering essential features that enable
        seamless, cross-language communication. Each feature is designed to
        enhance the user experience and ensure that connecting with others,
        regardless of language, is as effortless as possible.
      </p>
    </div>
    <div>
      <ol className="md-two-columns lg-three-columns gap3">
        <li>
          <small>
            <h5>Create Chatrooms:</h5>
            Easily set up chatrooms to connect with others, whether for
            personal or professional communication.
          </small>
        </li>
        <li>
          <small>
            <h5>Join Chatrooms via URL, QR Code, or Chatroom ID:</h5>
            Users can join chatrooms with just a click, scan, or by entering
            a unique ID, making it simple to connect from anywhere.
          </small>
        </li>
        <li>
          <small>
            <h5>Choose from Over 100 Languages:</h5>
            Break down language barriers with the ability to select from a
            vast array of languages, catering to a truly global audience.
          </small>
        </li>
        <li>
          <small>
            <h5>Automatically Translate Messages:</h5>
            Communication flows smoothly with real-time translation,
            ensuring everyone is understood, regardless of the language they
            speak.
          </small>
        </li>
        <li>
          <small>
            <h5>Voice Transcription:</h5>
            Convert spoken words into text effortlessly, allowing for clear
            and accessible communication in noisy environments or for those
            with hearing impairments.
          </small>
        </li>
        <li>
          <small>
            <h5>Rich Metadata When Sharing Links:</h5>
            Enhance shared content with detailed previews, including images,
            titles, and descriptions, making it easier for users to
            understand the context at a glance.
          </small>
        </li>
      </ol>
    </div>
  </section>
  )
}

export default MVPFeatures
