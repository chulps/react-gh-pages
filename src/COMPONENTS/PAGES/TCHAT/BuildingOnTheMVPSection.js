import React from "react";

const BuildingOnTheMVPSection = () => {
  return (
    <section className="lg-two-columns gap3 mt4">
      <div>
        <label>Figma Prototype</label>
        <div className="prototype-frame">
          <iframe
            title="`T-Chat` Figma Prototype"
            style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
            width="100%"
            height="650"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FINUShNpcGk0fqAYsZ1nUwo%2FT-Chat%3Fpage-id%3D0%253A1%26node-id%3D3121-427%26viewport%3D-3370%252C1333%252C0.58%26t%3D8UsjU9MZ0Mn1ym9l-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26starting-point-node-id%3D3121%253A427"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div>
        <label>Building on the MVP</label>
        <h3>Enhancing the Experience with Advanced Features</h3>
        <p>
          As T-Chat progresses beyond the initial MVP, the next phase of
          development focuses on incorporating additional features that enhance
          user experience and functionality. These enhancements include
          Authentication, allowing users to securely access their profiles and
          data, and the ability to save conversations for future reference.
          In-app notifications will keep users updated in real time, while the
          option to add friends or contacts expands the social aspect of the
          platform. Customization options like adjustable font sizes and
          toggling the display of original untranslated messages will provide
          users with a more tailored experience. Additionally, users will be
          able to search for contacts or chatrooms, making it easier to stay
          connected and manage conversations effectively.
        </p>
      </div>
    </section>
  );
};

export default BuildingOnTheMVPSection;
