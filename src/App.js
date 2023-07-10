import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { BlogPost } from "./blog/BlogPost";
import { linkStyle } from "./styles/text";
import { TopMenu } from "./shared/TopMenu";
import { Footer } from "./shared/Footer";
import { HomePage } from "./pages/HomePage";
import { GamePage } from "./pages/GamePage";

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

const GoToPublicFiles = () => {
  useEffect(() => {
    window.location.replace("https://drive.google.com/drive/folders/1aOLbeKWtyW5pn8C0-Q66NzlvGJfEYGqI");
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
            <Route path="games/:slug" element={<GamePage />} />
            <Route path="expansions/:slug" element={<GamePage />} />
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
