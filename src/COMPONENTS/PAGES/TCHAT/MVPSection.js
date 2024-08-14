import React from "react";
import Home from "./Home.png";
import ChatroomNotAuthenticated from "./ChatroomNotAuthenticated.png";

const MVPSection = () => {
  return (
    <section className="lg-two-columns gap3">
      <div>
        <label>Streamlining the MVP</label>
        <h3>Focusing on What Matters Most</h3>
        <p>
          After mapping out the user journey, it became clear that{" "}
          <b>only two key screens are necessary</b> to achieve a functional MVP.
          This realization allows for a more targeted design approach, ensuring
          that the essential user interactions are prioritized. Additionally, by
          making the onboarding process optional, we can cater to both new users
          who need guidance and experienced users who prefer to dive straight
          in. This approach not only accelerates development but also sets a
          strong foundation for future iterations and enhancements while keeping
          the user experience flexible and user-centric.
        </p>
      </div>
      <div className="md-two-columns gap3 mvp-images">
        <div className="iphone-frame">
          <img className="figma-frame" src={Home} alt="T-Chat" loading="lazy" />
        </div>
        <div className="iphone-frame">
          <img
            className="figma-frame"
            src={ChatroomNotAuthenticated}
            alt="T-Chat"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default MVPSection;
