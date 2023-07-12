import React from "react";
import MainPageContentLayout from "../MainPageContentLayout";

const CreateUserInterfaceFromComponents = () => {
  const CreateUserInterfaceFromComponentsProps = {
    head: "Create user interface from components",
    description: `React lets you build user interfaces out of individual pieces called
            components. Create your own React components like
            Thumbnail,
            LikeButton, and Video. Then combine
            them into entire screens, pages, and apps`,
    scriptName: "Video.js",
    scriptText: (
      <pre>
        {`
          function Video({ video }) {
            return (
              <div>
                <Thumbnail video={video} />
                <a href={video.url}>
                  <h3>{video.title}</h3>
                  <p>{video.description}</p>
                </a>
                <LikeButton video={video} />
              </div>
            );
          }
        `}
      </pre>
    ),
    scriptView: "Video Component",
    idea: `Whether you work on your own or with thousands of other developers,
            using React feels the same. It is designed to let you seamlessly
            combine componnents written by independent people, teams, and
            organizations.`,
  };

  return <MainPageContentLayout {...CreateUserInterfaceFromComponentsProps} />;
};

export default CreateUserInterfaceFromComponents;
