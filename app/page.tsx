import Image from "next/image";
import styles from "./page.module.css";
import NavigationBar from "./components/NavigationBar";
import SummaryExplainComponent from "./components/MainPageContentLayout";
import CreateUserInterfaceFromComponents from "./components/main/CreateUserInterfaceFromComponents";
import AddInteractivityWhereverYouNeedIt from "./components/main/AddInteractivityWhereverYouNeedIt";
import WriteComponentsWithCodeAndMarkup from "./components/main/WriteComponentsWithCodeAndMarkup";
import GoFullStackWithAFramework from "./components/main/GoFullStackWithAFramework";
import UseTheBestFromEveryPlatform from "./components/main/UseTheBestFromEveryPlatform";
import UpgradeWhenTheFutureIsReady from "./components/main/UpgradeWhenTheFutureIsReady";
import JoinACommunityOfMillions from "./components/main/JoinACommunityOfMillions";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div>
        <NavigationBar />
        <div>
          <h1>React</h1>
          <h3>The libarary for web and native user interfaces</h3>
          <div>
            <button>learn React</button>
            <button>API Referance</button>
          </div>
        </div>
        <CreateUserInterfaceFromComponents />
        <WriteComponentsWithCodeAndMarkup />
        <AddInteractivityWhereverYouNeedIt />
        <GoFullStackWithAFramework />
        <UseTheBestFromEveryPlatform />
        <UpgradeWhenTheFutureIsReady />
        <JoinACommunityOfMillions />
      </div>
      <Footer />
    </>
  );
}
