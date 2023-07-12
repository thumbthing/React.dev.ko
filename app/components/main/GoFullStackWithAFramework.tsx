import React from "react";
import MainPageContentLayout from "../MainPageContentLayout";

const GoFullStackWithAFramework = () => {
  const GoFullStackWithAFrameworkProps = {
    head: `Go full-stack with a framework`,
    description: `React is a library. It lets you put components together, but it doesn't prescribe how to do routing and data fetching. To build an entire app with React, we recommend a full-stack React framework like Next.js or Remix.`,
    scriptName: `confs/[slug].js`,
    scriptText: (
      <pre>{`
      import { db } from './database.js';
      import {suspense } from 'react';

      async function ConferencePage({ slug }) {
        const conf = await db.Confs.find({ slug });
        return (
          <ConferenceLayout conf={conf} />
            <Suspense fallback={<Talksloading />}
              <Talks confId={conf.id} />
            </Suspense>
          </ConferenceLayout>
        );
      }

      async function Talks({ confId }) {
        const talks = await db.Talks.findAll({ confId });
        const videos = talks.map(talk => talk.video);
        return <SearchableVideoList videos={videos} />;
      }
    `}</pre>
    ),
    scriptView: `react-conf-video component`,
    idea: `React is also an architecture. Frameworks that implement it let you fetch data in asynchronous components that run on the server or even during the build. Read data from a file or a database, and pass it down to your interactive components.`,
    ideaLink: <pre>{`icon Get started with a framwork >`}</pre>,
  };
  return <MainPageContentLayout {...GoFullStackWithAFrameworkProps} />;
};

export default GoFullStackWithAFramework;
