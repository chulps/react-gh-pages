import React from 'react'

const nextFeaturesData = [
  {
    title: "Saving Conversations",
    description: "Users want the ability to save and revisit past conversations, ensuring they can retain important discussions for future reference."
  },
  {
    title: "In-App Notifications",
    description: "Notifications for new messages, mentions, and activity within chatrooms are crucial to keep users engaged and informed."
  },
  {
    title: "Video Chat with Subtitles",
    description: "Adding subtitles to video chats would enhance accessibility and ensure that language barriers are minimized even in video communication."
  },
  {
    title: "Play YouTube Videos or Music in Chatrooms",
    description: "Users are asking for the ability to play YouTube videos or music in the background, making chatrooms more interactive and engaging."
  },
  {
    title: "Adding Friends/Contacts",
    description: "The option to add and maintain a list of friends or contacts within the app is a highly requested feature for easier communication."
  },
  {
    title: "Adjustable Font Size",
    description: "Users want the ability to customize the font size to suit their preferences and improve readability, especially for extended conversations."
  },
  {
    title: "Toggle Original, Untranslated Message On/Off",
    description: "The ability to toggle the visibility of the original, untranslated message would provide users with better context and understanding."
  },
  {
    title: "Light/Dark Mode",
    description: "Users have requested both light and dark mode options to suit different lighting conditions and personal preferences."
  },
  {
    title: "Join a Chatroom with Chatroom ID",
    description: "This feature is crucial for those situations when a QR code or URL doesn't work out. I believe this is an edge case, but it's still a feature that users want."
  },
  {
    title: "Voice Transcription",
    description: "Automatically transcribe spoken words into text, making it easier for users to follow along in different languages."
  },
  {
    title: "Rich Metadata When Sharing Links",
    description: "Enhance the link-sharing experience with rich metadata, providing users with a preview of the shared content."
  },
  {
    title: "Reply or React to Messages",
    description: "The ability to directly reply or react to specific messages within a chat would add depth and interaction to conversations."
  },
  {
    title: "End-to-End Encryption",
    description: "Users are concerned about privacy and have requested end-to-end encryption to ensure that their conversations remain secure."
  },
  {
    title: "More Safety Features",
    description: "Additional safety features, such as moderation tools and reporting mechanisms, are essential for maintaining a safe environment."
  }
]

const NextFeatures = () => {
  return (
    <section className="mt4">
      <label>Feature Requests</label>
      <h3 className="mb2">What Users Want to See Next</h3>
      <ul className="md-two-columns lg-three-columns xl-four-columns gap2">
        {nextFeaturesData.map((feature, index) => (
          <li key={index}>
            <h5>{feature.title}</h5>
            <small>{feature.description}</small>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default NextFeatures