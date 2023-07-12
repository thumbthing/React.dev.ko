import React from "react";
import MainPageContentLayout from "../MainPageContentLayout";

const AddInteractivityWhereverYouNeedIt = () => {
  const AddInteractivityWhereverYouNeedItProps = {
    head: `Add interactivity wherever you need it`,
    description: `React components receive data and return what should appear on the
    screen. You can pass them new data in response to an interaction, like
    when the user types into an input. React will then update the screen to
    match the new data`,
    scriptName: `SearchAbleVideoList.js`,
    scriptText: (
      <pre>{`
    import { useState } from 'react';

    function SearchableVideoList({ videos }) {
      const [searchText, setSearchText] = useState('');
      return (
        <>
          <SearchInput
            value={searchText}
            onChange={newText => setSearchText(newText)} />
          <VideoList
            videos={foundVideos}
            emptyHeading={\`No matches for "\${searchText}"}
        </>
      )
    }
  `}</pre>
    ),
    scriptView: `SearchableVideosList component`,
    idea: `You don&apos;t have to build your whole page in React. Add React to your
    existing HTML page, and render interactive React components anywhere on
    it.`,
    ideaLink: <pre>{`</> Add React to your page >`}</pre>,
  };

  return <MainPageContentLayout {...AddInteractivityWhereverYouNeedItProps} />;
};

export default AddInteractivityWhereverYouNeedIt;
