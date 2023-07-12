import React from "react";
import MainPageContentLayout from "../MainPageContentLayout";

const WriteComponentsWithCodeAndMarkup = () => {
  const WriteComponentsWithCodeAndMarkupProps = {
    head: `Write components with code and markup`,
    description: `React components are Javascript functions. Want to show some content
    conditionally? Use an if statement. Displaying a
    list? Try array map(). Learning React is learning programming`,
    scriptName: `VideoList.js`,
    scriptText: (
      <pre>{`
    function VideoList({ videos, emptyHeading }) {
      const count = videos.length;
      let heading = emptyHeading;
      if (count > 0) {
        const noun = count > 1 ? 'Videos' : 'Vidoe';
        heading = count + ' ' + noun;
      }
      return (
        <section>
          <h2>{heading}</h2>
          {videos.map(video => 
            <Video key={video.id} video={video} />
          )}
        </section>
      );
    }
  `}</pre>
    ),
    scriptView: `Video component`,
    idea: `This markup syntax is called JSX. It is a Javascript syntax
    extension populartized by React. Putting JSX markup close to
    related rendering logic makes React components easy to create,
    maintain, and delete.`,
  };

  return <MainPageContentLayout {...WriteComponentsWithCodeAndMarkupProps} />;
};

export default WriteComponentsWithCodeAndMarkup;
