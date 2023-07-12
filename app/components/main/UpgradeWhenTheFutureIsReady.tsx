import React from "react";
import MainPageContentLayout from "../MainPageContentLayout";

const UpgradeWhenTheFutureIsReady = () => {
  const UpgradeWhenTheFutureIsReadyProps = {
    head: `Upgrade when the future is ready`,
    description: `React approaches changes with care. Every React commit is tested on business-critical surfaces with over a billion users. Over 100,000 React components at Meta help validate every migration strategy.
    
    The React team is always researching how to improve React. Some Research takes years to pay off. React has a high bar for taking a research idea into production. Only proven approaches become a part of React.
    `,
    reactNews: [
      {
        title: `React Canaries: Incremental Featur Rollout`,
        date: `May 3, 2023`,
      },
      {
        title: `React Labs: March 2023`,
        date: `March 22, 2023`,
      },
      {
        title: `Introducing react.dev`,
        date: `March 16, 2023`,
      },
      {
        title: `React Labs: June 2022`,
        date: `June 15, 2022`,
      },
    ],
    ideaLink: <pre>{`icon Read more React news >`}</pre>,
  };
  return <MainPageContentLayout {...UpgradeWhenTheFutureIsReadyProps} />;
};

export default UpgradeWhenTheFutureIsReady;
