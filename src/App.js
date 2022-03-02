import { useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";
import logo from "./images/icon.png";
import sbs1808 from "./images/expansion-with-background.png";
import sbs1811 from "./images/18-holes-second-edition-with-background.png";
import sbs1810 from "./images/18-rolls-box-shot-with-green-background.png";
import vl from "./images/vl-box-art.png";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { getLatestPosts } from "./services/sanity";
import { BlogPost } from "./blog/BlogPost";
import { linkStyle } from "./styles/text";

const TopMenu = () => {
  return (
    <nav className="text-xs p-2 bg-gray-100 border-b border-black text-black">
      <ul className="flex row justify-between items-center">
        <div className="flex-0 row justify-evenly items-center">
          <li>
            <a href="/">
              <img src={logo} alt="Company Logo" className="h-16 w-16" />
            </a>
          </li>
        </div>
        <div className="flex-1 hidden md:visible" />
        <div className="flex-1 flex row justify-evenly items-center">
          <li className="hover:text-white hover:rounded-full h-12 w-12 flex justify-center items-center hover:bg-black">
            <a href="https://shop.seabrook-studios.com">SHOP</a>
          </li>
          <li className="hover:text-white hover:rounded-full h-12 w-12 flex justify-center items-center hover:bg-black">
            <a href="https://press.seabrook-studios.com" className="text-xs text-center">
              PRESS
            </a>
          </li>
          <SocialIcon url="https://twitter.com/seabrookstudios" fgColor="white" bgColor="#222" />
          <li>
            <SocialIcon
              url="https://instagram.com/seabrookstudios/"
              fgColor="white"
              bgColor="#222"
            />
          </li>
          <li>
            <SocialIcon url="mailto:hello@seabrook-studios.com" fgColor="white" bgColor="#222" />
          </li>
        </div>
      </ul>
    </nav>
  );
};

const Tag = ({ children, bgColor, borderColor }) => {
  return (
    <span
      style={{ fontSize: 10 }}
      className={`rounded border border-black p-1 mr-1 leading-sm uppercase ${bgColor} ${borderColor}`}
    >
      {children}
    </span>
  );
};

const BaseGame = () => {
  return (
    <Tag bgColor="bg-green-100" borderColor="border-green-600">
      game
    </Tag>
  );
};

const Expansion = () => {
  return (
    <Tag bgColor="bg-blue-100" borderColor="border-blue-600">
      EXPANSION
    </Tag>
  );
};
const Ios = () => {
  return (
    <Tag bgColor="bg-purple-100" borderColor="border-purple-600">
      IOS
    </Tag>
  );
};
const Android = () => {
  return (
    <Tag bgColor="bg-yellow-100" borderColor="border-yellow-600">
      ANDROID
    </Tag>
  );
};

const Game = ({
  name,
  img,
  description,
  link,
  linkText,
  game,
  expansion,
  ios,
  android,
  players,
  age,
  duration,
  moreInfoLink,
}) => {
  return (
    <div className="py-6 px-1 max-h-80">
      <div className="flex max-w-3xl bg-white shadow-lg rounded-lg h-full">
        <div className="w-1/3">
          <img src={img} alt={`${name} box shot`} className="h-64" />
        </div>
        <div className="w-2/3 flex justify-start flex-col">
          <div className="p-3">
            <h1 className="text-gray-900 font-bold text-2xl">{name}</h1>
            <div className="flex justify-start items-center hidden md:block">
              {game && <BaseGame />}
              {expansion && <Expansion />}
              {ios && <Ios />}
              {android && <Android />}
            </div>
            <p className="pt-2 text-gray-600 text-sm">{description}</p>
            <div className="grid grid-cols-2 pt-4 pb-2 hidden md:grid">
              <p className="text-sm">Players</p>
              <p className="text-sm">{players}</p>
              <p className="text-sm">Ages</p>
              <p className="text-sm">{age}</p>
              <p className="text-sm">Playing Time</p>
              <p className="text-sm">{duration} minutes</p>
            </div>
          </div>
          <div className="flex item-center justify-end pr-3">
            {moreInfoLink && (
              <a
                href={moreInfoLink}
                className="px-3 py-2 border border-gray-800 text-black text-xs font-bold uppercase rounded mr-2 hover:text-black hover:bg-pink-300"
              >
                MORE INFO
              </a>
            )}
            <a
              href={link}
              className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded border border-gray-800 hover:text-black hover:bg-pink-300"
              target="_blank"
              rel="noreferrer"
            >
              {linkText}
              <span
                className="invert pl-2"
                style={{
                  content:
                    "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAQElEQVR42qXKwQkAIAxDUUdxtO6/RBQkQZvSi8I/pL4BoGw/XPkh4XigPmsUgh0626AjRsgxHTkUThsG2T/sIlzdTsp52kSS1wAAAABJRU5ErkJggg==)",
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Games = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      <h1 className="bold text-4xl font-serif text-pink-500">Our Games</h1>
      <div className="grid grid-rows-auto grid-cols-1 mx-auto">
        <Game
          name="18 Holes"
          description="Hit off-course on purpose in this golf-themed board game for 1 to 5 players."
          img={sbs1811}
          link="https://gamefound.com/projects/seabrookstudios/18-holes-reading-the-greens"
          linkText="Late Pledge Now!"
          game
          players="1 - 5"
          age="10+"
          duration="30-45"
          // moreInfoLink="/games/18-holes"
        />
        <Game
          name="Putting Wind &amp; Coastlines Expansion"
          img={sbs1808}
          description="Get back on course and take the competition to the greens while taming the wind and rugged coastlines in this 18 Holes expansion."
          link="https://gamefound.com/projects/seabrookstudios/18-holes-reading-the-greens"
          linkText="Late Pledge Now!"
          expansion
          players="1 - 5"
          age="10+"
          duration="+15 - 30"
          // moreInfoLink="/games/18-holes"
        />
        <Game
          name="Course Architect"
          img={sbs1810}
          link="https://gamefound.com/projects/seabrookstudios/18-holes-reading-the-greens"
          linkText="Late Pledge Now!"
          description="Can you handle the whims of the committee and design the best golf course with what fate has given you?"
          game
          players="1 - 18"
          age="10+"
          duration="20-30"
          // moreInfoLink="/games/course-architect"
        />
        <Game
          name="Victory Lap"
          img={vl}
          link="https://playvictorylap.com"
          linkText="Visit Page"
          description="Race with your head. Not with your thumbs. Victory Lap is a turn-based racing action emphasising tactics over twitch."
          game
          ios
          android
          players="1 - 20"
          age="10+"
          duration="20"
        />
      </div>
    </section>
  );
};

const Blurb = () => {
  return (
    <p className="max-w-prose mx-auto text-lg py-8">
      We are an independent studio based in Melbourne, Australia. Our current focus is to making
      sports-themed games more accessible to everyone; not just those with great reaction skills.
    </p>
  );
};

const PostList = ({ title, postList }) => {
  return (
    <div>
      <h1 className="text-lg text-pink-500">{title}</h1>
      <ul>
        {postList.map((post) => {
          return (
            <li className="list-disc list-inside" key={post.slug.current}>
              <Link className={linkStyle} to={`/blog/${post.slug.current}`}>
                {post.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Footer = () => {
  const [latestPosts, setLatestsPost] = useState([]);

  const fetchPosts = async () => {
    const posts = await getLatestPosts();

    setLatestsPost(posts);
  };

  // useEffect(() => {
  //   fetchPosts();
  // }, []);

  return (
    <div className="bg-gray-100 border-t border-black flex flex-col justify-center items-center text-black text-sm p-4">
      {/* <PostList postList={latestPosts} title="Recent Posts" /> */}
      <img src={logo} alt="Seabrook Studios Logo" className="h-24 w-24 mt-4" />
      <p>© Seabrook Studios 2018-2022</p>
      <p className="text-xs text-gray-400">
        Apple logo is a trademark of Apple Inc. Google Play and the Google Play logo are trademarks
        of Google LLC.
      </p>
    </div>
  );
};

const HomePage = () => {
  return (
    <>
      <Blurb />
      <Games />
    </>
  );
};

const GoToPublicFiles = () => {
  useEffect(() => {
    window.location.replace(
      "https://drive.google.com/drive/folders/1aOLbeKWtyW5pn8C0-Q66NzlvGJfEYGqI"
    );
  }, []);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      <div className="max-w-screen-lg mx-auto justify-between flex flex-col bg-white border-black border-l border-r">
        <div className="flex flex-col flex-grow ">
          <TopMenu />
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="games/course-architect" element={<GoToPublicFiles />} /> */}
            {/* <Route path="blog/:slug" element={<BlogPost />} /> */}
            {/* <Route path="*" element={<Navigate to="/" />} /> */}
          </Routes>
        </div>
        <div className="flex-0 justify-self-end">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
