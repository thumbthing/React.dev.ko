import React from "react";
import MainPageContentLayout from "../MainPageContentLayout";

const UseTheBestFromEveryPlatform = () => {
  const UseTheBestFromEveryPlatformProps = {
    head: `Use the best from every platform`,
    description: `People love web and native apps for different reasons. React lets you build both web apps and native apps using the same skills. It leans upon each platform's unique strengths to let your interface feel just right on every platform.`,
    webInfoTitle: `Stay true to the web`,
    webInfoDesc: `People expect web app pages to load fast. On the server, React lets you start streaming HTML while you're still fetching data, progressively filling in the remaining content before any JavaScript code loads. On the client, React can use standard web APIs to keep your UI responsive even in the middle of rendering.`,
    nativeAppTitle: `Go truly Native`,
    nativeAppDesc: `People expect native apps to look and feel like their platform. React Native and Expo let you build apps in React for Android, iOS, and more. They look and feel native because their UIs are truly native. It's not a web view--your React components render real Andriod and iOS views provided by the platform.`,
    idea: `With React, you can be a web and a native developer. Your team can ship to many platforms without sacrificing the user experince. Your organization can bridge the playform silos, and form teams that own entire features end-to-end.`,
    ideaLinK: <pre>{`device icon Build for native platforms >`}</pre>,
  };
  return <MainPageContentLayout {...UseTheBestFromEveryPlatformProps} />;
};

export default UseTheBestFromEveryPlatform;
