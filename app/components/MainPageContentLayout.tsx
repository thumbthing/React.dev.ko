import Image from "next/image";
import React, { ReactNode } from "react";

interface MainPageTextProps {
  head: string;
  description: ReactNode;
  scriptName?: string;
  scriptText?: ReactNode;
  scriptView?: string;
  idea?: string;
  ideaLink?: ReactNode;
  webInfoTitle?: string;
  webInfoDesc?: string;
  nativeAppTitle?: string;
  nativeAppDesc?: string;
  reactNews?: ReactNewsProps[];
  communityPictures?: CommunityPictureProps[];
}

interface ReactNewsProps {
  title: string;
  date: string;
}

interface CommunityPictureProps {
  name: string;
  imagePath: string;
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
    webInfoTitle,
    webInfoDesc,
    nativeAppTitle,
    nativeAppDesc,
    reactNews,
    communityPictures,
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
        {reactNews && (
          <div>
            <ul>
              {reactNews.map((news, index) => (
                <li key={index}>
                  <div>
                    <h2>{news.title}</h2>
                    <h4>{news.date}</h4>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
        {communityPictures && (
          <ul>
            {communityPictures.map((pictures, index) => (
              <li key={pictures.name + index}>
                <Image
                  src={pictures.imagePath}
                  alt={pictures.name + index}
                  width={100}
                  height={100}
                />
              </li>
            ))}
          </ul>
        )}
        <h5>{idea}</h5>
        {ideaLink && <button>{ideaLink}</button>}
      </div>
    </>
  );
}
