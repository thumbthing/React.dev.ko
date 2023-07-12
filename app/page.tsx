import Image from "next/image";
import styles from "./page.module.css";
import NavigationBar from "./components/NavigationBar";

export default function Home() {
  return (
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
      <div>
        <h1>Create user interface from components</h1>
        <div></div>
        <h5>
          React lets you build user interfaces out of individual pieces called
          components. Create your own React components like
          <strong>Thumbnail,</strong>
          <strong>LikeButton</strong>, and <strong>Video</strong>. Then combine
          them into entire screens, pages, and apps
        </h5>
      </div>
      <div>
        <div>
          <h4>Video.js</h4>
        </div>
        <div>
          <h3>
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
          </h3>
          <div>Video Component</div>
          <h3>
            Whether you work on your own or with thousands of other developers,
            using React feels the same. It is designed to let you seamlessly
            combine componnents written by independent people, teams, and
            organizations.
          </h3>
        </div>
        <div>
          <h1>Write components with code and markup</h1>
          <h3>
            React components are Javascript functions. Want to show some content
            conditionally? Use an <strong>if</strong> statement. Displaying a
            list? Try array{" "}
            <strong>
              <pre>{`map()`}</pre>
            </strong>
            . Learning React is learning programming
          </h3>
          <div>
            <h3>VideoList.js</h3>
            <div>
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
            </div>
            <div>Video component</div>
            <h4>
              This markup syntax is called JSX. It is a Javascript syntax
              extension populartized by React. Putting JSX markup close to
              related rendering logic makes React components easy to create,
              maintain, and delete.
            </h4>
          </div>
          <div>
            <h1>Add interactivity wherever you need it</h1>
            <h3>
              React components receive data and return what should appear on the
              screen. You can pass them new data in response to an interaction,
              like when the user types into an input. React will then update the
              screen to match the new data
            </h3>
            <div>
              <h4>SearchAbleVideoList.js</h4>
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
            </div>
            <div>SearchableVideosList component</div>
            <h4>
              You don&apos;t have to build your whole page in React. Add React
              to your existing HTML page, and render interactive React
              components anywhere on it.
            </h4>
            <button>
              <pre>{`</> Add React to your page >`}</pre>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
