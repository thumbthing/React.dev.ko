import React, { ReactNode } from "react";

interface MainPageTextProps {
  head: string;
  description: ReactNode;
  scriptName?: string;
  scriptText?: ReactNode;
  scriptView?: string;
  idea: string;
  ideaLink?: ReactNode;
  webInfoTitle?: string;
  webInfoDesc?: string;
  nativeAppTitle?: string;
  nativeAppDesc?: string;
}

const UseTheBestFromEveryPlatformProps = {
  head: ``,
  description: ``,
  scriptName: ``,
  scriptText: ``,
  scriptView: ``,
  idea: ``,
  ideaLink: ``,
};

export default function MainPageContentLayout(props: MainPageTextProps) {
  const {
    head,
    description,
    scriptName,
    scriptText,
    scriptView,
    idea,
    ideaLink,
    webInfoTitle,
    webInfoDesc,
    nativeAppTitle,
    nativeAppDesc,
  } = props;
  return (
    <>
      <div>
        <h1>{head}</h1>
        <div></div>
        <h5>{description}</h5>
      </div>
      <div>{scriptName && <h4>{scriptName}</h4>}</div>
      <div>
        {scriptText && <h4>{scriptText}</h4>}
        {scriptView && <div>{scriptView}</div>}
        {webInfoTitle && (
          <div>
            <div>
              <div>lock icon example.com</div>
              <h2>{webInfoTitle}</h2>
              <h5>{webInfoDesc}</h5>
              <div>chrome, firefox, safari</div>
            </div>
            <div>
              <div>time bluetooth wifi battery</div>
              <h2>{nativeAppTitle}</h2>
              <h5>{nativeAppDesc}</h5>
              <div>apple, andriod</div>
            </div>
          </div>
        )}
        <h5>{idea}</h5>
        {ideaLink && <button>{ideaLink}</button>}
      </div>
    </>
  );
}
