import React, { ReactNode } from "react";

interface MainPageTextProps {
  head: string;
  description: ReactNode;
  scriptName: string;
  scriptText: ReactNode;
  scriptView: string;
  idea: string;
  ideaLink?: ReactNode;
}

export default function MainPageContentLayout(props: MainPageTextProps) {
  const {
    head,
    description,
    scriptName,
    scriptText,
    scriptView,
    idea,
    ideaLink,
  } = props;
  return (
    <>
      <div>
        <h1>{head}</h1>
        <div></div>
        <h5>{description}</h5>
      </div>
      <div>
        <h4>{scriptName}</h4>
      </div>
      <div>
        <h4>{scriptText}</h4>
        <div>{scriptView}</div>
        <h5>{idea}</h5>
        {ideaLink && <button>{ideaLink}</button>}
      </div>
    </>
  );
}
