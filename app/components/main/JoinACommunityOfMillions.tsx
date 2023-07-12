import React from "react";
import MainPageContentLayout from "../MainPageContentLayout";

const JoinACommunityOfMillions = () => {
  const JoinACommunityOfMillionsProps = {
    head: `Join a community of millions`,
    description: `You're not alone. Two Million developers from all over the world vistit the React docs every month. React is something that people and teams can agree on.`,
    idea: `This is why React is more than a library, an architecture, or even an ecosystem. React is a community. It's a place where you can ask for help, find opportunities, and meet new friends. You will meet both developers and designers, beginners and experts, researchers and artists, teachers and students. Our backgrounds may be very different, but React lets us all create user interfaces together.`,
    communityPictures: [
      {
        name: `default_image`,
        imagePath: `/default.png`,
      },
      {
        name: `default_image`,
        imagePath: `/default.png`,
      },
      {
        name: `default_image`,
        imagePath: `/default.png`,
      },
      {
        name: `default_image`,
        imagePath: `/default.png`,
      },
      {
        name: `default_image`,
        imagePath: `/default.png`,
      },
      {
        name: `default_image`,
        imagePath: `/default.png`,
      },
    ],
  };

  return <MainPageContentLayout {...JoinACommunityOfMillionsProps} />;
};

export default JoinACommunityOfMillions;
