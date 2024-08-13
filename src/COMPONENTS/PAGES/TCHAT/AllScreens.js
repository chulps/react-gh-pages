// libs
import React from "react";
import styled from "styled-components";

// images
import ChatroomAuthenticated from "./PROTOTYPEIMG/ChatroomAuthenticated.png";
import ChatroomAuthenticatedMenuOpen from "./PROTOTYPEIMG/ChatroomAuthenticatedMenuOpen.png";
import ChatroomNotAuthenticated from "./PROTOTYPEIMG/ChatroomNotAuthenticated.png";
import ChatroomNotAuthenticatedQR from "./PROTOTYPEIMG/ChatroomNotAuthenticatedQR.png";
import ChatroomJoin from "./PROTOTYPEIMG/ChatroomJoin.png";
import Chatrooms from "./PROTOTYPEIMG/Chatrooms.png";
import Contacts from "./PROTOTYPEIMG/Contacts.png";
import DashboardNavOpen from "./PROTOTYPEIMG/DashboardNavOpen.png";
import EditProfile from "./PROTOTYPEIMG/EditProfile.png";
import EditSettings from "./PROTOTYPEIMG/EditSettings.png";
import Home from "./PROTOTYPEIMG/Home.png";
import HomeLangOpen from "./PROTOTYPEIMG/HomeLangOpen.png";
import HomeLightTheme from "./PROTOTYPEIMG/HomeLightTheme.png";
import HomeNavOpen from "./PROTOTYPEIMG/HomeNavOpen.png";
import Login from "./PROTOTYPEIMG/Login.png";
import MyProfile from "./PROTOTYPEIMG/MyProfile.png";
import Register from "./PROTOTYPEIMG/Register.png";
import Search from "./PROTOTYPEIMG/Search.png";
import Settings from "./PROTOTYPEIMG/Settings.png";
import UserProfile from "./PROTOTYPEIMG/UserProfile.png";

const Screen = styled.div`
  display: flex;
  gap: var(--unit0);
  flex-direction: column;
`;

const Screens = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--unit3);
`;

const AllScreensSection = styled.section`
  margin-top: var(--unit3) !important;
`;
const images = [
  {
    src: Home,
    title: "Home",
    description:
      "In terms of design there's not a lot going on here, but this is intentional. This screen allows any user to quickly jump into a chatroom and invite others with only two actions. This screen is visible for all users, but the navigation menu changes depending on the user's authentication status.",
  },
  {
    src: HomeNavOpen,
    title: "Home (Nav open)",
    description:
      "When a user is not authenticated, the navigation menu only has three options, Home, Login, and Register. When a user is authenticated, the navigation menu has more options.",
  },
  {
    src: HomeLangOpen,
    title: "Home (Language menu open)",
    description:
      "The app will automatically set the user's language based on their browser's language settings which is accessible in Chromium browsers via 'navigator.language', however, the user can change the language of the app any time via this menu. In this example only 6 languages are pictured but in the deployed version of the app there are over 100 languages.",
  },
  {
    src: HomeLightTheme,
    title: "Home (Light theme)",
    description:
"Some users wanted the ability to have customizeable themes, but that could slow down the launch of my product... so I compromised and settled on having only light and dark themes. Later, I'll add more control over the theme of the app."  },
  {
    src: ChatroomNotAuthenticated,
    title: "Chatroom Not Authenticated",
    description:
      "View of a non-authenticated chatroom. When a user is authenticated they are able to add users to the chatroom from their contacts, and there are more controls in the hidden menu.",
  },
  {
    src: ChatroomNotAuthenticatedQR,
    title: "... QR Code",
    description:
      "Users can toggle the visibility of the QR code to invite others to the chatroom. They can also copy the URL by tapping the 'Link' icon.",
  },
  {
    src: ChatroomJoin,
    title: "Chatroom",
    description:
      "When a user joins an existing chatroom via QR code, URL, or Chatroom ID, they are prompted for their name. Users can enter any name they like in any language. Their name will be translated for other users in the chat.",
  },
  {
    src: Register,
    title: "Register",
    description:
      "Users requested a lot of features that require authentication and interactions with a database. So a normal login and registration flow is necessary.",
  },
  {
    src: EditProfile,
    title: "Edit Profile",
    description:
      "When users initially create an account, they are prompted to create a profile. They can come back to this screen later if they want to skip this process.",
  },
  {
    src: Login,
    title: "Login",
    description:
      "Login screen for user users who are already registered. Registered users will navigate to the dashboard after login.",
  },
  {
    src: Chatrooms,
    title: "Dashboard / Chatrooms Tab",
    description:
      "Users wanted a way to keep their conversations within the app, so a tab in the dashboard is dedicated to storing and creating chatrooms.",
  },
  {
    src: Contacts,
    title: "Dashboard / Contacts tab",
    description:
      "Since users are storing their conversations, they may also need a way to save contact information. This allows users to safely exchange contact information without giving away their personal information.",
  },
  {
    src: Search,
    title: "Dashboard / Search",
    description:
      "Users need a way to find eachother, so users and chatrooms are searchable via the Search tab in their dashboard.",
  },
  {
    src: ChatroomAuthenticated,
    title: "Chatroom Authenticated",
    description:
      "For authenticated users, the chatroom header has more controls. Authenticated users can invite people from their contacts, toggle QR code visibility, copy URL and toggle the visibility of the chatroom utility menu.",
  },
  {
    src: ChatroomAuthenticatedMenuOpen,
    title: "... Menu Open",
    description:
      "The chatroom utility menu has additional features that are not available to unauthenticated users. The menu also includes a button to copy the chatroom ID, an accordion showing the members of the chatroom, the ability to see the original;untranslated message, or leave the chatroom. The chatroom owner has additional controls allowing them to delete the chatroom or make the chatroom searchable.",
  },
  {
    src: DashboardNavOpen,
    title: "Dashboard (Nav open)",
    description:
      "The navigation menu changes when a user is authenticated. The menu options disappear depending on the active screen. In this case, the 'Dashboard' menu option is not visible. The 'Home' menu option is visible for authenticated and authenticated users.",
  },
  {
    src: Settings,
    title: "Settings",
    description: "Application settings screen. Users can change their name, email address, password, and font-size.",
  },
  {
    src: EditSettings,
    title: "Edit Settings",
    description:
      "Users can edit some basic settings including font-size which was specificcally asked for by some users.",
  },
  {
    src: MyProfile,
    title: "My Profile",
    description: "User's own profile view; The design of 'Myy profile' is consistent with the design of 'user profile' but in my profile, the user can only edit their own profile.",
  },
  {
    src: UserProfile,
    title: "User Profile",
    description: "When visiting another user's profile, the user can see the user's profile and the user's chatrooms.",
  },
];
const AllScreens = () => {
  return (
    <AllScreensSection>
      <label>All Screens</label>
      <h2 style={{ maxWidth: "var(--unit6)" }}>Go with the flow</h2>
      <Screens>
        {images.map((image, index) => (
          <Screen>
            <label>{image.title}</label>
            <div className="iphone-frame mt1 mb2" key={index}>
              <img
                className="figma-frame"
                src={image.src}
                alt={`Screen ${image.title}`}
              />
            </div>
            <small>{image.description}</small>
          </Screen>
        ))}
      </Screens>
    </AllScreensSection>
  );
};

export default AllScreens;
